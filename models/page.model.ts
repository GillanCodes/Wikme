import { Document, Schema, Types, model } from "mongoose";

export interface IPage extends Document
{
    name:string
    wikiId:string,
    content:Types.Array<Object>
};

const pageSchema = new Schema<IPage>({
    name: {type:String, required:true, minlength:1, maxlength:255},
    wikiId: {type:String, required:true},
    content: {type:[Object]} 
}, {timestamps:true});

const pageModel = model<IPage>('page', pageSchema);
export default pageModel;