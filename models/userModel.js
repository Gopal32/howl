const { v4: uuidv4 } = require('uuid');
const db = require('../server')
const collectionName = 'users'

const createUserModel = async (user) => {
    const { username, password } = user;
    // Check if username already exists
    const existingUser = await db.mongoConnection.collection(collectionName).findOne({ username });
    if (existingUser) {
        throw new Error('Username already exists');
    }

    // Generate UUID for id
    const userId = uuidv4();

    // Create user in database
    await db.mongoConnection.collection(collectionName).insertOne({ userId, username, password });

    return { userId, username };
};

const checkUserModel = async (user) => {
    const { username, password } = user;
    // Check if username exists
    const userDetails = await db.mongoConnection.collection(collectionName).findOne({ username }, { $projection: { username: 1, password: 1, userId: 1, _id: 0 } });
    if (!user) {
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