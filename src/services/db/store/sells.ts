import { Schema, model } from "mongoose";
import { ISell, ProductsSells } from './types.js'

const ProductsSellsSchema = new Schema<ProductsSells>({
    title: String,
    category: String,
    price: Number,
});

const SellSchema = new Schema<ISell>({
    whoSell: String,
    whoBought: String,
    totalPrice: Number,
    date: String,
    productSells: [ProductsSellsSchema]
});

export const Sell = model('Sell', SellSchema);