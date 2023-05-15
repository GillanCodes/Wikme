import * as express from "express";
import wikiModel from "../../models/wiki.model";
import pageModel from "../../models/page.model";
import { createWikiErrors, updateWikiErrors } from "../utils/errors.utils";

export const getWikis = async (req: express.Request, res: express.Response) => {
    
    try {
       if (res.locals.user) {
            const wikis = await wikiModel.find({$or: [{ownerId: res.locals.user.id}, {isPublic: true}]});
            return res.status(200).send(wikis);
       } else {
        return res.status(403).send('Forbidden: Not logged');
       } 
    } catch (error) {
        console.log(error)
    }

}; 

export const getWiki = async (req: express.Request, res: express.Response) => {
    try {
        if (res.locals.user) {
            const { id } = req.params;
            const wiki = await wikiModel.findById(id);
            return res.status(200).send(wiki);
        } else {
            return res.status(403).send('Forbidden: Not logged');
        }
    } catch (error) {
        console.log(error)
    }
};

export const createWiki = async (req: express.Request, res: express.Response) => {

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
                const errors = createWikiErrors(err);
                res.status(200).send({errors});
            })
        } else {
           
        }
    } catch (error) {
        console.log(error);
    }

};

export const updateWiki = (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const {name, description, isPublic} : {name:string, description:string, isPublic:boolean} = req.body;
        if (name.length > 25) {
            const errors = updateWikiErrors("toolong_name");
            return res.status(200).send({errors});
        }
        if (description.length > 255) {
            const errors = updateWikiErrors("toolong_desc");
            return res.status(200).send({errors});
        }
        wikiModel.findByIdAndUpdate(id, {
            $set: {
                name,
                description,
                isPublic
            }
        }, {new: true, upsert:true}).then((data) => {
            return res.status(201).send(data);
        }).catch((error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error);
    }
}

export const deleteWiki = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        var wiki = await wikiModel.findByIdAndDelete(id)
        var pages = await pageModel.deleteMany({wikiId: id});
        return res.status(201).send({id});
    } catch (error) {
        console.log(error);
    }
}