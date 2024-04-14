import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  //anoother way of during the ul is mapping
  // let foodItems=[]
  let foodItems=['Salad','Sprouts','Fruits','Green beans','Milk','green']
  let condition=foodItems.length===0 ?<h3>Nothing there</h3> :null;
  return <>
      <h1 className="fw-bolder">
        Healthy Food
      </h1>
      {condition}
      <ul className="list-group">
        {
            foodItems.map((item)=>(
              <li class="list-group-item">{item}</li>
            ))
        }
        
      </ul>
        
    </>
}


export default App;
