export const typeDefs = `#graphql
  type Products {
    name: String
    price: Float
    qtd: Float
    category: String
  }

  type Sells {
    whoSell: String!
    whoBought: String!
    totalPrice: Float!
    date: String!
    productSells: [Products]!
  }

  enum ProductCategory {
    SHIRTS
    PANTS
    SHOES
    OTHER
  }

  type Query {
    products: [Products]
    sells: [Sells]
  }

  input ProductInput {
    name: String!
    price: Float!
    qtd: Int!
    category: ProductCategory!
  }

  input SellInput {
    whoSell: String!
    whoBought: String!
    totalPrice: Float!
    date: String!
    productSells: [ProductsInput]!
  }

  input ProductsInput {
    name: String!
    price: Float!
    qtd: Int!
    category: ProductCategory!
  }

  type Mutation {
    addProduct(input: ProductInput): Products
    addSell(input: SellInput): Sells
  }
`;
