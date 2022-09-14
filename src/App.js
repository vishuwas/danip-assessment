import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';

export default function App () {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [showRadioButton, setShowRadioButton] = useState(false);

  const handleDropdownClick = () => {
    if (showDropdown === true) {
      setShowDropdown(false)
    }
    else {
      setShowDropdown(true)
    }
  }
  const handleCheckboxClick = () => {
    if (showCheckbox === true) {
      setShowCheckbox(false)
    }
    else {
      setShowCheckbox(true)
    }
  }
  const handleRadioButtonClick = () => {
    if (showRadioButton === true) {
      setShowRadioButton(false)
    }
    else {
      setShowRadioButton(true)
    }
  }
    return (
      <div className="App">
        <button onClick={handleDropdownClick}>Dropdown</button>
        <button onClick={handleCheckboxClick}>Checkbox</button>
        <button onClick={handleRadioButtonClick}>RadioButton</button>
        {showDropdown && <Dropdown />}
        {showCheckbox && <Checkbox />}
        {showRadioButton && <RadioButton />}
      </div>
    );
}