import { Schema, model } from "mongoose";
import { IProduct } from './types.js'

const ProductSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    qtd: Number,
    category: String
});
  
export const Product = model('Product', ProductSchema);