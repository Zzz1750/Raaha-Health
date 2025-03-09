"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Content_tc() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-6 text-gray-800">
            {sections.map(({ title, content }, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-semibold text-[#043c3c] opacity-70">{title}</h2>
                    {Array.isArray(content) ? (
                        <ul className="mt-2 text-sm leading-relaxed list-disc pl-5">
                            {content.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-2 text-sm leading-relaxed">{content}</p>
                    )}
                </div>
            ))}
            
            <p className="text-sm font-semibold leading-relaxed text-center text-[#043c3c] mt-10">
                By using Raaha, you agree to the Terms and Conditions outlined above.
            </p>
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
    { title: "Introduction", content: "Welcome to Raaha, a digital platform connecting users with mental health professionals across India. By using our platform, you agree to these Terms and Conditions. If you do not agree, you may not access our services." },
    { title: "Eligibility", content: [
        "You must be at least 18 years old to use this platform. Minors may use the services only under the supervision and consent of a parent or guardian.",
        "These terms are governed by the laws of India."
    ]},
    { title: "Services Offered", content: "Raaha provides a platform to connect users with licensed mental health professionals (e.g., psychologists, psychiatrists, counselors). Raaha itself does not provide medical or therapeutic advice." },
    { title: "User Responsibilities", content: [
        "Provide accurate and truthful information when signing up and booking appointments.",
        "Use the platform only for lawful purposes.",
        "Avoid misuse, including spamming, impersonation, or spreading false information."
    ]},
    { title: "Professional Responsibilities", content: [
        "Mental health professionals registered on Raaha must:",
        "Maintain confidentiality and adhere to ethical practices.",
        "Hold valid certifications and licenses."
    ]},
    { title: "Booking and Payment Policies", content: [
        "Users can book appointments through the platform. Payments must be made via the methods provided.",
        "Cancellations and refunds are subject to the specific policy outlined at the time of booking."
    ]},
    { title: "Liability Disclaimer", content: [
        "Raaha acts as an intermediary and is not responsible for the outcome of consultations.",
        "For medical emergencies, contact local emergency services immediately."
    ]},
    { title: "Termination of Account", content: "Raaha reserves the right to suspend or terminate accounts for violations of these terms." },
    { title: "Intellectual Property", content: "All content on Raaha, including text, graphics, and branding, is protected by copyright laws. Unauthorized use is prohibited." },
    { title: "Dispute Resolution", content: "Any disputes will be resolved through arbitration in accordance with Indian laws." },
    { title: "Modification of Terms", content: "Raaha reserves the right to update these Terms and Conditions. Significant changes will be communicated to users." }
];
