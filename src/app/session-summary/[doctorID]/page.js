"use client";
import { useEffect, useState , useCallback} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaEdit } from "react-icons/fa";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { getDoctorDetails ,getSlotsbyID } from "../../../SERVICE/doctorService";
import { getUserDetails } from '../../../SERVICE/userService';
import {formattedDates ,reFormateDate} from '../components/dateFormatter';
import {formattedSlots} from '../components/slotFormatter';
import { createSession } from "../../../SERVICE/sessionService";
export default function SessionSummary() {

  const { doctorID } = useParams();
  const router = useRouter();
  const [doctorDetails,setDoctor] = useState();
  const [sessionMode, setSessionMode] = useState("online");
  const [modeType, setModeType] = useState("video");
  const [selectedDate, setSelectedDate] = useState("4 Mar");
  const [selectedTime, setSelectedTime] = useState();
  const [slotDetails , setSlots] = useState();
  const token = useSelector((state) => state.auth.accessToken)
  const USER = useSelector((state) => state.auth.user)

  const [UserDetails , setUser] = useState()
  const dates = slotDetails? formattedDates(slotDetails) : [];
  const slots = slotDetails? formattedSlots(slotDetails) : {};

  console.log("doctorID : " , doctorID)
  useEffect(()=>{
    const fetchDoctor = async () => {
      try {
        const data = await getDoctorDetails(doctorID, token);
        console.log(data);
        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchSlots = async () => {
      try {
        const data = await getSlotsbyID(doctorID, token);
        setSlots(data)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchUser = async () => {
      try {
        const data = await getUserDetails(USER.id, token);
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }

    if (doctorID) {
      fetchUser();
      fetchDoctor();
      fetchSlots();
    };
  }, [doctorID, token ,USER?.id]);


  const handlePayment = () => {

  }

  const handleSessionUpdate = async() => {
    const reformattedDate = reFormateDate(selectedDate);
    console.log(reformattedDate)
    const newSesssion = {
      doctorID:doctorID,
      userID:USER?.id,
      sessionDate:new Date(reformattedDate),
      sessionTime:selectedTime,
      sessionMode:sessionMode,
      modeType: modeType,
      price:doctorDetails?.price
    }
    try{
      const data = await createSession(newSesssion , token);
      console.log(data);
    }
    catch(err){
      console.error(err)
    }
  }
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100">
      {/* Left Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Session Summary</h2>

        {/* Doctor Info Card */}
        <div className="border-2 rounded-3xl p-4 border-gray-400">
          <p className="text-lg font-medium pb-3">Booking a session with</p>
          <div className="flex items-center gap-4">
            <Image src="/" width={60} height={60} alt="Doctor Image" className="rounded-full" />
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
              key={time.startTime}
              onClick={() => setSelectedTime(time)}
              className={`px-4 py-2 rounded-md border ${selectedTime === time ? "bg-teal-500 text-white" : "border-gray-300"}`}
            >
              {time.startTime } - {time.endTime}
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
                {UserDetails?.username} <FaEdit className="ml-2 text-gray-500 cursor-pointer" />
              </h4>
              <p className="flex items-center text-gray-600">
                <FaPhone className="mr-2" /> {UserDetails?.phone}
              </p>
              <p className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" /> {UserDetails?.email}
              </p>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Session Fees</span>
              <span>₹{doctorDetails?.price}.00</span>
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
              <span>₹{(doctorDetails?.price ?? 0)+ 10}.00</span>
            </div>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleSessionUpdate}
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600"
        >
          Proceed To Pay
        </button>
      </div>
    </div>
  );
}
