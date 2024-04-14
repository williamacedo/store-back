import { Product } from "../db/store/products.js";
import { Sell } from "../db/store/sells.js";

export const resolvers = {
    Query: {
      products: async () => await Product.find({}),
      sells: async () => await Sell.find({}),
    },
    Mutation: {
      addProduct: async (_, { input }) => {
        try {
          const newProduct = await Product.create(input);
          return newProduct;
        } catch (error) {
          throw new Error('Erro ao adicionar produto: ' + error.message);
        }
      },
      addSell: async (_, { input }) => {
        try {
          const newSell = await Sell.create(input);
          return newSell;
        } catch (error) {
          throw new Error('Erro ao adicionar produto: ' + error.message);
        }
      },
    },
  };