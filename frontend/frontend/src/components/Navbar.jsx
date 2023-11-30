import CustomButton from './CustomButton'
import { S } from '.'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  let navigateTo = useNavigate();
  return (
    <div className='navbar'>
        <div>
            <img src={S} className='logo' />
        </div>
        
        <div>
            <Link to={'/login'}><CustomButton onClick={() => {
              navigateTo('/login');
            }} content = "Login" /></Link>
            <Link to={'/login'}><CustomButton onClick={() => {
              navigateTo('/register');
            }} content = "Register" /></Link>
        </div>
    </div>
  )
}

export default Navbar
