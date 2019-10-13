const Room = require('../models/Room');

module.exports = {

    async request(req, res) {
        return res.render('request/room');
    },

    async store(req, res) {
        const { teacher, room, date, period, type, students } = req.body;
        const rooms = await Room.create({ teacher, room, date, period, type, students })
        return res.format({
            html: () => {
                res.redirect('/menu?registered=true')
            }, 
            json: () => {
                res.json(rooms);
            }
        })
    },

    async show(req, res) {
        const rooms = await Room.findById(req.params.id);
        return res.json(rooms);
    },

    async index(req, res) {
        const rooms = await Room.find();
        return res.format({
            html: () => {
                res.render('list/room', { result: rooms });
            }, 
            json: () => {
                res.json(rooms);
            }
        })
    },

    async update(req, res) {
        const rooms = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(rooms);
    },

    async destroy(req, res) {
        await Room.findByIdAndRemove(req.params.id);
        return res.redirect('/menu?removed=true');
    }
}