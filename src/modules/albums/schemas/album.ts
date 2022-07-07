import { gql } from 'apollo-server';

export const Album = gql`

type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
}

type Query {
    albums(offset: Int, limit: Int): [Album]
    album(id: ID!): Album
}

`;
