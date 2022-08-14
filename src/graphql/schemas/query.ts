import { gql } from 'apollo-server';

export const Query = gql`
  type Query {
    # Shows
    getAllShows: [Show!]!
    getShowById(id: ID!): Show
    getShowByAirDay(airDay: String!): [Show!]!
    searchShow(searchString: String!): [Show!]!
    # Users
    getAllUsers: [User!]!
    getMe: User!

    # Auth
    logoutUser: Boolean!

    # Episodes
    getAllEpisodes: [Episode!]!
    getEpisodeById(id: ID!): Episode
  }
`;
