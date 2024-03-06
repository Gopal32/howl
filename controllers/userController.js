const { createUserModel, checkUserModel } = require('../models/userModel')
const { generateToken } = require('../utils/jwtUtils');

const createUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await createUserModel({ username, password });

        // Generate JWT token
        const token = generateToken(user);

        // Send token to client
        res.status(200).json({ message: 'Success', token });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await checkUserModel({ username, password });
        // Generate JWT token
        const token = generateToken(user);

        // Send token to client
        res.status(200).json({ message: 'Success', token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = { createUser, loginUser };
