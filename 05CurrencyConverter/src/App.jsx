import { useState } from 'react'
import InputBox from "./inputBox"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="con w-100">
        <div className='pt-5'>
         <InputBox />
        </div>
      </div>
    </>
  )
}

export default App
