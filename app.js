const connectDB = require('./config/db');
require('dotenv').config();

async function startServer() {
    const db = await connectDB();
    require('./models/mongoDb').setDb(db);
    require('./server')
}

startServer();
