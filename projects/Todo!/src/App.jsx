import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appname from './components/Appname'
import AddTodo from './components/AddTodo'
import Item1 from './components/TodoItem1'
import Item2 from './components/Todoitem2'
import './App.css';
function App() {
  return <>
    <center className='todo-container'>
    <Appname/>
    <AddTodo/>
  <div className="item-container">
    <Item1/>
    <Item2/>
  </div>
    
    </center>
    
    </>
  
}

export default App
