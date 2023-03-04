import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black')

  const handleIncrease = () => {
    setCount(prev => prev + 1)
    if (count >= 15) {
      setColor('red')
    } else if (count >= 10) {
      setColor('orange')
    } else if (count >= 5) {
      setColor('green')
      console.log(color)
    }
  }

  const handleDecrease = () => {
    setCount(prev => prev - 1)
    if (count >= 15) {
      setColor('red')
    } else if (count >= 10) {
      setColor('orange')
    } else if (count >= 5) {
      setColor('green')
    }
  }

  return (
    <div>
      {console.log('Render')}
      <div className={color}>Counter: {count}</div>
      <button onClick={handleIncrease}>+ Add</button>
      <button onClick={handleDecrease}>- Substract</button>
    </div>
  )
}
