const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql");
const { makeExecutableSchema } = require('@graphql-tools/schema'); //necessário instalar antes -> npm i @graphql-tools/schema

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({schema});

server.listen().then(({ url }) => console.log(url));