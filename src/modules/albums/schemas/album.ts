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

type CRUDAlbum {
    id: ID!,
    name: String,
    released: Int,
    artistsIds: [String],
    bandsIds: [String],
    trackIds: [String],
    genresIds: [String],
    image: String
}


type Mutation {
    createAlbum( name: String, released: Int, artistsIds: [String], bandsIds: [String], trackIds: [String], genresIds: [String], image: String): CRUDAlbum
    updateAlbum(id: ID!, name: String, released: Int, artistsIds: [String], bandsIds: [String], trackIds: [String], genresIds: [String], image: String): CRUDAlbum
    deleteAlbum(id: ID!): Delete
}

`;
