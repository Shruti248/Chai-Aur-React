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

  let [/** value */ counter, setCounter /** Function */] = useState(/**Default value */ 0);
  // setCounter controls teh variable counter ---- 
  // then when react knows taht the counter is update d-- it automatically updates the \varibale wherever it is used ----- all teh places automaticallyyyyy 


  const addValue = () => {
    console.log("Add value Clicked...")

    if (counter == 20) {
      setErrMsg('Counter should not exceed 20');
    } else {
      // counter= counter+1;
      setCounter(++counter)
      setErrMsg('');
    }


  }
  const removeValue = () => {
    console.log("Remove value Clicked...")

    if (counter == 0) {
      setErrMsg('Counter cannot be decreased further...');
    } else {

      // counter= counter-1;
      setCounter(--counter);
      // Clear the error message if within the valid range 
      setErrMsg('');
    }

  }

  // Now teh UI & Satte are synced --- whenever state changes -- ui automatically updates

  // This is how teh cahges are propagated in the REACt APP

  // Task -- value shoudl be between  0 to 20 only 

  let [errMsg, setErrMsg] = useState('');

  // --------- Thsi methods are for RENDERING BASED ON CONDITIONS ONLY ---- 
  
  // Method 2: Helper Function for Conditional Rendering
  let renderErrMsg = () => {
    if (errMsg != '') {
      return <p>{errMsg}</p>
    } else {
      return <p></p>
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2>


      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <div>

      {/* {errMsg && <p>{errMsg}</p>} -----  conditionally rendering components based on a boolean value.  */}
      {/* id errMsg is true -- it evalutes teh right hand side expression  */}
      {/* if errMsg is false --- it retuns & does not evalute the right hand side expression  */}


      {/* // Method 1: Inline Conditional Rendering with Ternary Operator  */}
      {errMsg && <p>{errMsg}</p>}
        {/* {renderErrMsg()} */}
      </div>
    </>
  )
}

export default App
