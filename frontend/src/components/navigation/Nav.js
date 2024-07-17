import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import './Nav.css'

const Nav = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
    }


    return (
        <nav className="navbar">
            <NavLink className="logo" to="/">FinMate</NavLink>
            
            < >
                {user ?
                   
                        <NavLink className='nav-logout' to="/" onClick={handleLogout}>Logout</NavLink>
                        
                   
                    :

                        
                    <>
                    </>
                }
            </>
        </nav>
    )
}

export default Nav