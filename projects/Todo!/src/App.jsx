import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appname from './components/Appname'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import './App.css';
function App() {
  return <>
    <center className='todo-container'>
    <Appname/>
    <AddTodo/>
  <div className="item-container">
    <TodoItem date="12/04/2023" name="Buy Milk"></TodoItem>
    <TodoItem date="12/04/2023" name="Buy fruits"></TodoItem>
    
  </div>
    
    </center>
    
    </>
  
}

export default App
