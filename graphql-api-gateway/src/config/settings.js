require('dotenv').config();

module.exports = {
  legacyApiUrl: process.env.LEGACY_API_URL,
  port: process.env.PORT || 4000,
};