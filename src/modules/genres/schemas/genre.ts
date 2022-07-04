import { gql } from 'apollo-server';

export const Genre = gql`

type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

type Query {
    genres(offset: Int, limit: Int): [Genre]
    genre(id: ID!): Genre
}

`;
