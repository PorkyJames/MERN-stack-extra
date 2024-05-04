import User from "../models/UserModel.js"
import createSecretToken from "../util/SecretToken.js"
import bcrypt from "bcrypt"

module.exports.Signup = async (req, res, next) => {
    try {
        //! Our new request body based on the inputs of the user
        const { email, password, username, createdAt } = req.body;
        //! if the user already exists with the email, then throw message "User already exists"
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        //! If there are no other users with the same email, create the User with all of the info below
        const user = await User.create({ email, password, username, createdAt });
        //! Then newly formed user's _id is supplied with a token that's been generated
        const token = createSecretToken(user._id);

        //! cookie will then be sent to the client with the key of "token" and a value of token
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        //! then return the successful login message
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};

//! Sign up function that allows users to sign up. 
