import { Document, Schema, model } from "mongoose";

export interface IWiki extends Document
{
   name:string,
   ownerId:string,
   description:string
   isPublic:boolean
};

const wikiSchema = new Schema<IWiki>({
    ownerId: {type: String, require:true},
    name : {type:String, required: true, maxlength:25, minlength:1},
    description: {type:String, maxlength:255},
    isPublic: {type: Boolean, default:false}
}, {timestamps: true});

const wikiModel = model<IWiki>('wiki', wikiSchema);
export default wikiModel;