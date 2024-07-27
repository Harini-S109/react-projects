import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [color, setColor] = useState('maroon')

  return (
    <>
      <div className='con' style={{backgroundColor: color }}>  
        <div className='fixed-bottom d-flex flex-wrap justify-content-center px-2 '>
          <div className='d-flex flex-wrap justify-content-center px-3 py-2 gap-3 shadow my-5 rounded-5 bg-white'>
            <button className='border-0 shadow p-3 rounded-circle' onClick={() => setColor('maroon')} style={{backgroundColor:'maroon'}}></button>
            <button className='border-0 shadow p-3 rounded-circle' onClick={() => setColor('teal')} style={{backgroundColor:'teal'}}></button>
            <button className='border-0 shadow p-3 rounded-circle' onClick={() => setColor('orange')} style={{backgroundColor:'orange'}}></button>
            <button className='border-0 shadow p-3 rounded-circle' onClick={() => setColor('lavender')} style={{backgroundColor:'lavender'}}></button>
            <button className='border-0 shadow p-3 rounded-circle' onClick={() => setColor('olive')} style={{backgroundColor:'olive'}}></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
