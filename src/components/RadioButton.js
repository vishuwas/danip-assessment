import React from "react";

export default function RadioButton () {
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
            <h1>RadioButton</h1>
        <input type="radio" id="all" name="rad" onClick={check} />
        <label>All</label>
        <input type="radio" id="no" name="rad" onClick={check1} />
        <label>No</label>
        <input type="radio" id="yes" name="rad" onClick={check2} />
        <label>Yes</label>
        <p id="new1" style={{display:'none'}}>you have selected All having id 0 whose age is 22 years</p>
        <p id="new2" style={{display:'none'}}>you have selected No having id 1 whose age is 25 years</p>
        <p id="new3" style={{display:'none'}}>you have selected Yes having id 2 whose age is 28 years</p>
        </div>
    );
}