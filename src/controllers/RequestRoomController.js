const Room = require('../models/Room');

module.exports = {
    async store(req, res) {
        const { teacher, room, date, period, type, students } = req.body;
        const rooms = await Room.create({ teacher, room, date, period, type, students })
        return res.json(rooms);
    }
}