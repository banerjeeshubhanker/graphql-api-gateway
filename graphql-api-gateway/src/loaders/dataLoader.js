// dataLoader.js
const DataLoader = require('dataloader');
const restAPI = require('../datasources/restAPI');

const userLoader = new DataLoader(async (ids) => {
  console.log('DataLoader batching request for IDs:', ids);
  try {
    const users = await Promise.all(ids.map(id => restAPI.fetchUser(id)));
    console.log('Users fetched by DataLoader:', users);
    return users;
  } catch (error) {
    console.error('DataLoader failed to fetch users:', error);
    throw new Error('Failed to load users.');
  }
});

module.exports = { userLoader };
