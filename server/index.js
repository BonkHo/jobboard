// Imports
const { ApolloServer } = require("apollo-server-express");
const { mongoose } = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const MONGODB = require("./config.js");



const server = new ApolloServer({ typeDefs });
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB);
