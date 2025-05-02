'use client'
import { Log_sign_header } from "./Log_sign_header"
import { useState,useEffect } from "react";
import { FetchUserlogin } from "../../../SERVICE/authService";
import { useRouter } from "next/navigation";
import { useAppDispatch} from "../../../store/hooks";
import { login } from "../../../store/slices/authSlice"; 

export default function UserLogin({changeLoginMode}){
    
      const [disableButton, setDisableButton] = useState(true);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
        const dispatch = useAppDispatch();
    
      
        
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
             const response = await FetchUserlogin(email,password);

             if(response.message == "Login successful"){
                dispatch(login({accessToken: response.accessToken , user:JSON.parse(atob(response.accessToken.split(".")[1]))}))
                router.push("/")
                return "Login successful";
            }
            else{
                alert("Invalid Credentials");
            }
           } catch (error) {
               console.log(error);
            
           }
        }
    return(
         <div className="relative flex flex-col justify-center items-center gap-20">    
                    <Log_sign_header />
                    <div className="absolute flex gap-5 top-40">
                        <button onClick={()=>{changeLoginMode('user')}} className={`border-b-2 rounded-lg   w-40 border-green-300`}>User</button>
                        <button onClick={()=>{changeLoginMode('doctor')}} className={`border-b-2 border-gray-300 rounded-lg  w-40 `}>Doctor</button>
                    </div>
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