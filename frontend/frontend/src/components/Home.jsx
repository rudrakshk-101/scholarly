import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ScholarshipDetail from "./ScholarshipDetail";
import "./ScholarshipDetailCss.css";
import Filter from "./filterbar";
import "./filtercss.css";

const Home = () => {
  const naviagteTo = useNavigate();
  let [array, setArray] = useState([]);
  const [country, setCountry] = useState("India");
  const [gender, setGender] = useState("all");
  const [clss, setClss] = useState("School");
 
  let search = async() => {
    let response = await fetch('https://scholarlybackend.adaptable.app/scholarhips/getByFilter',{
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
    let response = await fetch("https://scholarlybackend.adaptable.app/scholarhips/getAll", {
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
  return (
    <div className="HomeContainer">
      <Navbar />
      <div className="filternavbar">
        <div id="search-form">
          <select
            id="country"
            className="dropd"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value="india">India</option>
            <option value="Abroad">Abroad</option>
          </select>
          <select id="gender" className="dropd" value={gender}>
            {" "}
            onChange=
            {(e) => {
              setGender(e.target.value);
            }}
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            id="class"
            className="dropd"
            value={clss}
            onChange={(e) => {
              setClss(e.target.value);
            }}
          >
            <option value="school">School</option>
            <option value="Undergraduate">Under Graduate</option>
            <option value="PostGraduate">Post Graduate</option>
          </select>
          <button id="filterButton" onClick={() => search()}>
            Search
          </button>
        </div>
      </div>
      {array.map(ScholarshipDetail)}
    </div>
  );
};

export default Home;
