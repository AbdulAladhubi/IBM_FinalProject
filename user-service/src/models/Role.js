const mongoose = require('mongoose');

const RoleSchema = new Schema({
    name: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('Role', RoleSchema);