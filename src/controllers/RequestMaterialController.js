const Material = require('../models/Material');

module.exports = {
    async store(req, res) {
        const { teacher, resource, room, date, period} = req.body;
        const materials = await Material.create({ teacher, resource, room, date, period })
        return res.json(materials);
    }
}