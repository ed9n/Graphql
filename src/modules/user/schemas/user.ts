import { gql } from 'apollo-server';

export const User = gql`
type JWT {
    jwt: String!
}

type User {
    id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
}

type Mutation {
    register(firstName: String, lastName: String, password: String, email: String): User

}

type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): JWT

}

`;
