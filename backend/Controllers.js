import bcryptjs from 'bcryptjs'
import User from './Models/UserModel.js';
import Pins from './Models/PinsModel.js';

export const RegisterCont = async (req,res) => {

    try {
        const {username,email,password} = req.body;
        const salt = await bcryptjs.genSalt(10);

        const hashedpassword = await bcryptjs.hash(password,salt)

        const newUser =  new User({
            username,
            email,
            password:hashedpassword
        })

        const savedUser = await newUser.save()

        res.status(200).json(savedUser)
    } catch (error) {
        res.status(401).json(error)
    }
    

}

export const LogInCont = async (req,res) => {

    try {
        const {email,password} = req.body
        const OneUser = await User.findOne({email})
        if(!OneUser) return res.status(401).json("Please Verify your Credentials")

        const passwordVerified = await bcryptjs.compare(password,OneUser.password)
        if(!passwordVerified) return res.status(401).json("Credentials mismatch occured , please try again")

        res.status(200).json({_id: OneUser._id, username:OneUser.username})
    } catch (error) {
        res.status(401).json(error)
    }
    
}

export const pushPin = async (req,res) => {

    try {
        const {username,title,desc,rating,lat,long,working,transport,contact,visit} = req.body;
        const newPin = new Pins({
        username,
        title,
        desc,
        rating,
        lat,
        long,
        working,
        transport,
        contact,
        visit
        })

        const savePin = await newPin.save()

        res.status(200).json(savePin)
    } catch (error) {
        res.status(401).json(error)
    }
    


}

export const getAllPins = async (req,res) => {
    try {
        const fetchAllPins = await Pins.find()
        res.status(200).json(fetchAllPins)
    } catch (error) {
        res.status(401).json(error)
    }
}

export const getAllUsers = async (req,res) => {
    try {
        const myUsers = await User.find()
        res.status(200).json(myUsers)
    } catch (error) {
        res.status(200).json(error)
    }
}