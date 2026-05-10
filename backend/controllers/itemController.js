const Item = require("../models/Item");


// CREATE ITEM
const createItem = async (
  req,
  res
) => {

  try {

    const {
      title,
      description,
      category,
      location,
      status
    } = req.body;

    const image =
      req.file
        ? req.file.path
        : "";

    const newItem = new Item({

      title,
      description,
      category,
      location,
      status,
      image,

      createdBy:
        req.user.id

    });

    await newItem.save();

    res.status(201).json({

      message:
        "Item posted successfully",

      item: newItem

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// GET ALL ITEMS
const getAllItems = async (
  req,
  res
) => {

  try {

    const items =
      await Item.find()

        .populate(
          "createdBy",
          "name email phone"
        )

        .populate(
          "claimedBy",
          "name email phone"
        )

        .sort({
          createdAt: -1
        });

    res.status(200).json(items);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// GET SINGLE ITEM
const getSingleItem = async (
  req,
  res
) => {

  try {

    const item =
      await Item.findById(
        req.params.id
      )

        .populate(
          "createdBy",
          "name email phone"
        )

        .populate(
          "claimedBy",
          "name email phone"
        );

    if (!item) {

      return res.status(404).json({
        message:
          "Item not found"
      });

    }

    res.status(200).json(item);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// DELETE ITEM
const deleteItem = async (
  req,
  res
) => {

  try {

    const item =
      await Item.findById(
        req.params.id
      );

    if (!item) {

      return res.status(404).json({
        message:
          "Item not found"
      });

    }

    // CHECK OWNERSHIP
    if (

      item.createdBy.toString() !==
      req.user.id

    ) {

      return res.status(403).json({
        message:
          "Not authorized"
      });

    }

    await item.deleteOne();

    res.status(200).json({
      message:
        "Item deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// UPDATE ITEM
const updateItem = async (
  req,
  res
) => {

  try {

    const item =
      await Item.findById(
        req.params.id
      );

    if (!item) {

      return res.status(404).json({
        message:
          "Item not found"
      });

    }

    // CHECK OWNERSHIP
    if (

      item.createdBy.toString() !==
      req.user.id

    ) {

      return res.status(403).json({
        message:
          "Not authorized"
      });

    }

    const {
      title,
      description,
      category,
      location,
      status
    } = req.body;

    item.title =
      title || item.title;

    item.description =
      description ||
      item.description;

    item.category =
      category ||
      item.category;

    item.location =
      location ||
      item.location;

    item.status =
      status ||
      item.status;

    // UPDATE IMAGE
    if (req.file) {

      item.image =
        req.file.path;

    }

    await item.save();

    res.status(200).json({

      message:
        "Item updated successfully",

      item

    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }

};


// CLAIM ITEM
const claimItem = async (
  req,
  res
) => {

  try {

    const item =
      await Item.findById(
        req.params.id
      );

    if (!item) {

      return res.status(404).json({
        message:
          "Item not found"
      });

    }

    // PREVENT OWNER CLAIMING OWN ITEM
    if (

      item.createdBy.toString() ===
      req.user.id

    ) {

      return res.status(400).json({
        message:
          "You cannot claim your own item"
      });

    }

    // PREVENT CLAIMING AGAIN
    if (
      item.status ===
      "claimed"
    ) {

      return res.status(400).json({
        message:
          "Item already claimed"
      });

    }

    item.status =
      "claimed";

    item.claimedBy =
      req.user.id;

    item.claimedAt =
      new Date();

    await item.save();

    // IMPORTANT:
    // RETURN UPDATED ITEM WITH PHONE NUMBER
    const updatedItem =
      await Item.findById(item._id)

        .populate(
          "createdBy",
          "name email phone"
        )

        .populate(
          "claimedBy",
          "name email phone"
        );

    res.status(200).json({

      message:
        "Item claimed successfully",

      item: updatedItem

    });

  } catch (error) {

    res.status(500).json({
      message:
        error.message
    });

  }

};


module.exports = {

  createItem,
  getAllItems,
  getSingleItem,
  deleteItem,
  updateItem,
  claimItem

};