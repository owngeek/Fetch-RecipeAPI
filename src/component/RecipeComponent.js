import React from "react"
import {Card,Button} from "react-bootstrap"

const Recipe = (props) =>{
    return(
    
    <div>



      <Card>
  <Card.Img variant="top" src={props.image} style={{height:600}}/>
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
   {props.description}
    </Card.Text>
    
  </Card.Body>
</Card>









     </div> 


    )
}
export default Recipe
