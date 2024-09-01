const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// Initialize Apollo Server with schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({
    // Context can pass loaders, auth info, etc.
  }),
});

module.exports = server;