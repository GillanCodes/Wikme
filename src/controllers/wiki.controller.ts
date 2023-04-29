import { RequestHandler } from "express";
import wikiModel from "../../models/wiki.model";

export const getWikis:RequestHandler = (req, res) => {

};

export const getWiki:RequestHandler = (req, res) => {

};

export const createWiki:RequestHandler = async (req, res) => {

    try {
        if (res.locals.user) 
        {
            const {name, description} : {name:string, description:string} = req.body;
            wikiModel.create({
                name,
                description,
                ownerId: res.locals.user.id
            }).then((data) => {
                return res.status(201).send(data)
            }).catch((err) => {
                console.log(err);
            })
        } else {
            
        }
    } catch (error) {
        console.log(error);
    }

};