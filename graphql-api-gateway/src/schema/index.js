// index.js
const userSchema = require('./userSchema'); // Importing directly as it's already a gql template

// If there are multiple schemas to combine, you can concatenate them here.
const typeDefs = userSchema; // Use the imported schema directly

module.exports = typeDefs;
