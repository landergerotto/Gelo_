const mongoose = require('mongoose');
const { userSchema } = require("./user");

const fomigaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 15
    },
    price: {
        type: Number,
        required: true
    },
    bought: [{
        type: userSchema,
        required: false
    }],
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: false
    },
    removedAt: {
        type: Date,
        required: false
    },
})

const Fomiga = mongoose.model('Fomiga', fomigaSchema);

module.exports = Fomiga
exports.fomigaSchema = fomigaSchema;
