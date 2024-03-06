const { updateItem, insertItem, findByIdItem, deleteItem, findListItem } = require('../models/productModel')

const createProduct = async (req, res) => {
    try {
        const { userId } = req.user
        // Insert product into database
        const product = await insertItem({ ...req.body }, userId);

        res.status(200).json({ message: 'Product Insert successfully', data: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { userId } = req.user
        const { productId } = req.params;
        // update product into database
        const product = await updateItem(productId, { ...req.body }, userId);

        res.status(200).json({ message: 'Product updated successfully', data: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { userId } = req.user
        const { productId } = req.params;
        // update product into database
        const product = await deleteItem(productId, userId);

        res.status(200).json({ message: 'Product delete successfully', data: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const productInfo = async (req, res) => {
    try {
        const { productId } = req.params;
        // Find single product into database
        const product = await findByIdItem(productId);

        res.status(200).json({ message: 'Success', data: product });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const productList = async (req, res) => {
    try {
        const { limit, page } = req.query;
        const offset = parseInt(limit) * (parseInt(page) - 1)
        // Find product into database
        const product = await findListItem(limit, offset);

        res.status(200).json({ message: 'Success', data: { details: product[0].data, totalPage: Math.ceil(product[0].totalCount[0].count / limit), totalRecord: product[0].totalCount[0].count, currentPage: parseInt(page) } });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { createProduct, updateProduct, deleteProduct, productInfo, productList };
