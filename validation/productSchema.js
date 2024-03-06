const Joi = require('joi');

const productSchema = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().min(0).required(),
        stockQuantity: Joi.number().min(0).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
}

const paginationSchema = (req, res, next) => {
    const schema = Joi.object({
        limit: Joi.string().min(1).max(3).regex(/^[1-9][0-9]*$/).required().messages({ 'string.pattern.base': '"limit can not be 0 or less than 0"', 'string.max': 'limit length must be less than or equal to 999' }),
        page: Joi.string().min(1).max(3).regex(/^[1-9][0-9]*$/).required().messages({ 'string.pattern.base': '"page can not be 0 or less than 0"' }),
    });

    const { error } = schema.validate(req.query);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
}
module.exports = { productSchema, paginationSchema };