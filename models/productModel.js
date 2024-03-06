const { v4: uuidv4 } = require('uuid');
const db = require('../server')
const collectionName = 'products'

const insertItem = async (product, userId) => {
    const { name, description, price, stockQuantity } = product;
    // Generate UUID for product ID
    const productId = uuidv4();
    // Create user in database
    await db.mongoConnection.collection(collectionName).insertOne({ productId, name, description, price, stockQuantity, createdBy: userId, isActive: true, createdOn: new Date() });

    return { productId };
};

const updateItem = async (productId, product, userId) => {

    const { name, description, price, stockQuantity } = product;

    // Update product details
    const productDetails = await db.mongoConnection.collection('products').updateOne(
        { productId, isActive: true, createdBy: userId },
        { $set: { name, description, price, stockQuantity, updatedBy: userId, updatedOn: new Date() } }
    );
    if (productDetails && productDetails.modifiedCount < 1) {
        throw new Error('Product not found');
    }

    return { productId }
}

const deleteItem = async (productId, userId) => {

    // Delet product details
    const productDetails = await db.mongoConnection.collection('products').updateOne(
        { productId, isActive: true, createdBy: userId },
        { $set: { isActive: false, updatedBy: userId, updatedOn: new Date() } }
    );
    if (productDetails && productDetails.modifiedCount < 1) {
        throw new Error('Product not found');
    }

    return { productId }
}

const findByIdItem = async (productId) => {

    // Find single product details
    const productDetails = await db.mongoConnection.collection('products').findOne(
        { productId, isActive: true },
    );
    if (!productDetails) {
        throw new Error('Product not found');
    }

    return productDetails
}

const findListItem = async (limit, offset) => {

    const pipeline = [{
        $match: {
            isActive: true
        }
    },
    {
        $facet: {
            data: [
                { $skip: offset },
                { $limit: parseInt(limit) }
            ],
            totalCount: [{
                $match: {
                    isActive: true
                }
            },
            { $count: 'count' }
            ]
        }
    }]
    // Find single product details
    const productDetails = await db.mongoConnection.collection('products').aggregate(pipeline).toArray();
    if (productDetails && productDetails[0].data.length === 0) {
        throw new Error('Product not found');
    }

    return productDetails
}

module.exports = { insertItem, updateItem, deleteItem, findByIdItem, findListItem };
