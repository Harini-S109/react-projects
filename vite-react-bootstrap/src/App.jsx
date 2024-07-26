import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Cards from './components/card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <h1 className='py-2 pt-3'>App using Vite with Bootstrap</h1>
        <Cards title="Beautiful view" />
      </center>
    </>
  )
}

export default App
