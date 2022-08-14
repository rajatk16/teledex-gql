import { gql } from 'apollo-server';

export const User = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: String
    status: Boolean
    favoriteShows: [Show!]!
  }
`;

export const Token = gql`
  type Token {
    status: String!
    accessToken: String!
  }
`;
