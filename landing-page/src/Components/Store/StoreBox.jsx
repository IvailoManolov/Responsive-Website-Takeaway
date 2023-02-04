import React from 'react'
import "./Store.css"

const StoreBox = (props) => {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt=""/>
        </div>

        <div className="s-b-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe minus atque doloremque ipsam in? Inventore alias impedit provident voluptates libero maxime, itaque ab cumque quas repellendus laboriosam! Ex, est incidunt.</p>
        </div>
    </div>
  )
}

export default StoreBox