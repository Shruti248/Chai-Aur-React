import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 5;

  // const addValue = () => {
  //   counter++;

  //   // Value is updated lik thsi -- bt UI is not updated --- 
  //   // thsi variable may have been present at mulitple positions --- so all needs to be same 
  //   // React actually controls the UI Updation 
  //   // React uses hooks for updating teh UI 

  //   console.log("Value Added...." , counter);

  // }



   // Eeach hooks -- perfoms specific task only 

  //  useState  --- resposnible for chnaging teh state of teh applicatin --- thsi state is propogated in the UI -- in the DOM -- so changes rae visible accoridng to teh cgange in the state 

  let [/** value */ counter , setCounter /** Function */] = useState(/**Default value */ 0);
  // setCounter controls teh variable counter ---- 
  // then when react knows taht the counter is update d-- it automatically updates the \varibale wherever it is used ----- all teh places automaticallyyyyy 


  const addValue = () => {
    console.log("Add value Clicked...")
    // counter= counter+1;
    setCounter(++counter);
  }
  const removeValue = () => {
    console.log("Remove value Clicked...")
    // counter= counter-1;
    setCounter(--counter);
  }

  // Now teh UI & Satte are synced --- whenever state changes -- ui automatically updates

  // This is how teh cahges are propagated in the REACt APP

  return (
    <>
        <h1>Counter App</h1>
        <h2>Counter : {counter}</h2>


        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
