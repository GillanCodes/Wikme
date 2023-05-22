import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { isEmpty } from "../utils/isEmpty";
import categoryModel from "../../models/category.model";

export const getCategories = async (req:Request, res:Response) => {
    try {
        const { wikiId } = req.body;
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
        const { wikiId, name } = req.body;
        if (isEmpty(wikiId)) throw Error("empty_field : wikiId");
        if (isEmpty(name)) throw Error("empty_field : name");
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

};

export const deleteCategories = (req:Request, res:Response) => {

};