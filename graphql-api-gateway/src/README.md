# GraphQL API Gateway for Legacy Systems

## Overview

This project implements a GraphQL API Gateway that integrates with legacy REST APIs. It unifies multiple API endpoints into a single GraphQL endpoint, making data retrieval more efficient and flexible for modern applications. The gateway uses Apollo Server and Axios to interact with RESTful services and employs DataLoader to optimize data fetching through batching and caching.

## Architecture

1. **GraphQL API Gateway**: The central component that interacts with the frontend and handles GraphQL queries and mutations.
2. **DataLoader**: Optimizes data fetching by batching requests and caching results within a request cycle.
3. **Legacy REST API**: Represents the backend services that the GraphQL Gateway interacts with, using RESTful endpoints.

## Features

- **Unified Data Access**: Combines multiple legacy REST API calls into a single GraphQL query.
- **Efficient Data Fetching**: Uses DataLoader to batch and cache requests, reducing the number of calls to backend services.
- **Modular Design**: Clean separation of schema, resolvers, and data sources for easy maintenance and extension.
- **Error Handling**: Robust error management to capture and log failures during API interactions.

## Folder Structure

```plaintext
graphql-api-gateway
├── src
│   ├── index.js             # Main entry point of the server
│   ├── server.js            # Apollo server setup
│   ├── schema
│   │   ├── userSchema.js    # GraphQL schema definitions
│   │   └── index.js         # Combines all schema definitions
│   ├── resolvers
│   │   ├── userResolver.js  # Resolver logic for user-related queries
│   │   └── index.js         # Combines all resolvers
│   ├── datasources
│   │   └── restAPI.js       # REST API interactions using Axios
│   ├── loaders
│   │   └── dataLoader.js    # DataLoader setup for batching and caching
│   └── config
│       └── settings.js      # Configuration for environment variables
├── .env                     # Environment variables configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation

