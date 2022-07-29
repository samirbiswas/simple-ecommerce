const mongoose = require('mongoose');

const completeOrderSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  homeNo: {
    type: String,
  },
  flatNo: {
    type: String,
  },
  name: {
    type: String,
  },
  instruction: {
    type: String,
  },
  payInfo:{
    type:Object
  },
  subTotal:{
    type:Number
  },
  cart: [Object],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true })

const Order = mongoose.model('Order', completeOrderSchema);
module.exports = Order;