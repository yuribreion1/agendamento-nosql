const mongoose = require('mongoose');
const MaterialSchema = new mongoose.Schema(
    {
        teacher: String,
        resource: String,
        room: String,
        date: { type: Date, default: Date.now },
        period: String
    }
)

module.exports = mongoose.model('Material', MaterialSchema);