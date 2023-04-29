import config from "../config/config";
import * as jwt from 'jsonwebtoken';
import userModel from "../models/user.model";

module.exports.checkUser = async (req, res, next) => {

    let token = req.cookie.auth;
    if (token)
    {
        jwt.verify(token, config.JWT_TOKEN, async(err, decodedToken) => {
            if (err)
            {
                res.locals.user = null;
                next();
            } else {
                let user = await userModel.findById(decodedToken.id).select('-password');
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports.requireAuth = (req, res, next) => {
    const token = req.cookie.user;
    if (token)
    {
        jwt.verify(token, config.JWT_TOKEN, async (err, decodedToken) => {
            if (err)
            {
                console.log(err);
            } else {
                next();
            }
        })
    } else {
        return res.status(200);
    }
}