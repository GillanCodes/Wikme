import { Document, Schema, model } from "mongoose";

export interface IWiki extends Document
{
   name:string,
   ownerId:string,
   description:string
};

const wikiSchema = new Schema<IWiki>({
    ownerId: {type: String, require:true},
    name : {type:String, required: true, maxlength:25, minlength:1},
    description: {type:String, maxlength:255},
});

const wikiModel = model<IWiki>('wiki', wikiSchema);
export default wikiModel;