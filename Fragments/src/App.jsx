import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/heading'
import Error from './components/error'
import Fooditems from './components/FoodItem.jsx'
import Container from './components/container.jsx'
import Search from './components/search.jsx'

function App() {

  //another way of during the ul is mapping
  // let foodItems=[];
  let foodItems=['Salad','Sprouts','Fruits','Green beans','Milk','green']
  
  return <>
  <Container>
      <Heading/>
      <Search/>
      <Error items={foodItems}></Error>
      <Fooditems items={foodItems}></Fooditems>   
    </Container>
    <Container>
      <p>The above list is the list of healthy food</p>
    </Container>
    </>
}


export default App;
