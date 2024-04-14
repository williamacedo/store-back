export const typeDefs = `#graphql
  type Products {
    id: String,
    name: String,
    price: Float,
    qtd: Float,
    category: String
  }

  enum ProductCategory {
    SHIRTS
    PANTS
    SHOES
    OTHER
  }

  type Query {
    products: [Products]
  }

  input ProductInput {
    name: String!
    price: Float!
    qtd: Int
    category: ProductCategory!
  }

  type Mutation {
    addProduct(input: ProductInput): Products
  }
`;