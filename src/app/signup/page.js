'use client'
import { useState,useEffect } from "react";
import { FaUser, FaPhone, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { Log_sign_header } from "../login/components/Log_sign_header";
import { circIn } from "framer-motion";
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

  

    return(
        <div className="flex flex-col justify-center items-center gap-20">    
            <Log_sign_header />
            {step === 1 && <Step1 setStep={setStep} setSignupUserdata  ={setSignupUserdata }  signupUserdata={signupUserdata}/>}
            {step === 2 && <Step2 setStep={setStep} setSignupUserdata  ={setSignupUserdata  }/>}
            {step === 3 && <Step3 setStep={setStep} setSignupUserdata ={setSignupUserdata }/>}
            {step === 4 && <Step4 setStep={setStep} setSignupUserdata ={setSignupUserdata }/>}
            <div className="flex gap-2 absolute bottom-20">
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
    const checkPassword = () =>{
        if(tempPassword !== signupUserdata  .password){
            alert("Password does not match");
            return false;
        }
        if(signupUserdata .password == ""){
            alert("Password field is required");
            return false;
       }
       setStep((prev) => prev + 1) ; 
    };
    
    return(
        <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
                <h1 className="text-2xl">Sign Up</h1>   
                <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="text" placeholder="Enter Your Email " className="flex-grow pl-10" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,email : e.target.value}) )}} />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="password" placeholder="Create Your Password " className="flex-grow pl-10" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,password : e.target.value}) )}} />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input required type="password" placeholder="Confirm Your Password " className="flex-grow pl-10" onChange={(e)=>{settempPassword(e.target.value)}}/>
            </div>
         </div>
                <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
                <button className="border border-gray-300 shadow rounded-full h-10 w-40 hover:border-4 hover:border-blue-300 hover:-translate-y-1.5">Sign in with Google</button>
                <button  onClick={()=>{checkPassword(tempPassword)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Next</button>
            </ div>
    )
}

function Step2({setStep ,setSignupUserdata }) {
    return(
            <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
                <h1 className="text-2xl">Sign Up</h1>   
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                        <input required type="text" placeholder="Enter Your Name" className="flex-grow pl-3" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,name : e.target.value}) )}} />
                        <FaUser className="text-gray-500 translate-y-3 -translate-x-2" />
                    </div>
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                        <input required type="text" placeholder="Enter Phone Number " className="flex-grow pl-3" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,phone : e.target.value}) )}} />
                        <FaPhone className="text-gray-500 translate-y-3 -translate-x-2" />
                    </div>
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60 relative">
                       <select className="pl-3 flex-grow outline-none bg-transparent " onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,gender : e.target.value}) )}} >
                        <option value="" disabled selected>Sex</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div>  
                    <div className="flex border border-gray-300 rounded-lg h-10 w-60 items-center relative">
                        <input type="date" className="flex-gorw pl-3 pr-10 w-full outline-none appearance-none" />
                        {/* <FaCalendarAlt className="absolute right-3 text-gray-500" /> */}
                    </div>
                </div>

                <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
                <div className="flex gap-10">
                    <button  onClick={()=>{setStep((prev) => prev - 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Back</button>
                    <button  onClick={()=>{setStep((prev) => prev + 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Next</button>
                </div>
            </ div>
    )
}

function Step3({setStep ,setSignupUserdata }) {
    return(
        
        <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
        <h1 className="text-2xl">Sign Up</h1>   
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,state : e.target.value}) )}} placeholder="Enter Your State " className="pl-3 flex-grow" />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev,city : e.target.value}) )}} placeholder="Create Your City " className="pl-3 flex-grow" />
            </div>
            <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                <input type="text" onChange={(e)=>{setSignupUserdata ((prev) => ({...prev, pincode : e.target.value}) )}} placeholder="Confirm Your Pincode " className="pl-3 flex-grow" />
            </div>
         </div>


        <a href="/login" className=" text-blue-400">Already have an account?, Log In.</a>
        <div className="flex gap-10">
                <button  onClick={()=>{setStep((prev) => prev - 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Back</button>
                <button  onClick={()=>{setStep((prev) => prev + 1)}} className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400">Next</button>
        </div>
        </ div>
    )
}
function Step4({setStep}) {
    return (
        <div className="flex flex-col justify-center items-center h-96 w-96 align-middle gap-5">
            <h1 className="text-2xl">Verify OTP</h1>   
            <div className="flex flex-col justify-center items-center gap-2">
                <p>
                    OTP has been shared to <a href="" className="text-blue-400" >test@gmail.com</a>
                </p>
                <p>Check your Mail</p>
                <div className="flex border border-gray-300 rounded-lg h-10 w-60">
                    <input type="text" placeholder="Enter OTP" className="pl-10 flex-grow" />
                </div>
                <a href="" className="text-blue-400">Resend OTP</a>
            </div>

            <div className="flex gap-10">
                <button 
                    onClick={() => setStep(prev => prev - 1)} 
                    className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    Back
                </button>
                <button 
                    onClick={() => setStep(prev => prev + 1)} 
                    className="bg-green-400 text-white text-center rounded-lg h-6 w-30 disabled:cursor-not-allowed disabled:bg-gray-400"
                >
                    Verify
                </button>
            </div>
        </div>
    );
}