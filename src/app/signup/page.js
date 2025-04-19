'use client'
import { useState,useEffect } from "react";
import { FaUser, FaPhone, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { Log_sign_header } from "../login/components/Log_sign_header";
import { useNavigate } from "react-router-dom";
import { validateEmail,validatePassword,validatePhonenumber,validateSex } from "./components/validation";
import {checkOTP} from '../../SERVICE/authService'

export default function Signup(){
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const[signupUserdata,setSignupUserdata ]=useState({
        email:"",
        password:"",
        name:"",
        phone:"",
        date_of_birth:"",
        gender:"",
        state:"",
        city:"",
        pincode:"",
    })

    const checkUserExisting = async ()=>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/checkUsername?userName=${signupUserdata.name}`,{ method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },})
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
        
                const data = await response.json();
                console.log(data);
                return data;
            } catch (error) {
                console.error("Error checking user:", error);
            }

    }

    const addUser = async ()=>{
        try {
            console.log("Sending Data:", signupUserdata);
            const response = await fetch(`http://localhost:5000/Auth/register`,{ method: "POST",
                body: JSON.stringify({ userDetails: signupUserdata }),
                headers: {
                    "Content-Type": "application/json",
                },})
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json()
                console.log("User added:", result);
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };
    
    return(
        <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col justify-center items-center gap-20">    
            <Log_sign_header />
            {step === 1 && <Step1 setStep={setStep} setSignupUserdata  ={setSignupUserdata }  signupUserdata={signupUserdata}/>}
            {step === 2 && <Step2 setStep={setStep} setSignupUserdata  ={setSignupUserdata  } signupUserdata={signupUserdata} checkUserExisting={checkUserExisting}/>}
            {step === 3 && <Step3 setStep={setStep} setSignupUserdata ={setSignupUserdata } signupUserdata={signupUserdata}/>}
            {step === 4 && <Step4 setStep={setStep} setSignupUserdata ={setSignupUserdata } signupUserdata={signupUserdata} addUser={addUser}/>}
           
        </div>
        <div className="flex gap-2  bottom-20">
                {[...Array(totalSteps)].map((_, index) => (
                    <div
                        key={index}
                        className={`rounded-full h-2 w-2 ${
                            step >= index + 1 ? "bg-blue-300" : "bg-gray-300"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    )
}




// STEPS FOR SIGNUP PAGE
function Step1({setStep , setSignupUserdata ,signupUserdata}) {
    const [tempPassword,settempPassword] = useState("")
    const [disableButtonNext,setButtonNext] = useState(true);

    // Disable next button
    useEffect(() => {
        if (signupUserdata.email && signupUserdata.password) {
            setButtonNext(false);
        } else {
            setButtonNext(true);
        }
    }, [signupUserdata.email,signupUserdata.password]);

    // Check if password matches
    const checkPassword = () =>{
        if(tempPassword !== signupUserdata.password){
            alert("Password does not match");
            return false;
        }
        if(validatePassword(signupUserdata.password) == false){
            alert("password should have atleast have 8 letter");
            return false;
       }
       if(validateEmail(signupUserdata.email) == false){
            alert("Invalid Email");
            return false;
       }
       setStep((prev) => prev + 1) ; 
    };
    
    return(
        <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
                <h1 className="text-2xl">Sign Up</h1>   
                <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="email" defaultValue={signupUserdata.email} placeholder="Enter Your Email " className="flex-grow pl-10" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,email : e.target.value}) )}} />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="password" defaultValue={signupUserdata.password} placeholder="Create Your Password " className="flex-grow pl-10" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,password : e.target.value}) )}} />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="password" placeholder="Confirm Your Password " className="flex-grow pl-10" onChange={(e)=>{settempPassword(e.target.value)}}/>
            </div>
         </div>
                <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
                <button className="border border-gray-300 shadow rounded-full h-10 w-40 hover:border-4 hover:border-blue-300 hover:-translate-y-1.5">Sign in with Google</button>
                <button  onClick={()=>{checkPassword(tempPassword)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400" disabled={disableButtonNext}>Next</button>
            </ div>
    )
}

function Step2({setStep ,setSignupUserdata , checkUserExisting, signupUserdata }) {

    const [disableButtonNext,setButtonNext] = useState(true);
    
    // Disable next button if any field is empty
    useEffect(() => {
        if (signupUserdata.name  && signupUserdata.phone && signupUserdata.gender && signupUserdata.date_of_birth) {
            setButtonNext(false);
        } else {
            setButtonNext(true);
        }
    }, [signupUserdata.name, signupUserdata.gender, signupUserdata.phone, signupUserdata.date_of_birth]);

    const handleNext = async() =>{
        
        const response =  await checkUserExisting()
        if(response == "User already exists"){
            alert("User already exists");
            return;
        }
        if(validatePhonenumber(signupUserdata.phone) == false){
            alert("Phone number should have exactly 10 digits")
            return false;
        }
        setStep((prev) => prev + 1)
    };
    return(
            <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
                <h1 className="text-2xl">Sign Up</h1>   
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                        <input required type="text" defaultValue={signupUserdata.name} placeholder="Enter Your Name" className="flex-grow pl-3" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,name : e.target.value}) )}} />
                        <FaUser className="text-gray-500 translate-y-3 -translate-x-2" />
                    </div>
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                        <input required type="text" defaultValue={signupUserdata.phone} placeholder="Enter Phone Number " className="flex-grow pl-3" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,phone : e.target.value}) )}} />
                        <FaPhone className="text-gray-500 translate-y-3 -translate-x-2" />
                    </div>
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                       <select className="pl-3 flex-grow outline-none bg-transparent" defaultValue={signupUserdata.gender} onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,gender : e.target.value}) )}} >
                        <option value="" disabled selected>Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div>  
                    <div className="flex border border-gray-300 rounded-lg h-10 w-60 items-center relative">
                        <input type="date" defaultValue={signupUserdata.date_of_birth} className="flex-grow pl-3 pr-10 w-full outline-none appearance-none"  onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,date_of_birth : e.target.value}) )}}/>
                        {/* <FaCalendarAlt className="absolute right-3 text-gray-500" /> */}
                    </div>
                </div>

                <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
                <div className="flex gap-10">
                    <button  onClick={()=>{setStep((prev) => prev - 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Back</button>
                    <button  onClick={()=>{handleNext()}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400" disabled={disableButtonNext}>Next</button>
                </div>
            </ div>
    )
}

function Step3({setStep ,setSignupUserdata, signupUserdata }) {
    
    const [disableButtonNext,setButtonNext] = useState(true);
    
    
    const checkOTP= async() => {
        try {
            console.log(signupUserdata?.email)
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/sendOTP`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email : signupUserdata?.email})
            }) ;
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error)
        }
    }

    // Disable next button if any field is empty
    useEffect(() => {
        if (signupUserdata.city && signupUserdata.pincode && signupUserdata.state) {
            setButtonNext(false);
        } else {
            setButtonNext(true);
        }
    }, [signupUserdata.city, signupUserdata.state, signupUserdata.pincode]);

    const handleNext = async () => {
        const response = await checkOTP();
      
        if (response?.ok || response?.success) {
          alert("OTP sent successfully");
          setStep((prev) => prev + 1);
        } else {
          alert("Failed to send OTP. Please try again.");
        }
      };

    return(
        
        <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
        <h1 className="text-2xl">Sign Up</h1>   
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" defaultValue={signupUserdata.state} onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,state : e.target.value}) )}} placeholder="Enter Your State " className="pl-3 flex-grow" />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" defaultValue={signupUserdata.city} onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,city : e.target.value}) )}} placeholder="Create Your City " className="pl-3 flex-grow" />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" defaultValue={signupUserdata.pincode} onChange={(e)=>{setSignupUserdata ((prev) => ({...prev, pincode : e.target.value}) )}} placeholder="Confirm Your Pincode " className="pl-3 flex-grow" />
            </div>
         </div>


        <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
        <div className="flex gap-10">
                <button  onClick={()=>{setStep((prev) => prev - 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Back</button>
                <button  onClick={()=>{handleNext()}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400" disabled={disableButtonNext}>Next</button>
        </div>
        </ div>
    )
}
function Step4({setStep , signupUserdata, addUser}) {
    const [disableButtonNext,setButtonNext] = useState(true);
    const [tempVerifyOtp,setTempVerifyOtp] = useState("")


    // Disable next button if any field is empty
    useEffect(() => {
        if (tempVerifyOtp) {
            setButtonNext(false);
        } else {
            setButtonNext(true);
        }
    }, [tempVerifyOtp]);

    const checkemail =() => {
        if (signupUserdata.email == ""){
            alert("fill the email field");
            return false;
        }
    };
    checkemail

    const handleResentOTP = async () => {
        const response = await resendOTP();
          
        if (response?.ok || response?.success) {
          alert("OTP sent successfully");
         
        } else {
          alert("Failed to send OTP. Please try again.");
        }
      };       
            
      const handleSubmit = async () => {
        try {
          const response = await checkOTP(email, tempVerifyOtp);
      
          if (response?.success) {
            await addUser(); // Make sure this is awaited
            window.location.href = "/login"; // Redirect after successful user addition
          } else {
            alert("Invalid OTP or expired. Please try again.");
          }
        } catch (error) {
          console.error("Error verifying OTP or adding user:", error);
          alert("Something went wrong. Please try again later.");
        }
      };
      
    return (
        <div className="flex flex-col justify-center items-center h-96 w-96 align-middle gap-5">
            <h1 className="text-2xl">Verify OTP</h1>   
            <div className="flex flex-col justify-center items-center gap-2">
                <p>
                    OTP has been shared to <a href={signupUserdata.email} className="text-blue-400" >{signupUserdata.email? (signupUserdata.email) : "No Mail Provided"}</a>
                </p>
                <p>Check your Mail</p>
                <div className="flex border border-gray-300 rounded-lg h-10 w-60">
                    <input type="text" placeholder="Enter OTP" className="pl-10 flex-grow" onChange={(e)=>{setTempVerifyOtp(e.target.value)}} />
                </div>
                <button onClick={() => {handleResentOTP()} } className="text-blue-400">Resend OTP</button>
            </div>

            <div className="flex gap-10">
                <button 
                    onClick={() => setStep(prev => prev - 1)} 
                    className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    Back
                </button>
                <button 
                    onClick={() => handleSubmit()} 
                    className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400"
                    disabled={disableButtonNext}
                >
                    Verify
                </button>
            </div>
        </div>
    );
}