"use client";
import { useEffect, useState , useCallback} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaEdit } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

export default function SessionSummary() {

  const { doctorID } = useParams();
  const [doctorDetails,setDoctor] = useState();
  const [sessionMode, setSessionMode] = useState("online");
  const [modeType, setModeType] = useState("video");
  const [selectedDate, setSelectedDate] = useState("4 Mar");
  const [selectedTime, setSelectedTime] = useState("");
  const token = useSelector((state) => state.auth.accessToken)
  const USER = useSelector((state) => state.auth.user)
  const dates = ["4 Mar", "5 Mar", "6 Mar", "7 Mar"];
  const slots = {
    "4 Mar": ["4:00 - 4:50 pm", "5:00 - 5:50 pm", "6:00 - 6:50 pm", "7:00 - 7:50 pm", "8:00 - 8:50 pm"],
    "5 Mar": ["4:00 - 4:50 pm", "5:00 - 5:50 pm", "6:00 - 6:50 pm"],
    "6 Mar": ["4:00 - 4:50 pm", "5:00 - 5:50 pm"],
    "7 Mar": ["4:00 - 4:50 pm"]
  };

  const getDoctorDetails = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/Doctor/getDoctorDetails?ID=${doctorID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        credentials:'include',
      })      
      if (!response.ok) {
        throw new Error("Failed to fetch doctor details");
      }
      const data = await response.json();
      setDoctor(data);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }
  ,[doctorID, token]);
 
  
  useEffect(()=>{
    // setDoctorID(router.query)
    if(doctorID){
      getDoctorDetails()
     
    }
  },[doctorID , getDoctorDetails])

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Session Summary</h2>

        {/* Doctor Info Card */}
        <div className="border-2 rounded-3xl p-4 border-gray-400">
          <p className="text-lg font-medium pb-3">Booking a session with</p>
          <div className="flex items-center gap-4">
            <Image src="" width={60} height={60} alt="Doctor Image" className="rounded-full" />
            <div>
              <p className="font-semibold">Dr. {doctorDetails?.firstname}</p>
              <p className="text-gray-500">Qualification:{doctorDetails?.qualification}</p>
              <p className="text-gray-500">3+ years experience</p>
            </div>
          </div>
        </div>

        {/* Mode of Session */}
        <div className="mt-6">
          <h3 className="text-xl font-medium">Mode of Session</h3>
          <div className="border-2 rounded-md mt-2">
            <div className="flex justify-around border-b border-gray-300">
              <button onClick={() => setSessionMode("online")} className={`py-2 w-1/2 ${sessionMode === "online" ? "bg-teal-500 text-white" : ""}`}>
                Online
              </button>
              <button onClick={() => setSessionMode("offline")} className={`py-2 w-1/2 ${sessionMode === "offline" ? "bg-teal-500 text-white" : ""}`}>
                Offline
              </button>
            </div>
            {sessionMode === "online" && (
              <div className="flex justify-around p-2">
                <button onClick={() => setModeType("video")} className={`border p-2 w-1/2 ${modeType === "video" ? "bg-teal-500 text-white" : ""}`}>
                  Video
                </button>
                <button onClick={() => setModeType("call")} className={`border p-2 w-1/2 ${modeType === "call" ? "bg-teal-500 text-white" : ""}`}>
                  Call
                </button>
              </div>
            )}
            <p className="text-sm text-gray-500 p-2">You will receive an email with the session link after booking is complete.</p>
          </div>
        </div>
      </div>

      {/* Right Section (Date & Time, Bill Details) */}
      <div className="flex-1 bg-white p-6 shadow-md rounded-lg">
        {/* Date & Time Section */}
        <h3 className="text-lg font-semibold mb-4">Date and Time</h3>
        <div className="flex gap-2 mb-4">
          {dates.map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`px-4 py-2 rounded-md border ${selectedDate === date ? "bg-teal-500 text-white" : "border-gray-300"}`}
            >
              {date}
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {slots[selectedDate]?.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-md border ${selectedTime === time ? "bg-teal-500 text-white" : "border-gray-300"}`}
            >
              {time}
            </button>
          ))}
        </div>

        {/* Bill Details */}
        <div className="border rounded-lg p-4 mb-4">
          <h3 className="text-lg font-semibold">Bill Details</h3>

          {/* User Info */}
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <div>
              <h4 className="font-semibold flex items-center">
                {USER?.name} <FaEdit className="ml-2 text-gray-500 cursor-pointer" />
              </h4>
              <p className="flex items-center text-gray-600">
                <FaPhone className="mr-2" /> 8714488548
              </p>
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" /> {USER?.email}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Session Fees</span>
              <span>₹1500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Platform Fees</span>
              <span>₹10.00</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount</span>
              <span>-</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Bill</span>
              <span>₹1510.00</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => router.push("/payment")}
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
        >
          Proceed To Pay
        </button>
      </div>
    </div>
  );
}
