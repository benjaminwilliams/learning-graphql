"use strict";
var express = require('express');
var graphqlHTTP = require('express-graphql');
var app = express();
app.use('/graphql', graphqlHTTP({}));
app.listen(4000, function () {
    console.log('listening on 4000');
});
