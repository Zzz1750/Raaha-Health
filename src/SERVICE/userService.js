
export const getUserDetails = (async (userID, token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/getUserDetails?ID=${userID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        credentials:'include',
      })      
      if (!response.ok) {
        throw new Error("Failed to fetch user details");
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.log(error)
    }
  });

export const updatePersonalInfo = (async (userData ,userID, token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/updateUserDetails`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userData ,userID}),
        credentials:'include',
      })
      if (!response.ok) {
        throw new Error("Failed to update user details");
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.log(error)
    }
  });

export const updatePersonalAddress = (async (userData ,userID ,token) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/User/updateUserAddress`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userData ,userID}),
        credentials:'include',
      })
      if (!response.ok) {
        throw new Error("Failed to update user details");
      }
      const data = await response.json();
      return data;

    } catch (error) {
      console.log(error)
    }
  });