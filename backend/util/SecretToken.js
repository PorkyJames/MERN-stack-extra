import dotenv from "dotenv"
import { json } from "express";
import jsonwebtoken from "jsonwebtoken"

dotenv.config();

// module.exports.createSecretToken = (id) => {
//     return jsonwebtoken.sign({ id }, process.env.TOKEN_KEY, {
//         expiresIn: 3 * 24 * 60 * 60,
//     });
// };

export const createSecretToken = (id) => {
    return jsonwebtoken.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    });
}

export default createSecretToken;

/**
 * ! This file sets up a place for generating JWTs with a specific payload and expiration time using a secret key from the env variables. 
 * ! This token is likely used to manage sessions or secure API requests by confirming that the requester is indeed who they claim to be. 
 */
