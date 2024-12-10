import styles from './App.module.css';
import Buttons from './components/Buttons';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonText) => {
    if(calVal === '' && buttonText === '='){
      setCalVal("");
    }
    if(buttonText === 'C'){
      setCalVal("")
    }
    else if(buttonText === '='){
      const res = eval(calVal);
      setCalVal(res);
    }
    else{
      const newValue = calVal + buttonText;
      setCalVal(newValue);
    }
  }

  return <div className={styles['container']}>
    <Display displayValue={calVal}></Display>
    <Buttons onButtonClick={handleButtonClick}></Buttons>
  </div>
}

export default App
