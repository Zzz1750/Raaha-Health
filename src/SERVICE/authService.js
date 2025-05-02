export const checkOTP = async (email, otp) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/verifyOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({ email, otp }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data?.message || "Failed to verify OTP");
      }
  
      return data;
    } catch (error) {
      console.error("OTP verification failed:", error);
      return { success: false, message: error.message }; // ensure consistent return
    }
  };
  
  export const FetchUserlogin = async(email,password) => {
    try {
      const response = await fetch('http://localhost:5000/Auth/login', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password }),
         credentials: "include", // ✅ Ensures cookies are sent
     });
         const data = await response.json();
         console.log(data);
         if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
         }
         return data;
        //  if(data.message == "Login successful"){
             
        //      dispatch(login({accessToken: data.accessToken , user:JSON.parse(atob(data.accessToken.split(".")[1]))}))

        //      router.push("/")
        //      return "Login successful";
        //  }
        //  else{
        //      alert("Invalid Credentials");
        //  }
    } catch (error) {
        console.log(error);
     
    }
 }

 export const FetchDoctorLogin = async(email,password) => {
     try {
       const response = await fetch('http://localhost:5000/Auth/doc/login', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include", // ✅ Ensures cookies are sent
      });
          const data = await response.json();
          console.log(data);
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return data;
        //  if(data.message == "Login successful"){
             
        //      dispatch(login({accessToken: data.accessToken , user:JSON.parse(atob(data.accessToken.split(".")[1]))}))

        //      router.push("/")
        //      return "Login successful";
        //  }
        //  else{
        //      alert("Invalid Credentials");
        //  }
     } catch (error) {
         console.log(error);
      
     }
  }