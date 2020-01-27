const express = require('express'); // importing express, this micro framework is used to manage routers and visualization on application
const mongoose = require('mongoose'); 
const requireDir = require('require-dir'); // Perform the require automatically in all files from a specific folder

//starting the app
const app = express ();

//Allow to send data to application using json format   
app.use(express.json());

//starting DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true, })

//import all the files of this folder
requireDir('./src/models')

//routes
app.use('/api', require('./src/routes'))

// running the server on port 60000
app.listen(60000); 