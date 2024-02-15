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
    product: [{
        Id: {
            type: String,
            required: true,
            minlength: 6
        },
        Color : {
            type: String,
            required: true,
        },
        Qty : {
            type: number,
            require: true
        }

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
