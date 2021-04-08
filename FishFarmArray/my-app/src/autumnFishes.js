import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap'

const AutumnFishes = (props) => {

    const [currentAutumn, setCurrentAutumn] = useState(props.filterAutumn[0]);
    const alertHandler = ()=>{
        alert("NOT ANOTHER FISH !!")
        setCurrentAutumn([])
    }

    return (
        <div className="autumn-container">
        <h4>Autumn Types</h4>
      <button onClick={()=> setCurrentAutumn(alertHandler)}>Next Fish</button>
      <button onClick={()=> setCurrentAutumn(alertHandler)}>Next Fish</button>
      <button onClick={()=> setCurrentAutumn(alertHandler)}>Next Fish</button>

    <ListGroup>
        <ListGroup.Item>{currentAutumn.fishType}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.price}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.durationInDays}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.itemWeightInGrams}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.originCountry}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.season}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.stockVolumeInKg}</ListGroup.Item>
        <ListGroup.Item>{currentAutumn.saleLocations}</ListGroup.Item>
    </ListGroup>
        </div>
    )
}

export default AutumnFishes;