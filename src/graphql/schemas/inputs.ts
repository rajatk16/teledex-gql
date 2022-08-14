import { gql } from 'apollo-server';

const CreateShowInput = gql`
  input CreateShowInput {
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
  }
`;

const UpdateShowInput = gql`
  input UpdateShowInput {
    title: String
    coverImg: String
    network: String
    genre: String
    airDay: String
    length: Int
    status: String
    description: String
    noOfseasons: Int
    noOfepisodes: Int
  }
`;

const CreateUserInput = gql`
  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

const UpdateUserInput = gql`
  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    role: String
    status: Boolean
    favoriteShows: [ID!]
  }
`;

const UpdateEpisodeInput = gql`
  input UpdateEpisodeInput {
    title: String
    coverImg: String
    description: String
    airDate: String
    episodeLength: Int
    episodeNumber: String
    show: String
  }
`;

const LoginUserInput = gql`
  input LoginUserInput {
    email: String!
    password: String!
  }
`;

const CreateEpisodeInput = gql`
  input CreateEpisodeInput {
    title: String!
    coverImg: String
    description: String
    episodeNumber: String!
    airDate: String!
    episodeLength: Int!
    show: String
  }
`;

export const Inputs = [
  CreateShowInput,
  UpdateShowInput,
  CreateUserInput,
  LoginUserInput,
  UpdateUserInput,
  CreateEpisodeInput,
  UpdateEpisodeInput,
];
