import mongoose from "mongoose";
import aws from "aws-sdk";
// import Sharp from "sharp";
import readBlob from "read-blob";
import path from "path";
import fs from "fs-extra";
// import multer from "multer";

// const S3_BUCKET = process.env.S3_BUCKET;
// aws.config.loadFromPath("./api/aws/config.json");
// const s3 = new aws.S3();

let Image = mongoose.model("Image");

// const upload = multer({dest: 'uploaded-images/'});

class Images {
  addImage(req, res) {
    res.send(req.file);
  }
  removeImage(req, res) {}
  // addImage(req, res) {
  //   const unique = new Date().valueOf();
  //   const fileName = `${req.body.fileName}_${unique}`;
  //   const fileExt = req.body.fileExt;
  //   const fileType = req.body.fileType;
  //   const directory = req.body.directory;

  //   const s3Params = {
  //     Bucket: S3_BUCKET,
  //     Key: `${directory}/${fileName}${fileExt}`,
  //     Expires: 60,
  //     ContentType: fileType,
  //     ACL: "public-read"
  //   };

  //   s3.getSignedUrl("putObject", s3Params, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return res.end();
  //     }
  //     const returnData = {
  //       signedRequest: data,
  //       url: `https://${S3_BUCKET}.s3.amazonaws.com/${directory}/${fileName}${fileExt}`,
  //       key: `${directory}/${fileName}${fileExt}`
  //     };
  //     res.send(returnData);
  //   });
  // }
  // removeImage(req, res) {
  //   const s3Params = {
  //     Bucket: S3_BUCKET,
  //     Key: req.body.key
  //   };
  //   s3.deleteObject(s3Params, (err, data) => {
  //       if (err) {
  //           console.log(err);
  //           return res.end();
  //       }
  //       res.send(data);
  //   });
  // }
}

export default Images;
