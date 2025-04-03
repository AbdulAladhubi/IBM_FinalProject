const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
require('dotenv').config();

const signup = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const login = async (userData) => {
    const user = await User.findOne({ email: userData.email });
    if (!user) return null;

    const isMatch = await user.matchPassword(userData.password);
    if (!isMatch) return null;

    const payload = {
        user: {
            id: user.id
        }
    };

    return {
        jwtToken: jwt.sign(payload, process.env.JWT_SECRET)
    };
};

module.exports = { signup, login };