import { gql } from 'apollo-server';

export const Favourite = gql`

type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
}

type Query {
    favourites: Favourites 
}

type Mutation {
    addGenreToFavourites(type: String!, id: String! ): Favourites
}

`;
