import { Product } from "../db/store/products.js";

export const resolvers = {
    Query: {
      products: async () => await Product.find({}),
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
    },
  };