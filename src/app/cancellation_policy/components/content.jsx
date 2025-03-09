"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Content_cancellation() {
    return (
        <div className="max-w-3xl mx-auto p-6 space-y-8 text-gray-800">
            {sections.map(({ title, content }, index) => (
                <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
                    <h2 className="text-xl font-semibold text-[#043c3c] opacity-80 mb-4">{title}</h2>
                    <div className="text-justify text-sm leading-relaxed">{content}</div>
                </div>
            ))}
            <p className="text-sm font-semibold leading-relaxed text-center text-[#043c3c] mt-10  ">
                By using Raaha, you agree to the Cancellation Policy outlined above.
            </p>
            <p className="mt-5"></p>
        </div>
    );
}

const sections = [
    { 
        title: "Introduction", 
        content: "At Raaha, we strive to provide a seamless experience for both users and mental health professionals. This Refund and Cancellation Policy outlines the terms under which cancellations and refunds can be requested. By using Raaha, you agree to this policy." 
    },
    { 
        title: "Appointment Cancellation by Users", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li><>Cancellation Before 24 Hours:</> Users can cancel their appointment at least 24 hours before the scheduled consultation for a full refund.</li>
                <li><>Cancellation Within 24 Hours:</> If a user cancels within 24 hours of the scheduled consultation, only 50% of the consultation fee will be refunded.</li>
                <li><>Missed Appointments (No-Show):</> No refunds will be provided for missed appointments without prior cancellation.</li>
            </ul>
        ) 
    },
    { 
        title: "Appointment Cancellation by Experts", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>If a mental health professional cancels an appointment, the user will receive a full refund or may opt to reschedule at no extra cost.</li>
                <li>Frequent cancellations by an expert may result in penalties or suspension from the platform.</li>
            </ul>
        ) 
    },
    { 
        title: "Rescheduling Policy", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Users may reschedule an appointment once, at least 12 hours before the scheduled time, without any additional charge.</li>
                <li>If a user requests multiple reschedules, additional charges may apply at the discretion of Raaha and the expert.</li>
            </ul>
        ) 
    },
    { 
        title: "Refund Processing", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Approved refunds will be processed within 7-10 business days via the original payment method.</li>
                <li>Users must submit refund requests through [support contact/email] with necessary details.</li>
            </ul>
        ) 
    },
    { 
        title: "Non-Refundable Situations", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>If the consultation has already been conducted, no refunds will be issued.</li>
                <li>In case of dissatisfaction with the consultation, users may submit feedback, but refunds will be subject to review.</li>
                <li>Platform fees, transaction charges, or other non-consultation service charges are non-refundable.</li>
            </ul>
        ) 
    },
    { 
        title: "Exceptional Circumstances", 
        content: (
            <ul className="list-disc list-inside pl-4 space-y-2">
                <li>If there are technical issues on Raaha’s platform that prevent the consultation from taking place, users may receive a full refund or a free reschedule.</li>
                <li>In case of medical emergencies or unavoidable situations, users may request a refund with valid proof, subject to approval.</li>
            </ul>
        ) 
    },
    { 
        title: "Policy Updates", 
        content: "Raaha reserves the right to modify this Refund and Cancellation Policy at any time. Users will be notified of significant changes." 
    },
    { 
        title: "Contact Us", 
        content: "For refund and cancellation requests, contact [Support Email] or visit [Help Center Link]." 
    }
];
