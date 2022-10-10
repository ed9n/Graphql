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

type BandToFavourites {
    bandsIds: [String]
}

type TrackToFavourites {
    tracksIds: [String]
}

type ArtistToFavourites {
    artistsIds: [String]
}

type GenreToFavourites {
    genresIds: [String]
}

type Mutation {
    addBandToFavourites(type: String!, id: String! ): BandToFavourites
    addTrackToFavourites(type: String!, id: String! ): TrackToFavourites
    addArtistToFavourites(type: String!, id: String! ): ArtistToFavourites
    addGenreToFavourites(type: String!, id: String! ): GenreToFavourites
}

`;
