// restAPI.js
const axios = require('axios');
// const { legacyApiUrl } = require('../config/settings'); 
const { legacyApiUrl } = "http://127.0.0.1:3000"

class RestAPI {
  constructor() {
    this.client = axios.create({
      baseURL: "http://127.0.0.1:3000", // Ensure this URL matches the .env value
    });
  }

  async fetchUser(id) {
    try {
      const response = await this.client.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user:', error.response ? error.response.data : error.message);
      throw new Error('Failed to fetch user from legacy API.');
    }
  }

  async fetchUsers() {
    try {
      const response = await this.client.get('/users');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error.message);
      throw new Error('Failed to fetch users from legacy API.');
    }
  }
}

module.exports = new RestAPI();
