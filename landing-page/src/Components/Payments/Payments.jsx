import React from 'react'

const Payments = (props) => {
  return (
    <div className="about">
        <div className="about-image">
            <img src = {props.image} alt = ""/>
        </div>

        <div className="about-text">
            <h2>{props.title}</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto libero consectetur eligendi placeat, perspiciatis odio quaerat. Magni, dolorum, commodi placeat ipsum, fuga animi amet voluptates incidunt reiciendis sint nostrum!</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default Payments