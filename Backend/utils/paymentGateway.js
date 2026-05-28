const razorpayInstance = {
  orders: {
    create: async (options) => {
      return {
        id: "order_mock_123",
        amount: options.amount,
        currency: options.currency,
        receipt: options.receipt,
        status: "created",
      };
    },
  },
};

export default razorpayInstance;