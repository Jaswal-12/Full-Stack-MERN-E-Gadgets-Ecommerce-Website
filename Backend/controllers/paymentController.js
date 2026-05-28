import Razorpay from "razorpay";
// import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_fakeKey123",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "fakeSecretKey456789",
});
export const createOrder = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        message: "Amount missing",
      });
    }

    const order = await razorpay.orders.create({
      amount: Number(amount) * 100,

      currency: "INR",

      receipt: `order_${Date.now()}`,
    });

    console.log(order);

    return res.status(200).json({
      success: true,

      order,
    });
  } catch (error) {
    console.log("RAZORPAY ERROR:");

    console.log(error);

    return res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};

export const verifyPayment = async (req, res) => {
  res.json({
    success: true,
  });
};
