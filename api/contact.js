
import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Create a transporter using your email credentials
        const transporter = nodemailer.createTransport({
            service: "Gmail", // You can use any email provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app password
            },
        });

        try {
            // Send the email
            await transporter.sendMail({
                from: email, // Sender's email address
                to: duncansihongo@gmail.com, // Recipient's email address
                subject: New Message from ${name},
                text: Message from ${name} (${email}):\n\n${message},
            });

            res.status(200).json({ message: "Message sent successfully!" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Failed to send email." });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(Method ${req.method} Not Allowed);
    }
}
