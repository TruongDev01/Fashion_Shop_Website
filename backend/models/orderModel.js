import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId: { type: String, reuqired: true },
    items: { type: Array, reuqired: true },
    amount: { type: Number, reuqired: true },
    address: { type: Object, required: true },
    status: { type: String, reuqired: true, default: 'Order Placed' },
    paymentMethod: { type: String, required: true },
    payment: { type: Boolean, reuqired: true, default: false },
    date: { type: Number, required: true }


})

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel;