const userResolver = require('./userResolver');

// Combine all resolvers into one
const resolvers = {
  Query: {
    ...userResolver.Query,
  },
};

module.exports = resolvers;