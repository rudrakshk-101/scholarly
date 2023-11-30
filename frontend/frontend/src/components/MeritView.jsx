import React, { useEffect,useState } from 'react'
import ScholarshipDetail from './ScholarshipDetail'

const MeritView = () => {
    let [array,setArray] = useState([]);
    let xyz = async() => {
        let response = await fetch('http://localhost:4500/scholarhips/getByCategory',{
            method: "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({category: "merit"})
        })
        let data = await response.json();
        console.log(data)
        setArray(data);
    }
    useEffect(() => {
        xyz();
    },[])
  return (
    <div className='box-model'>
        <center><h1 style={{color: "white",padding: "10px"}}>Merit Based Scholarships</h1></center>
      {array.map(ScholarshipDetail)}
    </div>
  )
}

export default MeritView
