import React from "react";

export default function Dropdown () {  
    const check = (e) => {
        if (e.target.value === "all") {
        let text = document.getElementById("new1");
        let text1 = document.getElementById("new2");
        let text2 = document.getElementById("new3");
            text.style.display = "block";
            text1.style.display = "none";
            text2.style.display = "none";
        } else if (e.target.value === "no") {
        let text = document.getElementById("new2");
        let text1 = document.getElementById("new1");
        let text2 = document.getElementById("new3");
        text.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        }
        else if (e.target.value === "yes") {
        let text = document.getElementById("new3");
        let text1 = document.getElementById("new1");
        let text2 = document.getElementById("new2");
        text.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
        }
        else {
            let text = document.getElementById("new3");
        let text1 = document.getElementById("new1");
        let text2 = document.getElementById("new2");
        text.style.display = "none";
        text1.style.display = "none";
        text2.style.display = "none";
        }
    }
    return (
        <div>
            <h1>Dropdown</h1>
        <select onChange={(e) => check(e)}>
            <option value="select">Select</option>
            <option value="all">All</option>
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select>
        <p id="new1" style={{display:'none'}}>you have selected All having id 0 whose age is 22 years</p>
        <p id="new2" style={{display:'none'}}>you have selected No having id 1 whose age is 25 years</p>
        <p id="new3" style={{display:'none'}}>you have selected Yes having id 2 whose age is 28 years</p>
        </div>
    )   
}