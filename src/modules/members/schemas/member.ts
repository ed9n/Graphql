import { gql } from 'apollo-server';

export const Member = gql`

type Member {
    artist: String
    instrument: String
    years: [String]
}

`;
