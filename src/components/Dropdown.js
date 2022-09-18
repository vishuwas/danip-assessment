import React from "react";

export default function Dropdown ({ obj }) {
    
    const check = (e) => {
        if (e.target.value === "all") {
            let text = document.getElementById("0");
            let text1 = document.getElementById("1");
            let text2 = document.getElementById("2");
            text.style.display = "block";
            text1.style.display = "none";
            text2.style.display = "none";
        } else if (e.target.value === "no") {
            let text = document.getElementById("1");
            let text1 = document.getElementById("0");
            let text2 = document.getElementById("2");
            text.style.display = "block";
            text1.style.display = "none";
            text2.style.display = "none";
        }
        else if (e.target.value === "yes") {
            let text = document.getElementById("2");
            let text1 = document.getElementById("0");
            let text2 = document.getElementById("1");
            text.style.display = "block";
            text1.style.display = "none";
            text2.style.display = "none";
        }
        else {
            let text = document.getElementById("2");
            let text1 = document.getElementById("0");
            let text2 = document.getElementById("1");
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
            {obj.map((item) => {
               return <p id={item.id} key={item.id} style={{display:'none'}}>you have selected {item.name} having id {item.id} whose age is {item.age} years</p>
            })}
        </div>
    )   
}