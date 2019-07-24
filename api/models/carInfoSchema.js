import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CarInfoSchema = new Schema({
    brand: {
        type: String,
        required: "Wybierz markę"
    },
    model: {
        type: String,
        required: "Wybierz model"
    },
    version: {
        type: String,
        default: "NO_VERSION"
    },
    fuel: {
        type: String,
        default: "Wybierz rodzaj paliwa"
    },
    gearbox: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: "Podaj cenę"
    },
    mileage: {
        type: Number,
        required: "Podaj przebieg"
    },
    yearOfProd: {
        type: Number,
        required: "Podaj rok produkcji"
    },
    color: {
        type: String
    },
    engineCode: {
        type: String
    },
    power: {
        type: Number
    },
    capacity: {
        type: Number
    },
    numOfDoors: {
        type: Number
    },
    numOfSeats: {
        type: Number
    },
    equipment: [{
        type: Object
    }],
    images: [{
        type: Object
    }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("CarInfo", CarInfoSchema);