import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CarInfoSchema = new Schema({
    brand: {
        type: String,
        required: "Please enter brand"
    },
    model: {
        type: String,
        required: "Please enter model"
    },
    title: {
        type: String,
        minlength: [10, "Title is too short"],
        maxlength: 40
    },
    description: {
        type: String,
        minlength: [10, "Description is too short"],
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