const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, 'config/.env') });

const app = express();
const port = process.env.PORT || 8000;

// Connecting to the database
const db = require("./config/mongoose");

// Using EJS as the view engine and setting the views directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Setting up middleware
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use(express.static('./assets'));

// Setting up routes
app.use('/', require('./routes'));

// Starting the server
app.listen(port, function (err) {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log('Server is running on port:', port);
});
