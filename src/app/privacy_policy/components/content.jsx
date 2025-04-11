"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });


export default function Content_privacy() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
            {sections.map(({ title, content }, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-semibold text-[#043c3c] opacity-70">{title}</h2>
                    <p className="mt-2 text-sm leading-relaxed">{content}</p>
                </div>
            ))}
            
            <p className="text-sm font-semibold leading-relaxed text-center text-[#043c3c] mt-10  ">
                By using Raaha, you agree to the Privacy Policy outlined above.
            </p>
            <p className="mt-5"></p>
        </div>
    );
}

const sections = [
    { title: "Definitions", content: [
        "Company: 'Raaha,' 'Raaha Health,' 'Company,' 'we,' 'our,' 'us,' 'Service Provider' or similar terminology refer to Raaha as the provider of services for the remainder of this document.",
        "User: 'Client,' 'user,' 'you,' 'your' or similar terminology refer to individuals using the platform for mental health services.",
        "Platform: 'Platform' or similar terminology refer to any mobile app, website, or web links that the User can use to access services provided by Raaha.",
        "Mental Health Professional: 'Expert,' 'therapist,' 'psychiatrist,' 'psychologist,' 'counselor,' 'consultant' or similar terminology refer to the licensed professionals registered on Raaha.",
        "Consultation: A professional mental health session conducted through Raaha between a User and a Mental Health Professional.",
        "Payout: The earnings received by Experts for consultations after applicable deductions."
    ]},
    { title: "Introduction", content: "Raaha values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and protect your information." },
    { title: "Data Collection", content: "We collect personal details (name, email, phone, etc.), health information, payment details, and technical data like device info and cookies." },
    { title: "Purpose of Data Collection", content: "Your data is collected for authentication, booking and consultation management, payment processing, and improving platform functionality." },
    { title: "Data Sharing", content: "Your data may be shared with mental health professionals, third-party payment processors, or law enforcement if required by law." },
    { title: "Data Security", content: "Raaha employs encryption, firewalls, and secure servers to protect your data. However, no system is entirely secure." },
    { title: "User Rights", content: "You have the right to access, update, and delete your data, and opt out of non-essential communications." },
    { title: "Cookies and Tracking", content: "We use cookies to enhance user experience. Disabling cookies may limit some platform features." },
    { title: "Data Retention", content: "Your data is retained as long as necessary for outlined purposes or as required by law." },
    { title: "Breach Notification", content: "In the event of a data breach, affected users will be notified promptly." },
    { title: "Updates to Privacy Policy", content: "This Privacy Policy may be updated periodically. Users will be informed of significant changes." },
    { title: "Contact Us", content: "For concerns, contact Raaha at [Your Support Email Address]." }
];