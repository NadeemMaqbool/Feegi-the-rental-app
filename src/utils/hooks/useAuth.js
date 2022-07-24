import { useState, useCallback, useEffect } from "react";

let expiryTime;

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(false);
    const [expirationDate, setExpirationDate] = useState();

    const login = useCallback((uuid, token, expiration) => {
        const tokenExpiryTime = expiration || new Date(new Date().getTime() + 1000 * 60 * 60)
    
        setExpirationDate(() =>tokenExpiryTime)
        setToken(() =>token);
        setUserId(()=>uuid);
        const jsonData = JSON.stringify({ 
        userId: uuid,
        token: token,
        expiration: tokenExpiryTime.toISOString()
        })
        console.log(jsonData)  
        localStorage.setItem('userData', jsonData);
        
    }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setExpirationDate(null)

    localStorage.removeItem('userData')

  }, []);

  useEffect(() =>  {
    if(token && expirationDate) {
      const remainingTime = new Date(expirationDate).getTime() - new Date().getTime(); 
      expiryTime = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(expiryTime)
    }
  }, [token, logout, expirationDate])
 
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'))
    
    if (
      storedData 
      && storedData.token 
      && new Date(storedData.expiration) > new Date() 
      ) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration))
    }
  },[login])

  return {token, login, logout, userId}
}