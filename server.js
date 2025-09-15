const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const {connectDB} = require('./config/db');

// dotenv config
dotenv.config({path:'./.env'});

// initiating server
const app = express();

// connect to DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/test', require("./routes/testRoutes"));
app.use('/api/v1/auth', require("./routes/authRoutes"));

app.get('/', (req, res) => {
    return res.status(200).send("<h1>Welcome to html</h1>"); // OK
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Node Server Listening on PORT ${PORT}...`.white.bgGreen);
});