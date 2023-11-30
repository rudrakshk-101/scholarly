import CustomButton from './CustomButton'
import { S } from '.'
import React from 'react'
import './filtercss.css'

const FilterBar = () => {
  return (
    <div className='filternavbar'>
        <div id="search-form">
    <select id="gender" className='dropd'>
        <option>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <select id="class" className='dropd'>
        <option value="School">School</option>
        <option value="Undergraduate">Under Graduate</option>
        <option value="PostGraduate">Post Graduate</option>
    </select>
    <select id="dropdown3" className='dropd'>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <button id='filterButton' onclick="search()">Search</button>
</div>
    </div>
  )
}

export default FilterBar;
