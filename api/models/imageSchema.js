import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let ImageSchema = new Schema({
    path: {
        type: String
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Image", ImageSchema);