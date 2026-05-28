const orderSchema = new mongoose.Schema({
  userId: String,
  products: Array,
  amount: Number,
  razorpayOrderId: String,
  status: {
    type: String,
    default: "created", // created | paid | failed
  },
});