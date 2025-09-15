const mongoose = require('mongoose');
const colors = require('colors');

// fn to connect to mongoose database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DataBase ${mongoose.connection.host}`.bgCyan);
    } catch (error) {
        console.log(`DB Error: ${error}`.bgRed);
    }
}

module.exports = {connectDB};