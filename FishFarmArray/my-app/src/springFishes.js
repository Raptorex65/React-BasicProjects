import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap'

const SpringFishes = (props) => {

    const [currentSpring, setCurrentSpring] = useState(props.filterSpring[0]);
    const alertHandler = ()=>{
        alert("NOT ANOTHER FISH !!")
        setCurrentSpring([])
    }
    return (
<div className="spring-container">
        <h4>Spring Types</h4>
      <button onClick={()=> setCurrentSpring(alertHandler)}>Next Fish</button>
      <button onClick={()=> setCurrentSpring(alertHandler)}>Next Fish</button>
      <button onClick={()=> setCurrentSpring(alertHandler)}>Next Fish</button>

    <ListGroup>
        <ListGroup.Item>{currentSpring.fishType}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.price}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.durationInDays}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.itemWeightInGrams}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.originCountry}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.season}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.stockVolumeInKg}</ListGroup.Item>
        <ListGroup.Item>{currentSpring.saleLocations}</ListGroup.Item>
    </ListGroup>
        </div>
    )
}

export default SpringFishes;