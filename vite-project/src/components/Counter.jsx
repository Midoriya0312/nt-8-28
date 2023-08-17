import React, { useState } from 'react'
import Props from './Props';

export default function Counter({count, color, brand, model, year}) {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red");
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");

    const increase = () => {
        setCount(count => count + 1)
    } 
  return (
    <div>
        {/* <button onClick={(increase)}>inc</button>
        <span>{count}</span>
        <h1>My favorite color is {color}!</h1>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p> */}
        <div>
          <Props />
        </div>
    </div>
  )
}
