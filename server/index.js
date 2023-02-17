
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const URL = 'mongodb+srv://hasmik:asd12345@cluster0.cqnewww.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(
    URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => console.log("DB CONNECTED")
  );
  
  const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app: app });
    app.listen(4000, () => console.log("Server UP & RUnning *4000"));
  };
  startServer();