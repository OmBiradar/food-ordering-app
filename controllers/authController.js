const userModel = require("../models/userModel");

// new user registration
const registerController = async (req, res) => {
    try {
        const { username, email, password, phone, address } = req.body;

        // validation
        if (!username || !email || !password || !phone || !address) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields'
            });
        }

        // check existing user
        const existing = await userModel.findOne({email});
        if (existing) {
            return res.status(500).send({
                success: false,
                message: "Email Already Registered please login"
            });
        }

        // create new user
        const user = await userModel.create({
            username, email, password, address, phone,
        });
        res.status(201).send({
            success: true,
            message: "Successfully Registered",
            user
        })


    } catch (error) {
        console.log(error); 
        res.status(500).send({
            success: false,
            message: "Error in Register API",
            error
        })
    }
};

// user login controller
const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        // validation
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Please provide Email and Password"
            });
        }

        // check user
        const user = await userModel.findOne({email: email, password: password});
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }
        res.status(200).send({
            success: true,
            message: "Login successful",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error
        });
    }
};

// exports
module.exports = { registerController, loginController };