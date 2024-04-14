import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './components/heading.jsx'
import Intro from './components/intro.jsx'
import Time from './components/clock.jsx'


function App() {

  return  <center>

      <Heading/>
      <Intro/>
      <Time/>
    </center>
  
}

export default App
