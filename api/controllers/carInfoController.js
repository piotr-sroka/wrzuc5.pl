import mongoose from 'mongoose';

let CarInfo = mongoose.model("CarInfo");

class CarsInfos {
    loadAllCars(req, res) {
        CarInfo.find().then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
        });
    }
    loadMyCars(req, res) {
        CarInfo.find({createdBy:req.body.user}).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
        });
    }
    loadCar(req, res) {
        CarInfo.findById(req.params.id).then(result => {
            res.status(200).send(result);
        }).catch(err => {
            console.log(err);
        })
    }
    addCar(req, res) {
        const brand = req.body.brand;
        const model = req.body.model;
        const title = req.body.title;
        const description = req.body.description;
        const createdBy = req.body.user;
        const newCar = new CarInfo({ brand: brand, model: model, title: title, description: description, createdBy: createdBy });
        newCar.save().then(response => {
            res.status(200).send("Car added correctly.")
        }).catch(err => {
            console.log(err);
        });
    }
}

export default CarsInfos;