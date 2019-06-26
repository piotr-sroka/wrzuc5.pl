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
        required: "Wybierz wersję"
    },
    title: {
        type: String,
        minlength: [10, "Tytuł jest zbyt krótki"],
        maxlength: 40
    },
    description: {
        type: String,
        minlength: [10, "Opis jest zbyt krótki"],
        maxlength: 20000
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("CarInfo", CarInfoSchema);