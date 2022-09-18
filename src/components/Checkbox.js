import React from "react";

export default function Checkbox ({obj1}) {

    const check = () => {
        let checkBox = document.getElementById('all');
        let text = document.getElementById("0");
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    const check1 = () => {
        let checkBox = document.getElementById('no');
        let text = document.getElementById("1");
        if (checkBox.checked === true){
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
    const check2 = () => {
        let checkBox = document.getElementById('yes');
        let text = document.getElementById("2");
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
        {obj1.map((item) => {
               return <p id={item.id} key={item.id} style={{display:'none'}}>you have selected {item.name} having id {item.id} whose age is {item.age} years</p>
            })}
        </div>
    );
}