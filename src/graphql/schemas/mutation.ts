import { gql } from 'apollo-server';

export const Mutation = gql`
  type Mutation {
    # Show
    createShow(data: CreateShowInput!): Show!
    updateShow(showId: String!, data: UpdateShowInput!): Show!

    # User
    createUser(data: CreateUserInput!): User!
    updateUser(data: UpdateUserInput): User!
    loginUser(data: LoginUserInput!): Token!

    # Episode
    createEpisode(data: CreateEpisodeInput!): Episode!
    updateEpisode(episodeId: String!, data: UpdateEpisodeInput!): Episode!
  }
`;
