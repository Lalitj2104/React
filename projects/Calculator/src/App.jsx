import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from "./App.module.css"

function App() {

  return (
  <div className={styles.calculator}>
     <input className={styles.display}id="display" type="text"></input>
    <div id="button-container" className={styles.buttonContainer}>
      <button className={styles.button}>C</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>+</button>
    </div>
    </div>
  );
}

export default App
