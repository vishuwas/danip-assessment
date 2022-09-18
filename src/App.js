import React, { useState } from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Checkbox from './components/Checkbox';
import RadioButton from './components/RadioButton';

export default function App () {
  const [show, setShow] = useState(false);
  const [type, setType] = useState('');
  const [obj, setObj] = useState([{
    id: 0,
    name: 'All',
    age: 22
  },
  {
    id: 1,
    name: 'No',
    age: 25
  },
  {
    id: 2,
    name: 'Yes',
    age: 28
  }])

  const handleClick = (type) => {
    if (type === 'radio') {
      setType('radio')
    } else if (type === 'checkbox') {
      setType('checkbox')
    } else if (type === 'dropdown') {
      setType('dropdown')
    }
    setShow(!show)
  }

    return (
      <div className="App">
        <button onClick={() => handleClick('dropdown')}>Dropdown</button>
        <button onClick={() => handleClick('checkbox')}>Checkbox</button>
        <button onClick={() => handleClick('radio')}>RadioButton</button>
        {show && type === 'dropdown' && <Dropdown obj={obj} />}
        {show && type ===  'checkbox' && <Checkbox obj1={obj} />}
        {show && type === 'radio' && <RadioButton obj2={obj} />}
      </div>
    );
}