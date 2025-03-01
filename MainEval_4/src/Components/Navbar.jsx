import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

 
const Navbar = () => {
 const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const user = useSelector((state)=>state.auth.user)
    return (
    <div>
        <h2>My Library</h2>
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn && (
                <Link to='/my-books'>My Books</Link>
            )}
            {isLoggedIn ? (
                <div>
                    <p>{user.email}</p>
                    <button onClick={()=>localStorage.removeItem(user)}>Logout</button>
                </div>
            ):(
                <Login/>
            )}
        </nav>
    </div>
  )
}

export default Navbar