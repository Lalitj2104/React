import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appname from './components/Appname'
import AddTodo from './components/AddTodo'
import Item1 from './components/TodoItem1'
import Item2 from './components/Todoitem2'


function App() {
  return <>
    <center class='todo-container'>
    <Appname/>
    <AddTodo/>
    <br></br>
    <Item1/>
   <br></br>
    <Item2/>
    </center>
    
    </>
  
}

export default App
