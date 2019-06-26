import mongoose from "mongoose";
import aws from "aws-sdk";

const S3_BUCKET = process.env.S3_BUCKET;

let Image = mongoose.model("Image");

class Images {
  addImage(req, res) {
    aws.config.region = "eu-central-1";
    aws.config.endpoint = "s3.eu-central-1.amazonaws.com";
    aws.config.signatureVersion = "v4";
    const s3 = new aws.S3();
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 60,
      ContentType: fileType,
      ACL: "public-read"
    };

    s3.getSignedUrl("putObject", s3Params, (err, data) => {
      if (err) {
        console.log(err);
        return res.end();
      }
      const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      res.send(returnData);
    });
  }
}

export default Images;
