const bcrpt = require('bcryptjs');
const User = require('../models/user');

const jwt = require('jsonwebtoken');

module.exports = {
    // Create a new user
    create: async (req, res) => {
        const {
            name,
            phone,
            email,
            password
        } = req.body;
        const oldUser = await User.findOne({
            email: email
        });
        if (oldUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }
        const salt = await bcrpt.genSaltSync(10);
        const hash = await bcrpt.hashSync(password, salt);
        const newUser = new User({
            name,
            phone,
            email,
            password: hash
        });
        await newUser.save((err, user) => {
            if (err) {
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            return res.status(201).json({
                message: 'User created successfully',
                user
            });
        })

    },
    // Get all users
    getAll: (req, res) => {
        User.find({}, (err, users) => {
            if (err) {
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            return res.status(200).json({
                message: 'Users retrieved successfully',
                users
            });
        });
    }
}