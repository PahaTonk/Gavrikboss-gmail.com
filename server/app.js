const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;
const uri = 'mongodb+srv://admin:admin123@social-legw0.mongodb.net/social';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    retryWrites: true,
    w: 'majority',
};

mongoose.connect(uri, options);

/**
 * @description unite fronnt request and backend
 */
app.use(cors());

/**
 * @description use pack on '/graphql' route
 */
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    }),
);

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error: ${err}`));
dbConnection.once('open', () => console.log('Connected to DB!'));

/**
 * @description listen port
 */
app.listen(PORT, err => {
    err ? console.error(err) : console.log('Server started!');
});
