const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        minlength: 3
    },
    itemId: [{
        type: String,
        required: true,
        minlength: 6
    }],
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

const Order = mongoose.model('Order', orderSchema)

exports.Order = Order;
exports.orderSchema = orderSchema;
