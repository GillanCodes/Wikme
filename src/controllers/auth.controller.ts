import {sign} from "jsonwebtoken";
import config from "../../config/config";
import { RequestHandler } from "express-serve-static-core";
import userModel from '../../models/user.model';

const maxAge:number = 3*21*60*60*1000;
const createToken = (id:string) => {
    return sign({id}, config.JWT_TOKEN as string, {
        expiresIn: maxAge
    });
};

export const register:RequestHandler = async (req, res) => {
    const {username, email, password}: {username:string,email:string,password:string} = req.body;
    try {
        const user = await userModel.create({username, email, password});
        return res.status(201).json({user:user._id});
    } catch (error) {
        console.log(error);
    }
}

export const login:RequestHandler = async (req,res) => {
    const {log, password}: {log:string,password:string} = req.body;
    
    try {
        var user = await userModel.login(log, password);
        const token:string = createToken(user._id);
        res.cookie('auth', token, {httpOnly: true, maxAge});
        return res.status(200).json({user});
    } catch (error) {
        console.log(error);
    }
};

export const logout:RequestHandler = async(req, res) => {
    res.cookie("auth", null, {httpOnly: true, maxAge: 1});
    return res.status(200);
}