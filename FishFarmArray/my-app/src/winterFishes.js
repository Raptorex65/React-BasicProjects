import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap'

const WinterFishes = (props) => {

    const [currentWinter, setCurrentWinter] = useState(props.filterWinter[0])
  
   return (
<div>
    <h4>Winter Types</h4>
      <button onClick={()=> setCurrentWinter(props.filterWinter[1])}>Next Fish</button>
      <button onClick={()=> setCurrentWinter(props.filterWinter[2])}>Next Fish</button>
      <button onClick={()=> setCurrentWinter(props.filterWinter[3])}>Next Fish</button>

<ListGroup>
        <ListGroup.Item>{currentWinter.fishType}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.price}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.durationInDays}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.itemWeightInGrams}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.originCountry}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.season}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.stockVolumeInKg}</ListGroup.Item>
        <ListGroup.Item>{currentWinter.saleLocations}</ListGroup.Item>
    </ListGroup>

</div>
    )
}

export default WinterFishes;