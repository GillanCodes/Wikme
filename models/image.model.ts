import { Document, Schema, model } from "mongoose";

export interface IImage extends Document
{
    ownerId: string,
    path: string,
};

const imageSchema = new Schema<IImage>({
    ownerId: {type:String, required:true},
    path: {type:String, required:true}
});

const imageModel = model<IImage>('image', imageSchema);
export default imageModel;