import { useState, useCallback , useEffect} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")


  // prbelm ;; password generator is called multiple times whenever conditions are chnaged -- like lkength -- numbers allowed -- chars allowed etc --- bt the method to be called is same 
  // HOOK useCallback ---- store the func in memory & use it whenever needed  
  const passwordGenerator = useCallback(/**Function */
    () => {
      let pass = '';
      // all the possible aphabets taht an be used to generate teh password 
      let str = '';

      // Concatenate uppercase letters
      for (let i = 65; i <= 90; i++) {
        str += String.fromCharCode(i);
      }

      // Concatenate lowercase letters
      for (let i = 97; i <= 122; i++) {
        str += String.fromCharCode(i);
      }

      // console.log(str);

      if (isNumberAllowed) {
        str += "0123456789";
      }

      if (isCharAllowed) {
        str += "!@#$%Z^&*()~{}[]=-_"
      }

      // Generate random password form thsi possible values of the password
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }

      setPassword(pass);
    }

    , [length, isNumberAllowed, isCharAllowed, setPassword]/**dependencies -- teh basis on which ans will change */)


    // use effect -- any chage in teh depndencies -- re run the function ---- 
    useEffect(() => {
      passwordGenerator()
    } , [length , isNumberAllowed , isCharAllowed , passwordGenerator])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-700'>

        <h1 className='text-2xl text-center text-white my-2'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className='flex text-sm gap-x-2'><div className='flex items-center gapx-1'>

          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label> Length : {length}</label>

        </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" defaultChecked={isNumberAllowed} id="numberInput" onChange={(e) => {
              setNumberAllowed((prev) => !prev);
            }} />

            <label htmlFor="numberInput">Numbers</label>

          </div>

          <div className='flex items-center gap-x-1'>

            <input type="checkbox" defaultChecked={isCharAllowed} id="charInput" onChange={(e) => {
              setCharAllowed((prev) => !prev);
            }} />

            <label htmlFor="charInput">Characters</label>

          </div>

        </div>

      </div>
    </>
  )
}

export default App
