import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import cors from 'cors'
import Router from './Routes.js'
dotenv.config()

const app = express();
const port = process.env.PORT
const atlas = process.env.ATLAS

app.use(morgan("tiny"))
app.use(cors({origin:"https://648c84bf946d9526d62a13fc--celebrated-pastelito-7273bc.netlify.app"}))
app.use(express.json())
app.use("/api",Router)

app.listen(port,()=>{
    console.log(`Server is now live on port ${port}`)
})

mongoose.connect(atlas, {useNewUrlParser: true})
const connect = mongoose.connection;
connect.once('open', ()=> {
    console.log("You are now successfully connected to MongoDB");
})



