import mongoose, { Schema, model } from "mongoose";
import Categories from "../models/Categories";

export interface Products{
    name: string,
    photo: string,
    price: number,
    description: string
    category: mongoose.Types.ObjectId;

}

const ProductsSchema = new Schema<Products>({
    name:{type: String, required: true},
    photo: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Categories" },
    
    
},
{
    timestamps:true,
}

)

const ProductsModel = mongoose.model<Products>("Products", ProductsSchema)

export default ProductsModel