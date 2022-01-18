import mongoose from "mongoose";
import aws from "aws-sdk";
import readBlob from "read-blob";
import path from "path";
import fs from "fs-extra";
import sharp from "sharp";
// import multer from "multer";

// const S3_BUCKET = process.env.S3_BUCKET;
// aws.config.loadFromPath("./api/aws/config.json");
// const s3 = new aws.S3();

let Image = mongoose.model("Image");

// const upload = multer({dest: 'uploaded-images/'});

class Images {
  async addImage(req, res) {
    // const tes = await function (ttt) {
    //   setTimeout(() => {
    //     console.log("ok");
    //   }, 1000);
    // }
    // tes();
    await sharp(req.file.path)
      .resize(1024, 1024, { fit: sharp.fit.inside })
      .toBuffer((err, buffer) => {
        fs.writeFile(
          path.resolve(req.file.destination, req.file.filename),
          buffer
        );
      });
    // fs.unlinkSync(req.file.path);
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
