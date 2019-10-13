const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        active: Boolean
    }
);

mongoose.set('useFindAndModify', false);

module.exports = mongoose.model('User', UserSchema);