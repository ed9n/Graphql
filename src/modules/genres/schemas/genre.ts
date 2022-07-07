import { gql } from 'apollo-server';

export const Genre = gql`

type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
}

type Delete {
    acknowledged: Boolean,
    deletedCount: Int
}

input GenreInput {
    name: String
    description: String
    country: String
    year: Int
}

type Mutation {
    createGenre(name: String, description: String, country: String, year: Int): Genre
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre
    deleteGenre(id: ID!): Delete
}

type Query {
    genres(offset: Int, limit: Int): [Genre]
    genre(id: ID!): Genre
}

`;
