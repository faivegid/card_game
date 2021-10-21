import React from "react"

function Card(props){
     return(
          <div className="card">
            <p>My {props.name} Score: {props.score}</p>
            <div className="img-card card2">
              <img src={props.img} alt={props.name + "card"} />
            </div>
          </div>
     )
}
export default Card