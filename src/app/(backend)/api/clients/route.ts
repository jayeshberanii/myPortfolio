
import ClientsDetails from "@/models/Clients";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const connectionString = process.env.MONGODB_URI as string;

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function GET() {
    try {
        await mongoose.connect(connectionString);
        return NextResponse.json({ result: true });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return NextResponse.json({ result: false, error: error });
    }
}

export async function POST(req: Request) {
    try {
        const { firstname, lastname, email, description } = await req.json();

        
        await mongoose.connect(connectionString);
        const clientDetails = new ClientsDetails({
            firstName: firstname,
            lastName: lastname,     
            email: email,
            description: description
        });
        const result = await clientDetails.save();

        const mailOptions = {
            from: 'mitup7869@gmail.com',
            to: email || "mitenpate1234@gmail.com",
            cc: 'mitenpate1234@gmail.com',
            subject: 'Thank you for reaching out!',
            html: `
                    <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                        <p>Dear ${firstname},</p>
                        <p>Thank you for getting in touch! We appreciate you contacting us about "${description}". I'll get back in touch with you soon! Have a great day!</p>                      
                        <p style="margin-top: 20px">
                        Best regards,<br/>
                        <strong>Miten Patel</strong><br/>
                        Software Developer<br/>
                        M: +91 95100 39054<br/>
                        E: mitenpate1234gmail.com<br/>
                        W: <a href="https://my-portfolio-kappa-bay.vercel.app/" style="color: #007bff;">miten-patel-portfolio.vercel.com</a><br/>
                        </p>                     
                    </div>
                `
        };


        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error("Error handling POST request:", error);
        return NextResponse.json({ result: false, error: (error as Error).message });
    }
}
