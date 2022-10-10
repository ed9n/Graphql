import { gql } from 'apollo-server';

export const Track = gql`

type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
}

type Query {
    tracks(offset: Int, limit: Int): [Track]
    track(id: ID!): Track

}

type CRUDTrack {
    id: ID!,
    title: String,
    albumId: String,
    artistsIds: [String],
    bandsIds: [String],
    duration: Int,
    released: Int,
    genresIds: [String]
}

type Mutation {
    createTrack(title: String, albumId: String, artistsIds: [String], bandsIds: [String], duration: Int, released: Int, genresIds: [String]): CRUDTrack
    updateTrack(id: ID!, title: String!, albumId: String, artistsIds: [String], bandsIds: [String], duration: Int, released: Int, genresIds: [String]): CRUDTrack
    deleteTrack(id: ID!): Delete
}

`;
