import jwt from 'jsonwebtoken';

export function setUserAuth(user) {
    console.log(`secretKey - ${process.env.JWT_SECRET}`);
    return jwt.sign(user, process.env.JWT_SECRET);
}

export function getUserAuth(token) {
    try {
        // Verify and decode the token in a single step
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; // Return decoded token content (e.g., user data)
    } catch (err) {
        throw new Error('Invalid token'); // Will be caught by the caller (authenticate function)
    }
}
