import bcrypt from 'bcryptjs'
import User from '../models/users.model.js'

export async function encryptPassword(req, res, next) {
    const { password } = req.body;

    if (!password) {
        return res.status(400).send({ message: "Password missing!" })
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.log(`Error in hashing password: ${err}`);;
            return res.status(500).send({ message: 'Error in hashing password', err })

        }

        req.body.password = hashedPassword;
        next();
    })
}

export async function decryptPassword(req, res, next) {

    const { usernameOrEmail, password } = req.body;

    try {
        const user = await User.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });

        if (!user) {
            return res.status(401).send({ message: `User doesn't exists with this username!` });
        }

        const isUserVerified = await bcrypt.compare(password, user.password);

        if (!isUserVerified) {
            return res.status(401).send({ message: `Invalid password!` });
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(`Error in password verification: ${error} `);
        return res.status(500).send({ message: `Error in password verification: ${error}` })
    }

}
