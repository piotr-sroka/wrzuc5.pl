import fs from "fs";
import multer from "multer";

module.exports = {
  storage: new multer.diskStorage({
    destination: (req, file, cb) => {
      const dest = `uploaded-images/${req.body.directory}`;
      fs.access(dest, (error) => {
        if (error) {
          return fs.mkdir(dest, (error) => cb(error, dest));
        } else {
          return cb(null, dest);
        }
      });
    },
    filename: async (req, file, cb) => {
      cb(
        null,
        `${Date.now()}-${Math.round(Math.random() * 1e9)}-${file.originalname}`
      );
    },
  }),
};
