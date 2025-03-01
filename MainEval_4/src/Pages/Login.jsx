import { signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, provider } from '../Firebase/firebaseConfig'

const Login = () => {
   const [user,setUser] = useState(null)


   useEffect(()=>{
      const authUser = localStorage.getItem("user");
      if(authUser){
        setUser(JSON.parse(authUser))
      }
   })
    const login = async()=>{
        try{
            const result = await signInWithPopup(auth,provider);
            setUser(result.user)
            localStorage.setItem("user",JSON.stringify(user))
        }catch(err){
            console.log(":Error Logging in :",err)
        }
    }
    const logout = async()=>{
     try{
         await signOut(auth);
        localStorage.removeItem("user");
        setUser(null)
     }catch(err){
           console.log("Error Logging out : ",err)
     }
   }

    return (
    <div>
        {user ? (
            <div>
                <h1>Welcome , {user.displayName}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        ):(
            <button onClick={login}>Login</button>
        )}
    </div>
  )
}

export default Login;