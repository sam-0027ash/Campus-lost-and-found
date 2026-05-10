const express = require("express");

const router = express.Router();

const upload = require("../config/upload");

const {
  createItem,
  getAllItems,
  getSingleItem,
  deleteItem,
  updateItem,
  claimItem
} = require("../controllers/itemController");

const authMiddleware = require("../middleware/authMiddleware");

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  createItem
);

router.get("/", getAllItems);

router.get("/:id", getSingleItem);

router.delete(
  "/:id",
  authMiddleware,
  deleteItem
);

router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateItem
);

router.put(
  "/claim/:id",
  authMiddleware,
  claimItem
);

module.exports = router;