import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/tattler");
        console.log("Connected to DB")
    } catch (error) {
        console.log(error);
    }
    
};