import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
console.log(process.env.MONGODB_URI);
//const mySecret = process.env['MONGODB_URI']
const connectDB = async () => {
    try {
        const connectionInstance =    await mongoose.connect('mongodb+srv://heroma248:ajay1234@hal-9000.ekyzjgr.mongodb.net/');
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB