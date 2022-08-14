import { ApolloServer } from 'apollo-server';

import { connectDB } from './config';
import { resolvers, typeDefs, context } from './graphql';
import { validateEnv } from './utils';

validateEnv();

connectDB();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen({ port: process.env.PORT || 4000 }).then(async ({ url }) => {
  console.log(`Server is ready at ${url}`);
});
