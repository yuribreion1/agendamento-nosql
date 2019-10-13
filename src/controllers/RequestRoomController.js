const Room = require('../models/Room');

module.exports = {
    async store(req, res) {
        const { teacher, room, date, period, type, students } = req.body;
        const rooms = await Room.create({ teacher, room, date, period, type, students })
        return res.json(rooms);
    },

    async show(req, res) {
        const rooms = await Room.findById(req.params.id);
        return res.json(rooms);
    },

    async index(req, res) {
        const rooms = await Room.find();
        return res.json(rooms);
    },

    async update(req, res) {
        const rooms = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(rooms);
    },

    async destroy(req, res) {
        await Room.findByIdAndRemove(req.params.id);
        return res.send();
    }
}