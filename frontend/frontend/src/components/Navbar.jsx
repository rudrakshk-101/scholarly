import CustomButton from './CustomButton'
import { S } from '.'
import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={S} className='logo' />
        </div>
        
        <div>
            <CustomButton content = "Login" />
            <CustomButton content = "Register" />
        </div>
    </div>
  )
}

export default Navbar
