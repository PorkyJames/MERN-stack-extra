import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

//! This middleware function that every time a user doc is saved to the db, the user's password is hashed using bcrypt 
//! with a salt and a cost factor of 12. Cost factor basically means increases computational work. However,
//! the higher we go, the more performance it takes. 12 is a very commonly used cost factor. 
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

//! ES6 version of exporting User
const User = mongoose.model("User", userSchema);
export default User;
