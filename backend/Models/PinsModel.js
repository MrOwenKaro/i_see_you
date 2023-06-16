import mongoose from "mongoose";

const PinsModelSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3
    },
    visit:{
        type:String,
        required:true,
        min:3
    },
    contact:{
        type:String,
        required:true,
        min:3
    },
    transport:{
        type:String,
        required:true,
        min:3
    },
    title:{
        type:String,
        required:true,
        min:3
    },
    working:{
        type:String,
        required:true,
        min:3
    },
    desc:{
        type:String,
        required:true,
        min:3
    },
    rating:{
        type:Number,
        required: true,
        min:0,
        max:5
    },
    lat:{
        type:Number,
        required:true
    },
    long:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Pins = mongoose.model("Pins",PinsModelSchema)

export default Pins