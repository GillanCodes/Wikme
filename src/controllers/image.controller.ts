import * as express from "express";
import config from "../../config/config";

import * as fs from "fs";
import genUId from "../utils/UId";
import imageModel from "../../models/image.model";
import { uploadErrors } from "../utils/errors.utils";

export const getImages = async (req: express.Request, res: express.Response) => {
    try {
        const images = await imageModel.find({ownerId: res.locals.user._id});
        return res.status(200).send(images);
    } catch (error) {
        console.log(error);
    }
}

export const postImage = async (req: any, res: express.Response) => {
    try {
        if (req.file.mimetype !==  "image/jpg" && req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpeg") throw Error('invalid_type');
        if (req.file.size > 500000) throw Error('max_size');
    } catch (error:any) {
        const errors = uploadErrors(error)
        return res.status(200).send({errors});
    }

    const fileName = `${genUId()}.jpg`;
    fs.writeFile(`${config.CDN_PATH}/${fileName}`, req.file.buffer, (err) => {
        if (err) console.log(err);
    });
    imageModel.create({
        ownerId: res.locals.user._id,
        path: fileName
    }).then((data) => {
        res.status(201).send(data);
    });
}

export const deleteImage = (req: express.Request, res: express.Response) => {
    try {
        const {id, path} : {id:string, path:string} = req.body;
        fs.rm(`${config.CDN_PATH}/${path}`, (error) => {
            imageModel.findByIdAndDelete(id).then(() => res.status(201).send({id, path}))
        });
    } catch (error) {
        console.log(error);
    }
}