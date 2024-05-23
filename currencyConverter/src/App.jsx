import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [count, setCount] = useState(0)

  // Custom Hooks 


  return (
    <>
     <h1 className='text-3xl'>Currency COnverter</h1>
     <button onClick={useCurrencyInfo('usd')}>jcnjkcnjx</button>
    </>
  )
}

export default App
