import React from "react";

export default function RadioButton ({obj2}) {
    
    const check = () => {
        let text = document.getElementById("0")
        let text1 = document.getElementById("1")
        let text2 = document.getElementById("2")
        text.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
    }
    const check1 = () => {
        let text = document.getElementById("1")
        let text1 = document.getElementById("0")
        let text2 = document.getElementById("2");
        text.style.display = "block";
        text1.style.display = "none";
        text2.style.display = "none";
    }
    const check2 = () => {
            let text = document.getElementById("2");
            let text1 = document.getElementById("0");
            let text2 = document.getElementById("1");
            text.style.display = "block";
            text1.style.display = "none";
            text2.style.display = "none";
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
        {obj2.map((item) => {
            return <p id={item.id} key={item.id} style={{display:'none'}}>you have selected {item.name} having id {item.id} whose age is {item.age} years</p>
        })}
        
        </div>
    );
}