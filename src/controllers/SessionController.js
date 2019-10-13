// index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { username, password, active } = req.body;
        let user = await User.findOne({ username });
        if (!user) {
            user = await User.create({ username, password, active })   
        }
        return res.json(user);
    }
}