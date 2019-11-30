const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 4000;


const mongoose = require('mongoose');
require('dotenv').config();

app.use(cors());
app.use(express.json());

//Allows us to access browser cookies
app.use(cookieParser());
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

//Connect app to MOngoDb
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Routing 
const bookRouter = require('./routes/books');
const usersRouter = require('./routes/user');

app.use('/books', bookRouter);
app.use('/users', usersRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});