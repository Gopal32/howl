
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

const init = async () => {
    // Connect to MongoDB
    mongoConnection = await connectDB()

    // Middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    
    // User Routes
    const userRouter = require('./routes/user');
    app.use('/user', userRouter);
    
    // Product Routes
    const productRouter = require('./routes/product');
    app.use('/product', productRouter);
    
    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
    });
    
    // Route not found middleware
    app.use((req, res, next) => {
        res.status(404).send("Sorry can't find that!");
    });
    
    // Start server
    const PORT = process.env.PORT || 5555;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
    module.exports.mongoConnection = mongoConnection
}
process.on("unhandledRejection", err => {
    console.log(err);
    process.exit(1);
});

init();
