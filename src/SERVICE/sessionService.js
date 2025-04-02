export const createSession = async(newSession , token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/Session/createSession`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization : `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify(newSession)
        })
    
        const data = response.json({})
        return data;
    } catch (error) {
        console.log(error);
    }
}