import { useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, changeLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setChar] = useState(false)
 
  const generatePass = useCallback(() => {
    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
    if(numbers) str += "1234567890"
    if(characters) str += "!@#$%^&*()_+"

    for(let i = 1; i < length; i++){
      const random = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(random)
    }

    setPassword(pass)

  }, [length, numbers, characters])

  useEffect(() => {
    generatePass()
  }, [length, numbers, characters])

  return (
    <>
      <div className="con w-100 ">

        {/* whole container  */}
        <div className='mx-auto py-3 pass-con'>
          <h4 className='pt-5 pb-3 text-light text-center'>Password Generator</h4>

            {/* password box */}
            <div className="pass-box d-flex ">
              <input type="text" 
              placeholder='Password'
               className='bg-white p-1 border-0 w-100 ps-3 rounded-start-3' 
               value={password} 
               />
              <button 
              className=' p-1 px-4 border-0 bg-primary text-light fw-bold rounded-end-3'>Copy
              </button>
            </div>

            {/* options */}
            <div className="opt d-flex gap-3 mt-2 align-items-center">
              {/* length range */}
              <div className='d-flex align-items-center'>
                <input 
                type="range"
                value={length}
                min={6}
                max={50}
                className='bg-info mt-1 ms-lg-3' 
                onChange={(e) => {changeLength(e.target.value)}}
                />
                <label 
                htmlFor="length"
                className='text-warning ms-1'>
                Length: {length}
                </label>
              </div>

              {/* checkboxes */}
              {/* numbers */}
              <div className='d-flex align-items-center'>
                <input 
                type="checkbox"
                defaultChecked={numbers}
                onChange={() => {
                    setNumbers((prev) => !prev)
                  }
                }
                className='mt-1'
                name="" 
                id="" />
                <label 
                htmlFor="Numbers"
                className='text-warning ps-1'>
                Numbers
                </label>
              </div>

              {/* characters */}
              <div className='d-flex align-items-center'>
                <input 
                type="checkbox"
                defaultChecked={characters}
                onChange={() => {
                    setChar((prev) => !prev)
                  }
                }
                className='mt-1'
                name="" 
                id="" />
                <label 
                htmlFor="Characters"
                className='text-warning ps-1'>
                Characters
                </label>
              </div>

            </div>

        </div>
      </div>
    </>
  )
}

export default App
