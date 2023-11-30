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
    <select id="country" className='dropd'>
        <option value="india">India</option>
        <option value="abroad">Abroad</option>
    </select>
    <button id='filterButton' onclick="search()">Search</button>
</div>
    </div>
  )
}

export default FilterBar;
