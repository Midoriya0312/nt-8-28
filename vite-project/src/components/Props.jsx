import React from 'react'

export default function Props({count, color, brand, model, year}) {
  return (
    <div>
        <button onClick={(increase)}>inc</button>
        <span>{count}</span>
        <h1>My favorite color is {color}!</h1>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
        <div></div>
    </div>
  )
}
