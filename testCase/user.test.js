// const assert = require('assert');
// const { MongoClient } = require('mongodb');
// const { createUser } = require('../models/User');

// const testUser = {
//     username: 'testuser',
//     password: 'Test123!'
// };

// describe('User', () => {
//     let db;

//     before(async () => {
//         const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         db = client.db(process.env.MONGODB_DB_NAME);
//     });

//     after(async () => {
//         await db.collection('users').deleteMany({});
//     });

//     describe('createUser', () => {
//         it('should create a new user', async () => {
//             const user = await createUser(db, testUser);
//             assert.strictEqual(user.username, testUser.username);
//         });

//         it('should throw error if username is already taken', async () => {
//             try {
//                 await createUser(db, testUser); // Try to create user with same username
//             } catch (err) {
//                 assert.strictEqual(err.message, 'Username already exists');
//             }
//         });

//         it('should throw error if username is invalid', async () => {
//             try {
//                 await createUser(db, { username: 'invalid_username', password: 'Test123!' });
//             } catch (err) {
//                 assert.strictEqual(err.message, 'Username must contain only alphanumeric characters and underscore');
//             }
//         });

//         it('should throw error if password is invalid', async () => {
//             try {
//                 await createUser(db, { username: 'testuser2', password: 'invalidpassword' });
//             } catch (err) {
//                 assert.strictEqual(err.message, 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long');
//             }
//         });
//     });
// });

// const testUser = {
//     username: 'testuser',
//     password: 'Test123!'
// };

// describe('Si', () => {
//     let db;

//     before(async () => {
//         const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//         await client.connect();
//         db = client.db(process.env.MONGODB_DB_NAME);

//         // Insert test user into database
//         await db.collection('users').insertOne(testUser);
//     });

//     after(async () => {
//         // Remove test user from database
//         await db.collection('users').deleteMany({});
//     });

//     describe('loginUser', () => {
//         it('should login with correct credentials', async () => {
//             const req = {
//                 body: {
//                     username: testUser.username,
//                     password: testUser.password
//                 }
//             };
//             const res = {
//                 json: (result) => {
//                     assert.ok(result.token);
//                 },
//                 status: () => {}
//             };
//             await loginUser(db, req, res);
//         });

//         it('should throw error with incorrect password', async () => {
//             const req = {
//                 body: {
//                     username: testUser.username,
//                     password: 'incorrectpassword'
//                 }
//             };
//             const res = {
//                 json: () => {},
//                 status: (code) => {
//                     assert.strictEqual(code, 400);
//                     return {
//                         json: (result) => {
//                             assert.strictEqual(result.message, 'Invalid username or password');
//                         }
//                     };
//                 }
//             };
//             await loginUser(db, req, res);
//         });

//         it('should throw error with non-existing username', async () => {
//             const req = {
//                 body: {
//                     username: 'nonexistentuser',
//                     password: 'Test123!'
//                 }
//             };
//             const res = {
//                 json: () => {},
//                 status: (code) => {
//                     assert.strictEqual(code, 400);
//                     return {
//                         json: (result) => {
//                             assert.strictEqual(result.message, 'Invalid username or password');
//                         }
//                     };
//                 }
//             };
//             await loginUser(db, req, res);
//         });
//     });
// });