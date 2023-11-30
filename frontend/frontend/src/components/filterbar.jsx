import CustomButton from './CustomButton'
import { S } from '.'
import React from 'react'
import './filtercss.css'

const FilterBar = () => {
  return (
    <div className='filternavbar'>
        <div id="search-form">
    <select id="dropdown1" className='dropd'>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
    </select>
    <select id="dropdown2" className='dropd'>
        <option value="optionA">Option A</option>
        <option value="optionB">Option B</option>
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
