import mongoose from "mongoose";
import jwt from "jsonwebtoken";

let CarInfo = mongoose.model("CarInfo");

class CarsInfos {
  loadAllCars(req, res) {
    if (isNaN(+req.query.limit) || +req.query.limit < 0) {
      res.status(500).send("Wrong query");
      return;
    }
    let limit = Math.min(+req.query.limit, 50);
    CarInfo.find({isDeleted: false})
      .sort({createdTime: "desc"})
      .limit(limit)
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  loadMyCars(req, res) {
    CarInfo.find({createdBy: req.body.user})
      .sort({createdTime: "desc"})
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
  findCars(req, res) {
    let fields = req.body.fields;
    let queryType = req.body.type;
    let query = [];
    let limit = Math.min(req.body.limit, 50);
    let page = req.body.page;
    let skip = (Math.max(0, +page) - 1) * limit;
    if (Object.entries(req.body.search).length === 0 && req.body.search.constructor === Object) {
      CarInfo.find({isDeleted: false})
        .sort({createdTime: "desc"})
        .limit(limit)
        .skip(skip)
        .then(result => {
          res.status(200).send(result);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      if (queryType === "simple") {
        fields.strings.forEach(path => {
          query.push({[path]: {$regex: req.body.search, $options: "i"}});
        });
        CarInfo.find({isDeleted: false})
          .sort({createdTime: "desc"})
          .or(query)
          .limit(limit)
          .skip(skip)
          .then(result => {
            res.status(200).send(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
      if (queryType === "complex") {
        console.log(req.body.search);
        for (let property in req.body.search) {
          query.push({[property]: req.body.search[property]});
        }
        console.log(query);
        CarInfo.find({isDeleted: false})
          .and(query)
          .limit(limit)
          .skip(skip)
          .then(result => {
            res.status(200).send(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
  addCar(req, res) {
    const brand = req.body.brand;
    const model = req.body.model;
    const version = req.body.version;
    const category = req.body.category;
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
      category: category,
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
  saveEditedCar(req, res) {
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
        let carToEdit = new CarInfo(result);
        let newImages = req.body.images;
        let imagesToRemove = req.body.imagesToRemove;
        imagesToRemove.forEach(imageToRemove => {
          let imToRemove = newImages.find(image => {
            return image.src === imageToRemove.src;
          });
          newImages.splice(newImages.indexOf(imToRemove), 1);
        });
        carToEdit
          .updateOne({
            brand: req.body.brand == "" ? carToEdit.brand : req.body.brand,
            model: req.body.model == "" ? carToEdit.model : req.body.model,
            version: req.body.version == "" ? carToEdit.version : req.body.version,
            category: req.body.category == "" ? carToEdit.category : req.body.category,
            fuel: req.body.fuel == "" ? carToEdit.fuel : req.body.fuel,
            price: req.body.price == "" ? carToEdit.price : req.body.price,
            mileage: req.body.mileage == "" ? carToEdit.mileage : req.body.mileage,
            yearOfProd: req.body.yearOfProd == "" ? carToEdit.yearOfProd : req.body.yearOfProd,
            location: req.body.location == "" ? carToEdit.location : req.body.location,
            email: req.body.email == "" ? carToEdit.email : req.body.email,
            gearbox: req.body.gearbox,
            drive: req.body.drive,
            title: req.body.title,
            description: req.body.description,
            color: req.body.color,
            engineCode: req.body.engineCode,
            power: req.body.power,
            capacity: req.body.capacity,
            numOfDoors: req.body.numOfDoors,
            numOfSeats: req.body.numOfSeats,
            equipment: req.body.equipment,
            images: newImages,
            countryOfProd: req.body.countryOfProd,
            firstRegistration: req.body.firstRegistration,
            registerInPoland: req.body.registerInPoland,
            firstOwner: req.body.firstOwner,
            damaged: req.body.damaged,
            dpf: req.body.dpf,
            noAccidents: req.body.noAccidents,
            servisedInAso: req.body.servisedInAso,
            registerAsAntique: req.body.registerAsAntique,
            tunned: req.body.tunned,
            homologated: req.body.homologated,
            username: req.body.username,
            phone: req.body.phone
          })
          .then(result => {
            res.status(200).send("Car edited");
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
