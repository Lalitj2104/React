import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Display from './components/display'
import Buttonss from './components/button'
function App() {

  const [calval,setval]=useState("");
  const onButtonClick=(buttonText)=>{
    // console.log(buttonText);
    if(buttonText==='C'){
      setval('')
    }else if(buttonText==='='){
      const result=eval(calval);
      setval(result);
    }else{
      const newdisplay=calval+buttonText;
     
      setval(newdisplay);
    }
  }

  return (
  <div className={styles.calculator}>
  <Display val={calval}/>
  <Buttonss 
    onButtonClick={onButtonClick}
  /> 
    </div>
  );
}

export default App
