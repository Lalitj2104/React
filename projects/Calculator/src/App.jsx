import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"
import Display from './components/display'
import Buttonss from './components/button'
function App() {

  return (
  <div className={styles.calculator}>
  <Display/>
  <Buttonss/> 
    </div>
  );
}

export default App
