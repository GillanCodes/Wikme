import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { isEmpty } from "../utils/isEmpty";
import categoryModel from "../../models/category.model";

export const getCategories = async (req:Request, res:Response) => {
    try {
        const { wikiId } : { wikiId:string } = req.body;
        if (isEmpty(wikiId)) throw Error('empty_field : wikiId');
        if (!isValidObjectId(wikiId)) throw Error("invalid_format_ObjectId : wikiId");
        
        var categories = await categoryModel.find({wikiId: wikiId});
        res.status(200).send({categories});
    } catch (error) {
        console.log(error);
        res.send(403).send(error);
    } 
};

export const createCategories = (req:Request, res:Response) => {
    try {
        const { wikiId, name } : {wikiId:string, name:string} = req.body;
        if (isEmpty(wikiId)) throw Error("empty_field : wikiId");
        if (isEmpty(name)) throw Error("empty_field : categories.name");
        if (!isValidObjectId(wikiId)) throw Error('invalid_format_ObjectId : wikiId');

        categoryModel.create({
            name,
            wikiId,
            childs: [],
        }).then((data) => {
            return res.status(201).send({data});
        }).catch((err) => {
            throw Error(err)
        });
    } catch (error) {
        console.log(error);
        res.send(403).send(error);
    };
};

export const updateCategories = (req:Request, res:Response) => {
    try {
        const { catId } = req.params;
        const { name, childs } : {name:string, childs:[string]} = req.body;

        if (!isValidObjectId(catId)) throw Error('');
        if (isEmpty(name)) throw Error('empty_field : categories.name');
        if (isEmpty(childs)) throw Error('empty_field : categories.childs');

        categoryModel.updateMany({
            $set: {
                name,
                childs
            }
        }, {new:true, upsert: true}).then((data) => {
            return res.status(201).send({data});
        }).catch((err) => {
            throw Error (err);
        });
    } catch (error) {
        console.log(error);
        res.send(403).send(error);
    };
};

export const deleteCategories = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        
    }
};