import React, { useEffect,useState } from 'react'
import ScholarshipDetail from './ScholarshipDetail'

const MeansView = () => {
    let [array,setArray] = useState([]);
    let xyz = async() => {
        let response = await fetch('https://scholarlybackend.adaptable.app/scholarhips/getByCategory',{
            method: "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({category: "means"})
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
        <center><h1 style={{color: "white",padding: "10px"}}>Means Based Scholarships</h1></center>
      {array.map(ScholarshipDetail)}
    </div>
  )
}

export default MeansView
