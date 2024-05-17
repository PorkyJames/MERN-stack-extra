import User from "../models/UserModel.js";
import jsonwebtoken from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

export const userVerification = (req, res) => {
    const token = req.cookies.token

    if (!token) {
        return res.json({ status: false })
    }

    jsonwebtoken.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false })
        } else {
            const user = await User.findById(data.id)
            if (user) {
                return res.json({ status: true, user: user.username })
            } else {
                return res.json({ status: false })
            }
        }
    })
}

//! This basically checks if the user has access to the route by checking if the jwt tokens match
