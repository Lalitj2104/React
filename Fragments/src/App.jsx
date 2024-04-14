import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/heading'
import Error from './components/error'
import Fooditems from './FoodItem'


function App() {

  //another way of during the ul is mapping
  // let foodItems=[];
  let foodItems=['Salad','Sprouts','Fruits','Green beans','Milk','green']
  
  return <>
      <Heading/>
      <Error items={foodItems}></Error>
      <Fooditems items={foodItems}></Fooditems>
      
        
    </>
}


export default App;
