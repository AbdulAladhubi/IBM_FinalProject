const User = require('../models/User');
const Role = require('../models/Role');

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const getUserById = async (id) => {
    return await User.findById(id).select('-password');
};

module.exports = { createUser, getUserById };