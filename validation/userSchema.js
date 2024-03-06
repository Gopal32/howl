const Joi = require('joi');

const validateUser = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required().pattern(new RegExp('^[a-zA-Z0-9_]+$'))
            .messages({
                'string.pattern.base': 'Username must contain only alphanumeric characters and underscore',
            }),
        password: Joi.string().min(8).required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'))
            .messages({
                'string.pattern.base': 'Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character, and be at least 8 characters long',
            }),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
}
module.exports = { validateUser };