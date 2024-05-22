import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 5;

  const addValue = () => {
    counter++;

    // Value is updated lik thsi -- bt UI is not updated --- 
    // thsi variable may have been present at mulitple positions --- so all needs to be same 
    // React actually controls the UI Updation 
    // React uses hooks for updating teh UI 
    console.log("Value Added...." , counter);

  }

  return (
    <>
        <h1>Counter App</h1>
        <h2>Counter : {counter}</h2>


        <button onClick={addValue}>Add Value</button>
        <br />
        <button>Remove Value</button>
    </>
  )
}

export default App
