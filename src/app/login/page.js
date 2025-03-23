'use client'
import { Log_sign_header } from "./components/Log_sign_header"
import { useState,useEffect } from "react";
export default function Login(){
    const [disableButton, setDisableButton] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        if(email && password){
            setDisableButton(false);
        }
        else{
            setDisableButton(true);
        }
    },[email,password])
    
    const handleSubmit = async() => {
       try {
         const response = await fetch('http://localhost:5000/User/Login/validate',{ method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),})
            const data = await response.json();
            console.log(data);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            if(data.message == "Login successful"){
                window.location.href = "/";
            }
            else{
                alert("Invalid Credentials");
            }
       } catch (error) {
           console.log(error);
        
       }
    }
    return(
        <div className="flex flex-col justify-center items-center gap-20">    
            <Log_sign_header />
            <div className="flex flex-col justify-center items-center  border-4 border-gray-300 rounded-lg h-96 w-96 align-middle gap-5">
                <h1 className="text-2xl">Log In</h1>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email " className="pl-10" />
                    </div>
                    <div className="flex border border-gray-300 rounded-lg  h-10 w-60">
                        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password " className="pl-10" />
                    </div>
                </div>

                <a href="/signup" className=" text-blue-400">Create a new account?, Sign UP</a>
                <button className="border border-gray-300 shadow rounded-full h-10 w-40 hover:border-4 hover:border-blue-300 hover:-translate-y-1.5">Sign in with Google</button>
                <button onClick={handleSubmit} className="bg-green-400 text-white rounded-lg h-10 w-30 disabled:cursor-not-allowed disabled:bg-gray-400" disabled={disableButton} >Submit</button>
            </ div>
        </div>
    )
}