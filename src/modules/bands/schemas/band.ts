import { gql } from 'apollo-server';

export const Band = gql`

type Member{
    artist: String,
    instrument: String,
    years: [String]
}

type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
}

type Query {
    bands(offset: Int, limit: Int): [Band]
    band(id: ID!): Band
}

type CRUDBands {
    id: ID!,
    name: String,
    origin: String,
    members: [MemberOut],
    website: String,
    genresIds: [String]
}

input MemberInp {
    artist: String,
    instrument: String,
    years: [String]
},

type MemberOut {
    artist: String,
    instrument: String,
    years: [String]
},

type Mutation {
    createBand(name: String, origin: String, members: [MemberInp], website: String, genresIds: [String]): CRUDBands
    updateBand(id: ID!, name: String, origin: String, members: [MemberInp], website: String, genresIds: [String]): CRUDBands
    deleteBand(id: ID!): Delete
}

`;
