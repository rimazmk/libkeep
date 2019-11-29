const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;


const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

//Connect app to MOngoDb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Routing 
// const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/user');

// app.use('/books', exercisesRouter);
app.use('/users', usersRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});