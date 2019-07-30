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
    const fuel = req.body.fuel;
    const gearbox = req.body.gearbox;
    const drive = req.body.drive;
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const color = req.body.color;
    const engineCode = req.body.engineCode;
    const mileage = req.body.mileage;
    const power = req.body.power;
    const capacity = req.body.capacity;
    const numOfDoors = req.body.numOfDoors;
    const numOfSeats = req.body.numOfSeats;
    const yearOfProd = req.body.yearOfProd;
    const equipment = req.body.equipment;
    const images = req.body.images;
    const createdBy = req.body.user;
    const countryOfProd = req.body.countryOfProd;
    const firstRegistration = req.body.firstRegistration;
    const registerInPoland = req.body.registerInPoland;
    const firstOwner = req.body.firstOwner;
    const damaged = req.body.damaged;
    const dpf = req.body.dpf;
    const noAccidents = req.body.noAccidents;
    const servisedInAso = req.body.servisedInAso;
    const registerAsAntique = req.body.registerAsAntique;
    const tunned = req.body.tunned;
    const homologated = req.body.homologated;
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone;
    const location = req.body.location;
    const newCar = new CarInfo({
      brand: brand,
      model: model,
      version: version,
      fuel: fuel,
      gearbox: gearbox,
      drive: drive,
      title: title,
      description: description,
      price: price,
      color: color,
      engineCode: engineCode,
      mileage: mileage,
      power: power,
      capacity: capacity,
      numOfDoors: numOfDoors,
      numOfSeats: numOfSeats,
      yearOfProd: yearOfProd,
      countryOfProd: countryOfProd,
      firstRegistration: firstRegistration,
      registerInPoland: registerInPoland,
      firstOwner: firstOwner,
      damaged: damaged,
      dpf: dpf,
      noAccidents: noAccidents,
      servisedInAso: servisedInAso,
      registerAsAntique: registerAsAntique,
      tunned: tunned,
      homologated: homologated,
      equipment: equipment,
      images: images,
      createdBy: createdBy,
      username: username,
      email: email,
      phone: phone,
      location: location
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
          .updateOne({isDeleted: true})
          // .remove()
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
  editCar(req, res) {
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
          res.send({error: "wrong user"});
          return;
        }
        res.send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default CarsInfos;
