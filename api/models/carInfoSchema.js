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
    }
});

export default mongoose.model("CarInfo", CarInfoSchema);