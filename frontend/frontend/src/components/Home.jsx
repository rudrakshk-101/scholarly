import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import ScholarshipDetail from './ScholarshipDetail'
import './ScholarshipDetailCss.css'
import Filter from './filterbar'

const Home = () => {
  let [array,setArray] = useState([]);
  let xyz = async () => {
    let response = await fetch('http://localhost:4500/scholarhips/getAll',{
      method: 'POST',
      headers: { "Content-Type": "application/json"},
    });
    let data = await response.json();
    console.log(data);
    setArray(data);
    console.log(array)
  }
  useEffect(() => {
    xyz();
  },[]);
  return (
    <div className='HomeContainer'>
      <Navbar />
      <Filter />
      {array.map(ScholarshipDetail)}
      {/* <ScholarshipDetail 
        title = "Mp Government Scholarship"
        description= "This is a scholarship detail and it is meant to be read by a student."
        lastDate = "10/12/2023"
        image="https://i.ibb.co/n6GrsNr/S.png"
      />
      <ScholarshipDetail />
      <ScholarshipDetail />
      <ScholarshipDetail />
      <ScholarshipDetail />
      <ScholarshipDetail />
      <ScholarshipDetail />
      <ScholarshipDetail /> */}

    </div>
  )
}

export default Home
