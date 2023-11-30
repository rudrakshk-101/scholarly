import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ScholarshipDetail from "./ScholarshipDetail";
// import "./ScholarshipDetailCss.css";
import Filter from "./filterbar";
import './masterHome.css'
import { Link } from 'react-router-dom';
import "./filtercss.css";

const MasterHome = () => {
  const naviagteTo = useNavigate();
  let [array, setArray] = useState([]);
  const [country, setCountry] = useState("India");
  const [gender, setGender] = useState("all");
  const [clss, setClss] = useState("School");
 
  let search = async() => {
    let response = await fetch('http://localhost:4500/scholarhips/getByFilter',{
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({class: clss,gender,country})
    });
    if(!response.ok) setArray([]);
    let data = await response.json();
    console.log(data.data);
    setArray(data.data);
 }

  let xyz = async () => {
    let response = await fetch("http://localhost:4500/scholarhips/getAll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();
    console.log(data);
    setArray(data);
    console.log(array);
  };
  useEffect(() => {
    xyz();
  }, []);
let navigateTo = useNavigate();

  return (
    <div className="HomeContainer">
      <Navbar />
      <h1 className="masterhead">Find the best-fit Scholarships</h1>
      <p className="masterp">Pick relevant scholarships and stand a chance to win</p>
      {/* cardstart */}
      <Link to={'/merit'}><div class="card">
    <div class="card-image"><img height={130} width={190} src={"https://d2w7l1p59qkl0r.cloudfront.net/static/images/best-fit33-new.jpg"} alt="" /></div>
    <div class="category">Merit</div>
    </div></Link>
      {/* cardstart */}
      <Link to={'/means'}><div class="card">
    <div class="card-image"><img height={130} width={190} src={"https://d2w7l1p59qkl0r.cloudfront.net/static/images/best-fit33-new.jpg"} alt="" /></div>
    <div class="category">Means</div>
    </div></Link>
      {/* cardstart */}
      <Link to={'/international'}><div class="card">
    <div class="card-image"><img height={130} width={190} src={"https://d2w7l1p59qkl0r.cloudfront.net/static/images/best-fit33-new.jpg"} alt="" /></div>
    <div class="category">International</div>
    </div></Link>
    <p className="masterp">or</p>
    {/* <h1 className="masterhead viewall">View All</h1> */}
    <Link to={'/viewAll'}><button className="masterhe viewall">View All</button></Link>
    </div>
  );
};

export default MasterHome;
