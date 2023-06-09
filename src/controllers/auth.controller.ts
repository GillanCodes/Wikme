import {sign} from "jsonwebtoken";
import config from "../../config/config";
import * as express from "express";
import userModel from '../../models/user.model';
import { loginErrors, registerErrors } from "../utils/errors.utils";

const maxAge:number = 3*21*60*60*1000;
const createToken = (id:string) => {
    return sign({id}, config.JWT_TOKEN as string, {
        expiresIn: maxAge
    });
};

export const register = async (req: express.Request, res: express.Response) => {
    const {username, email, password}: {username:string,email:string,password:string} = req.body;
    try {
        const user = await userModel.create({username, email, password});
        return res.status(201).json({user:user._id});
    } catch (error) {
        const errors = registerErrors(error);
        res.status(200).send({errors});
    };
};

export const login = async (req: express.Request, res: express.Response) => {
    const {log, password}: {log:string,password:string} = req.body;
    
    try {
        var user = await userModel.login(log, password);
        const token:string = createToken(user._id);
        res.cookie('auth', token, {httpOnly: true, maxAge});
        return res.status(200).json({user});
    } catch (error) {
        const errors = loginErrors(error);
        res.status(201).send({errors});
    };
};

export const logout = async(req: express.Request, res: express.Response) => {
    res.cookie("auth", null, {httpOnly: true, maxAge: 1});
    return res.status(200).send('logout');
};