import * as express from 'express';
import pageModel from '../../models/page.model';
import { createPageErrors, updatePageErrors } from '../utils/errors.utils';

export const getPages = async (req: express.Request, res: express.Response) => {
    try {
        if (res.locals.user) 
        {
            const { id } = req.params;
            const pages = await pageModel.find({wikiId: id});
            return res.status(200).send(pages);
        } else {
            return res.status(403).send("Forbidden : Not logged");
        }
    } catch (error) {
        console.log(error);
    }
}

export const createPage = (req: express.Request, res: express.Response) => {
    try {
        if (res.locals.user)
        {
            const { id } = req.params;
            const { name } : { name:string } = req.body;
            pageModel.create({
                wikiId: id,
                name
            }).then((data) => {
                return res.status(201).send(data);
            }).catch((error) => {
                const errors = createPageErrors(error);
                res.status(200).send({errors});
            })
        } else {
            return res.status(403).send("Forbidden : Not Logged");
        }
    } catch (error) {
        console.log(error);
    }
}

export const updatePageContent = (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { content } : { content:string } = req.body;
        if (res.locals.user)
        {
            pageModel.findByIdAndUpdate(id, {
                $set: {
                    content
                }
            }, {new:true, upsert: true}).then((data) => {
                return res.status(201).send(data);
            }).catch((error) => {
                console.log(error)
            })
        } else {
            return res.status(403).send("Forbidden : Not Logged");
        }
    } catch(error) {
        console.log(error);
    }
}

export const pageUpdate = (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { name } : {name:string} = req.body;
        if (name.length < 255) {
            pageModel.findByIdAndUpdate(id, {
                $set: {
                    name
                }
            }, {new:true, upsert: true}).then((data) => {
                return res.status(201).send(data);
            });
        } else {
            var errors = updatePageErrors('too_long');
            return res.status(200).send({errors});
        }
   } catch (error) {
        console.log(error);
    }
}

export const deletePage = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        if (res.locals.user)
        {
            var page = await pageModel.deleteOne({_id: id});
            return res.status(201).send({id});
        } 
    } catch (error) {
        console.log(error);   
    }
}