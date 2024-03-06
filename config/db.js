const { MongoClient } = require('mongodb');

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        console.log('MongoDB Connected...');
        return client.db(process.env.MONGODB_DB_NAME);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
