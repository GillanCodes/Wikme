import * as express from "express";
import wikiModel from "../../models/wiki.model";

export const getWikis = async (req: express.Request, res: express.Response) => {
    
    try {
       if (res.locals.user) {
            const wikis = await wikiModel.find({ownerId: res.locals.user.id});
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
                console.log(err);
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
        const {name, description} : {name:string, description:string} = req.body;
        wikiModel.findByIdAndUpdate(id, {
            $set: {
                name,
                description
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
        return res.status(201).send({id});
    } catch (error) {
        console.log(error);
    }
}