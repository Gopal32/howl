const { v4: uuidv4 } = require('uuid');
const { findOne, insertOne } = require('./mongoDb')
const collectionName = 'users'

const createUserModel = async (user) => {
    const { username, password } = user;
    const existingUser = await findOne(collectionName, { username })
    if (existingUser) {
        throw new Error('Username already exists');
    }

    // Generate UUID for id
    const userId = uuidv4();

    // Create user in database
    await insertOne(collectionName, { userId, username, password });

    return { userId, username };
};

const checkUserModel = async (user) => {
    const { username, password } = user;
    // Check if username exists
    const userDetails = await findOne(collectionName, { username }, { $projection: { username: 1, password: 1, userId: 1, _id: 0 } });
    if (!userDetails) {
        throw new Error('Invalid username or password');
    }

    // Check if password is correct
    if (password !== userDetails.password) {
        throw new Error('Invalid username or password');
    }
    delete userDetails.password
    return userDetails
}

module.exports = { createUserModel, checkUserModel };
