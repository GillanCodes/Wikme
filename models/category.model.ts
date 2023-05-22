import { Schema, model } from "mongoose"

export interface ICategory
{
    name: string,
    childs: [string],
    wikiId: string
};

const categorySchema = new Schema<ICategory>({
    name : {type: String, required:true, minlength: 2, maxlength: 32},
    childs : {type: [String]},
    wikiId: {type: String, required:true}
}, {timestamps: true});

const categoryModel = model("caterogies", categorySchema);
export default categoryModel;