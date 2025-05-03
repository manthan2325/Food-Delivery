import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manthan:5zvAoBzsb4FcaBLb@cluster0.likmy.mongodb.net/food-dev').then(() => console.log("DB Connected"))
}

