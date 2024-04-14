import { Schema, model, connect } from "mongoose";
import { IProduct } from './types.js'

const ProductSchema = new Schema<IProduct>({
    name: String,
    price: Number,
    qtd: Number,
    category: String
});
  
const Product = model('Product', ProductSchema);

export { Product };