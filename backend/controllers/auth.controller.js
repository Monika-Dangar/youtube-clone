import User from '../models/users.model.js';
import { setUserAuth } from '../util/token.util.js'

// Register new user
export async function register(req, res) {
    const { username, email, password } = req.body;
    try {
        // Check if the email is already taken
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'Email already exists' });

        // Create new user with the hashed password
        const user = await User.create({ username, email, password });

        const userDetails = {
            "userId": user._id,
            "username": user.username,
            "email": user.email,
            "channel": user.channels,
            "avatar": user.avatar
        }

        // Return the token and user info
        return res.status(201).send({ message: "User registered successfully.", user: userDetails })

    } catch (error) {
        return res.status(500).send({ message: 'Error in registering user', error: error.message });

    }
};

// Login existing user
export async function login(req, res) {

    try {
        const user = {
            id: req.user._id,
            username: req.user.usernameOrEmail
        }

        const token = setUserAuth(user)

        const userDetails = {
            "userId": req.user._id,
            "username": req.user.username,
            "email": req.user.email,
            "channel": req.user.channels,
            "avatar": req.user.avatar
        }

        return res.status(200).send({ message: `User successfully logged in!!`, token, user: userDetails })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
