// Imports
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/typeDefs");
const { MONGODB } = require("./config");

const resolvers = {
	Query: {
		sayHi: () => "Hello World",
	},
};

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = process.env.PORT || 5000;

mongoose
	.connect(MONGODB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: "jobboard",
	})
	.then(() => {
		console.log("Connected to MongoDB");
		return server.listen({ port: PORT });
	})
	.then((res) => {
		console.log(`Server running: http://localhost:${PORT}/graphql`);
	})
	.catch((err) => {
		console.log(err);
	});
