const Material = require('../models/Material');

module.exports = {
    async store(req, res) {
        const { teacher, resource, room, date, period} = req.body;
        const materials = await Material.create({ teacher, resource, room, date, period })
        return res.json(materials);
    },

    async show(req, res) {
        const materials = await Material.findById(req.params.id);
        return res.json(materials);
    },

    async index(req, res) {
        const materials = await Material.find();
        return res.json(materials);
    },

    async update(req, res) {
        const materials = await Material.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(materials);
    },

    async destroy(req, res) {
        await Material.findByIdAndRemove(req.params.id);
        return res.send();
    }
}