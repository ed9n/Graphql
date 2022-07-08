import { gql } from 'apollo-server';

export const Band = gql`

type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

input BandInput {
    id: ID!
    name: String
    origin: String
    #members: [Member]
    website: String
    genres: [GenreInput]
}

type Query {
    bands(offset: Int, limit: Int): [Band]
    band(id: ID!): Band
}

type CRUDBands {
    id: ID!,
    name: String,
    origin: String,
    membersId: [String],
    website: String,
    genresIds: [String]
}


type Mutation {
    createBand(name: String, origin: String, membersId: [String], website: String, genresIds: [String]): CRUDBands
    updateBand(id: ID!, name: String, origin: String, membersId: [String], website: String, genresIds: [String]): CRUDBands
    deleteBand(id: ID!): Delete
}

`;
