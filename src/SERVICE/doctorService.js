
export const getDoctorDetails = (async (doctorID, token) => {
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
      return data;

    } catch (error) {
      console.log(error)
    }
  });

  
export const getSlotsbyID = (async (doctorID, token) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/Doctor/getSlotsbyID?ID=${doctorID}`, {
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
    return data;

  } catch (error) {
    console.log(error)
  }
});

export const getAllDoctors = (async (token) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/Doctor/getAllDoctors`, {
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
    return data;

  } catch (error) {
    console.log(error)
  } 
});