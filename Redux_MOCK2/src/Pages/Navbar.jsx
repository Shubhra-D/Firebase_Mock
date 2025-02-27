import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import '../App.css'
import { logout } from '../Redux/actions'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { signOut } from 'firebase/auth'
const Navbar = () => {
 const user = useSelector((state)=>state.auth.user)
 const dispatch = useDispatch()
 const history = useNavigate()
 const handleLogout = ()=>{
    signOut(getAuth())
    .then(()=>{
        dispatch(logout())
        history.push("/")
    }).catch((err)=>{
          console.log("Error Logging out",err)
    })

 }
    return (
    <div className='nav-cont'>
        <p>Collaborative Notes App</p>
        {user ? (
            <div className='left-nav'>
                <p>Welcome ,{user.displayName}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        ):(
            <p>Welcome User</p>
        )}
    </div>
  )
}

export default Navbar