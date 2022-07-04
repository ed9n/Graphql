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

type Query {
    bands(offset: Int, limit: Int): [Band]
    band(id: ID!): Band
}

`;
