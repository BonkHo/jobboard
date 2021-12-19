const gql = require("graphql-tag");

module.export = gql`
	type Job {
		id: ID!
		title: String!
		description: String!
		company: String!
		location: String!
		url: String!
		createdAt: String!
		isApplied: Boolean!
	}

	type User {
		id: ID!
		name: String!
		email: String!
		password: String!
		createdAt: String!
	}
`;
