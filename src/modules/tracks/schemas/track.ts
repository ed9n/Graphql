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

`;
