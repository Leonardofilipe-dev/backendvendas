import mongoose, { Schema, model } from "mongoose";
import {Categories} from "./Categories";

export interface Products{
    name: string,
    photo: string,
    price: number,
    categories: Categories

}

const ProductsSchema = new Schema<Products>({
    name:{type: String, required: true},
    photo: {type: String, required: true},
    price: {type: Number, required: true},
    categories: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Categories" },
    
    
},
{
    timestamps:true,
}

)

const products = mongoose.model<Products>("Products", ProductsSchema)

export default products