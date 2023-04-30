import * as express from 'express'
import userModel from '../../models/user.model';

export const getUser = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;

    const user = await userModel.findById(id);
    return res.status(200).send(user);
}