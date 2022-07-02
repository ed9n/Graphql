import { gql } from 'apollo-server'

export const band = gql`

type Query {
    bands: [Band]
}

type Band {
    id: ID!
    name: String
    origin: String
    website: String
    genres: String
}


`
