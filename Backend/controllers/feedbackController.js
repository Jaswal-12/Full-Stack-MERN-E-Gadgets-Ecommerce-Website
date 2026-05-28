import sendMail from "../utils/sendEmail.js";

const feedbackController = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    await sendMail(email, message);

    res.status(200).json({
      success: true,
      message: "Feedback sent successfully 🚀",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export default feedbackController;