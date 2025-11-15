// utils/emailTemplate.js
import nodemailer from "nodemailer";

/**
 * Creates and returns a transporter for Gmail.
 * Use Google App Password for secure authentication.
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "owlmediahouse1@gmail.com" , // your sender Gmail (e.g. owlmediahouse1@gmail.com)
    pass: "pfaswishspqpwpgj", // your Gmail App Password
  },
});

/**
 * HTML Email Template for new leads
 */
const generateLeadTemplate = ({ name, email, phone, about }) => {
  return `
    <div style="font-family: 'Poppins', sans-serif; background-color:#f7f7f7; padding: 20px;">
      <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 15px rgba(0,0,0,0.1)">
        <div style="background-color:#facc15; padding:20px; text-align:center;">
          <h2 style="margin:0; color:#000;">🦉 OWL MEDIA HOUSE</h2>
          <p style="color:#111; margin-top:6px;">New Lead Notification</p>
        </div>

        <div style="padding: 25px;">
          <h3 style="color:#333;">Lead Details:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong> ${about}</p>

          <p style="margin-top:20px; font-size:13px; color:#555;">
            This message was sent from the <b>Owl Media House</b> website form.
          </p>
        </div>

        <div style="background:#000; color:#fff; text-align:center; padding:12px;">
          <p style="margin:0; font-size:12px;">&copy; ${new Date().getFullYear()} Owl Media House | All Rights Reserved</p>
        </div>
      </div>
    </div>
  `;
};

/**
 * Sends a formatted email notification to your business inbox.
 */
const sendLeadEmail = async (formData) => {
  const { name, email, phone, about } = formData.formData;

  const mailOptions = {
    from: `"Owl Media House" <${process.env.EMAIL_USER}>`,
    to: "piyush051616@gmail.com", // business recipient
    subject: `📩 New Lead from ${name}`,
    html: generateLeadTemplate({ name, email, phone, about }),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Lead Email Sent:", info.response);
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return { success: false, error };
  }
};

export default sendLeadEmail;
