const express = require('express'); // importing express, this micro framework is used to manage routers and visualization on application
const mongoose = require('mongoose'); 
const requireDir = require('require-dir'); // Perform the require automatically in all files from a specific folder
const cors = require('cors');

//starting the app
const app = express ();

//Allow to send data to application using json format   
app.use(express.json());

app.use(cors());

//starting DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true, })

//import all the files of this folder
requireDir('./src/models')

//routes
app.use(require('./src/routes'))

// runs the server at port 3333
app.listen(3333); 