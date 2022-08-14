import { gql } from 'apollo-server';

export const Show = gql`
  type Show {
    _id: ID!
    title: String!
    coverImg: String
    network: String!
    genre: String!
    airDay: String!
    length: Int!
    status: String!
    description: String!
    noOfseasons: Int!
    noOfepisodes: Int!
    episodes: [Episode!]!
  }
`;
