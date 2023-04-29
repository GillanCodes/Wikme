import { Document, Schema, model } from "mongoose";

export interface IPage extends Document
{
    name:string
    wikiId:string,
    content:string
};

const pageSchema = new Schema<IPage>({
    name: {type:String, required:true, minlength:1, maxlength:255},
    wikiId: {type:String, required:true},
    content: {type:String}
});

const pageModel = model<IPage>('page', pageSchema);
export default pageModel;