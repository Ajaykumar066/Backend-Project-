import dotenv from "dotenv"
import connectDB from "./dataBase/index.js";
//import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()