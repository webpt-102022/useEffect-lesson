import React, { useEffect, useState } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [color, setColor] = useState('black');

  useEffect(() => {
    // What happens after first render
    console.log('Component did mount')
    const intervalID = setInterval(() => {
      console.log('Contando segundicos')
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => {
      // Happens when the component unmounts
      console.log('Component did unmount')
      clearInterval(intervalID);
    }

  }, [])

  useEffect(() => {
    // What happens every time "seconds" updates
    console.log('Component did update')
    if (seconds >= 15) {
      setColor('red')
    } else if (seconds >= 10) {
      setColor('orange')
    } else if (seconds >= 5) {
      setColor('green')
    }
  }, [seconds])

  return (
    <div>
      {console.log('Render')}
      <div className={color}>Timer: {seconds}</div>
    </div>
  )
}
