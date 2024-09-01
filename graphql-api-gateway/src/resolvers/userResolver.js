// userResolver.js
const restAPI = require('../datasources/restAPI');
const { userLoader } = require('../loaders/dataLoader');

const userResolver = {
  Query: {
    getUser: async (_, { id }) => {
      console.log(`Entering getUser resolver with ID: ${id}`);
      try {
        const user = await userLoader.load(id);
        console.log(`User fetched successfully:`, user);
        if (!user) {
          throw new Error(`User with ID ${id} not found.`);
        }
        return user;
      } catch (error) {
        console.error('Error in getUser resolver:', error);
        throw new Error('Failed to retrieve user.');
      }
    },
    listUsers: async () => {
      console.log('Entering listUsers resolver');
      try {
        const users = await restAPI.fetchUsers();
        console.log(`Users fetched successfully:`, users);
        return users;
      } catch (error) {
        console.error('Error in listUsers resolver:', error);
        throw new Error('Failed to retrieve users.');
      }
    },
  },
};

module.exports = userResolver;
