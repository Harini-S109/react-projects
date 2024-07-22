import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const incrementVal = () =>{
    setCount(count + 1)
  }

  const decrementVal = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>React counter app</h1>
      <h3>Counter value: {count}</h3>
      <button onClick={decrementVal}>decrement</button>{" "}
      <button onClick={incrementVal}>increment</button>
      <footer>footer:{count}</footer>
    </>
  )
}

export default App
