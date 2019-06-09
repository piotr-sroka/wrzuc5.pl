import mongoose from 'mongoose';

let CarInfo = mongoose.model("CarInfo");

class CarsInfos {
    loadAllCars(req, res) {
        CarInfo.find().then(result => {
            res.send(result);
        }).catch(err => {
            console.log(err);
        });
    }

    addCar(req, res) {
        const brand = req.body.brand;
        const model = req.body.model;
        const newCar = new CarInfo({ brand: brand, model: model });
        newCar.save().then(response => {
            res.status(200).send("Car added correctly.")
        }).catch(err => {
            console.log(err);
        });
    }
}

export default CarsInfos;