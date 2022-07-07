import { gql } from 'apollo-server';

export const Artist = gql`

type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
}

type Query {
    artists(offset: Int, limit: Int): [Artist]
    artist(id: ID!): Artist
}
`;
