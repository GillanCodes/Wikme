import * as express from "express";
import config from "../../config/config";

import * as fs from "fs";
import genUId from "../utils/UId";
import imageModel from "../../models/image.model";

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
        if (req.file.mimetype !==  "image/jpg" && req.file.mimetype !== "image/png" && req.file.mimetype !== "image/jpeg") throw Error('Invalide Type ! ');
        if (req.file.size > 500000) throw Error('Max Size !');
    } catch (error) {
        console.log(error);
    }

    const fileName = `${genUId()}.jpg`;

    console.log(req.file.buffer);

    fs.writeFile(`${config.CDN_PATH}/${fileName}`, req.file.buffer, (err) => {
        if (err) console.log(err);
    });

    imageModel.create({
        ownerId: res.locals.user._id,
        path: fileName
    }).then((data) => {
        res.status(201).send(data);
    }).catch(err => console.log(err));

}