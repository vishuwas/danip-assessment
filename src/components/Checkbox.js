import React from "react";

export default function Checkbox () {
    const check = () => {
        let checkBox = document.getElementById("all");
        let text = document.getElementById("new1");
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    const check1 = () => {
        let checkBox = document.getElementById("no");
        let text = document.getElementById("new2");
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    const check2 = () => {
        let checkBox = document.getElementById("yes");
        let text = document.getElementById("new3");
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    return (
        <div>
            <h1>Checkbox</h1>
        <input type="checkbox" id="all" onClick={check}></input>
        <label>All</label>
        <input type="checkbox" id="no" onClick={check1}></input>
        <label>No</label>
        <input type="checkbox" id="yes" onClick={check2}></input>
        <label>Yes</label>
        <p id="new1" style={{display:'none'}}>you have selected All having id 0 whose age is 22 years</p>
        <p id="new2" style={{display:'none'}}>you have selected No having id 1 whose age is 25 years</p>
        <p id="new3" style={{display:'none'}}>you have selected Yes having id 2 whose age is 28 years</p>
        </div>
    );
}