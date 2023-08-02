import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    review:{
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true
});

export default mongoose.model("Review", reviewSchema);