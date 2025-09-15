const mongoose = require('mongoose');

// schema
const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: [true, "username is required"],
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        },
        address: {
            type: Array,
        },
        phone: {
            type: String,
            required: false,
        },
        userType: {
            type: String,
            enum: ['customer', 'admin', 'vendor', 'driver'],
            default: 'customer',
        },
        profile: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
);


// export
module.exports = {'User': userSchema};