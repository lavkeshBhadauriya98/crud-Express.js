require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/db.js');
const app = express();
const cors = require('cors');

// express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

// init connection db
    connectToDb();

const userRoutes = require("./routes/userRoutes.js")

app.use('/',userRoutes)

module.exports = app;


