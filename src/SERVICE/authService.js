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
  