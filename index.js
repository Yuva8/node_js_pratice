const express = require('express');
const mongo = require('./shared');

const app = express();

app.use(express.json());

mongo.connect();


app.use('/',(req, res,next) =>{
    console.log('middleware')
          next();
})

app.listen('3001');