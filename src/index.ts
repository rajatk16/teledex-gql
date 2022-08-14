import { ApolloServer } from 'apollo-server';

import { connectDB } from './config';
import { resolvers, typeDefs, context } from './graphql';
import { validateEnv } from './utils';

validateEnv();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const startServer = async (server: ApolloServer) => {
  const { url } = await server.listen({
    port: process.env.PORT || 4000,
  });
  connectDB();
  console.log(`Server ready at ${url}`);
};

startServer(server);
