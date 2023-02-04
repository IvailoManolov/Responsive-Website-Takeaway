import React from 'react'
import StoreBox from './StoreBox'
import dominosImage from "../../Images/dominoslogo.png"
import pizzaHutImage from "../../Images/pizzaHut.png"
import papaJohnsImage from "../../Images/papaJohn (1).png"
import "./Store.css"

const Store = () => {
  return (
    <div id='features'>
        <div className="a-container">
            <StoreBox image={dominosImage} title = 'Dominos Pizzas'/>
            <StoreBox image={papaJohnsImage} title = "Papa John's Pizzas"/>
            <StoreBox image={pizzaHutImage} title= 'Pizza Hut'/>
        </div>
    </div>
  )
}

export default Store