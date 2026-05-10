const multer = require("multer");

const {
  CloudinaryStorage
} = require("multer-storage-cloudinary");

const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({

  cloudinary,

  params: {

    folder: "campus-lost-found"

  }

});

const upload = multer({
  storage
});

module.exports = upload;