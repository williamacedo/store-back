import 'dotenv/config'
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './services/graphql/typeDefs.js';
import { resolvers } from './services/graphql/resolvers.js';
import { connect } from 'mongoose';

connect(process.env.MONGODB_URI);

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);