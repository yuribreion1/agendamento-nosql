const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema(
    {
        teacher: String,
        room: String,
        date: { type: Date, default: Date.now },
        period: String,
        type: String,
        students: Number
    }
)

module.exports = mongoose.model('Room', RoomSchema);