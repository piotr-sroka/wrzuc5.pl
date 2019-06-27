import mongoose from "mongoose";
import jwt from "jsonwebtoken";

let CarInfo = mongoose.model("CarInfo");

class CarsInfos {
  loadAllCars(req, res) {
    CarInfo.find()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  loadMyCars(req, res) {
    CarInfo.find({createdBy: req.body.user})
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  loadCar(req, res) {
    CarInfo.findById(req.params.id)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  addCar(req, res) {
    const brand = req.body.brand;
    const model = req.body.model;
    const version = req.body.version;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const images = req.body.images;
    const createdBy = req.body.user;
    const newCar = new CarInfo({
      brand: brand,
      model: model,
      version: version,
      title: title,
      description: description,
      price: price,
      images: images,
      createdBy: createdBy
    });
    newCar
      .save()
      .then(response => {
        res.status(200).send("Car added correctly.");
      })
      .catch(err => {
        res.status(200).send(err);
      });
  }
  removeCar(req, res) {
    if (!req.headers.cookie) {
      return;
    }
    let token = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("jwt="))
      .split("=")[1];
    CarInfo.findById(req.params.id)
      .then(result => {
        if (jwt.decode(token).id.toString() !== result.createdBy.toString()) {
          return;
        }
        let carToRemove = new CarInfo(result);
        carToRemove
          .remove()
          .then(result => {
            res.status(200).send("Car removed");
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default CarsInfos;
