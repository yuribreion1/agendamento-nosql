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
    },

    async show(req, res) {
        const users = await User.findById(req.params.id);
        return res.json(users);
    },

    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    }, 

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }
}