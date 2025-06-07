import dotenv from "dotenv"
import connectDB from "./dataBase/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()

.then(()=>{
    app.on('error', (err) => {
        console.error('SERVER error:', err);
    });
    
    app.listen(process.env.PORT||8000,()=>{
        console.log(`SERVER is RUNING at PORT ${process.env.PORT}`);
    });
})

.catch((error)=>{
    console.log("MONGODB Connection Failed !!!", error);    
})