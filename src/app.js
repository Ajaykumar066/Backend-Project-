import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credential : true
}));

app.use(express.json({limit: '16kb' }))

app.use(express.urlencoded({extend: true,limit: '16kb'}))

app.use(express.static("public"))

app.use(cookieParser())


// routers
import  userRouter from './routers/user.router.js'
 
// routes declaration 

app.use("/api/v1/user", userRouter)


export { app } 