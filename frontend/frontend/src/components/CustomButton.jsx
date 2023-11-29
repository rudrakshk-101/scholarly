import React from 'react'
import './CustomButton.css'

const CustomButton = (props) => {
  return (
    <button className='custome-button bn'>
        {props.content}
    </button>
  )
}

export default CustomButton
