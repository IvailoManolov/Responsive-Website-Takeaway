import React from 'react'
import "./TrackOrders.css"

const TrackOrders = (props) => {
  return (
    <div className="track-about">
      <div className="track-image">
            <img src = {props.image} alt = ""/>
        </div>
      <div className="track-text">
            <h2>Tracking Your Orders</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto libero consectetur eligendi placeat, perspiciatis odio quaerat. Magni, dolorum, commodi placeat ipsum, fuga animi amet voluptates incidunt reiciendis sint nostrum!</p>
        </div>
    </div>
  )
}

export default TrackOrders