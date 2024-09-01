const server = require('./server');
const { port } = require('./config/settings');

// Start the server
server.listen({ port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});