import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Appname from './components/Appname'
import AddTodo from './components/AddTodo'
import Todoitems from './components/TodoItems'
import './App.css';


function App() {

  const todoItems =[
    {
      name: "buy milk",
      date:"22/04/2024",
    },
    {
      name:"go to college",
      date:"22/04/2024"
    },
    {
      name:"like",
      date:"right now",
    },
  ];
  
  return <>
    <center className='todo-container'>
    <Appname/>
    <AddTodo/>
    <Todoitems todoitems={todoItems}/>
  
    
    </center>
    
    </>
  
}

export default App
