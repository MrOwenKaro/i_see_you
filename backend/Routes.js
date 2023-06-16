import express from 'express'
import { LogInCont, RegisterCont, getAllPins, getAllUsers, pushPin } from './Controllers.js';

const Router =  express.Router();

Router.post("/Register",RegisterCont)
Router.post("/LogIn",LogInCont)
Router.post("/NewPin",pushPin)
Router.get("/AllPins",getAllPins)
Router.get("/getAllUsers",getAllUsers)


export default Router