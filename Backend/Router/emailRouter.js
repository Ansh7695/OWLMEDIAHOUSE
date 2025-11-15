import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/email", async (req, res) => {
  const { name, email, phone, about } = req.body.formData;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "owlmediahouse1@gmail.com",
        pass: "pfaswishspqpwpgj",
      },
    });

    const mailOptions = {
      from: `Owl Media House <owlmediahouse1@gmail.com>`,
      to: "piyush051616@gmail.com",
      subject: `New Lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2>New Contact Form Submission 🦉</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${about}</p>
          <hr>
          <p style="font-size: 14px; color: #777;">This email was sent from Owl Media House Website</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.json({ success: false, message: "Error sending email" });
  }
});

export default router;
