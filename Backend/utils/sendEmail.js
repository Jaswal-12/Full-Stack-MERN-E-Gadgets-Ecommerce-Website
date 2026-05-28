import nodemailer from "nodemailer";

const sendMail = async (email, message) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Feedback Received",
    text: `From: ${email}\n\nMessage: ${message}`,
  });
};

export default sendMail;