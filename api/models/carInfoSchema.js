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
    category: {
        type: String
    },
    fuel: {
        type: String,
        default: "Wybierz rodzaj paliwa"
    },
    gearbox: {
        type: String
    },
    drive: {
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
        required: "Wybierz rok produkcji"
    },
    countryOfProd: {
        type: String
    },
    firstRegistration: {
        type: Date
    },
    registerInPoland: {
        type: Boolean
    },
    firstOwner: {
        type: Boolean
    },
    damaged: {
        type: Boolean
    },
    dpf: {
        type: Boolean
    },
    noAccidents: {
        type: Boolean
    },
    servisedInAso: {
        type: Boolean
    },
    registerAsAntique: {
        type: Boolean
    },
    tunned: {
        type: Boolean
    },
    homologated: {
        type: Boolean
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
    username: {
        type: String
    },
    email: {
        type: String,
        required: "Podaj swój email"
    },
    phone: {
        type: String
    },
    location: {
        type: Object,
        required: "Podaj lokalizację"
    },
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