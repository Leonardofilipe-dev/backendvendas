import mongoose, { Schema, model } from "mongoose";

export interface Categories{
    nameCategories: string,
}

const CategoriesSchema = new Schema<Categories>({
    nameCategories:{type: String, required: true},
},
{
    timestamps:true,
}

)

const categories = mongoose.model<Categories>("Categories", CategoriesSchema)

export default categories


