import { gql } from 'apollo-server';

export const Episode = gql`
  type Episode {
    _id: ID!
    title: String!
    coverImg: String
    description: String
    episodeNumber: String!
    airDate: String!
    episodeLength: Int!
    show: Show
  }
`;
