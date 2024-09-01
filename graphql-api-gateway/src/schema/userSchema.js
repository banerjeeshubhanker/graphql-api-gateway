// userSchema.js
const { gql } = require('apollo-server');

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    username: String!
    phone: String
    website: String
  }

  type Query {
    getUser(id: ID!): User
    listUsers: [User]
  }
`;

module.exports = userSchema;
