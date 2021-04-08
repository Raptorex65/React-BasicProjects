import React, {useState} from 'react';
import { ListGroup } from 'react-bootstrap'

const SummerFishes = (props) => {

    const [currentSummer, setCurrentSummer] = useState(props.filterSummer[0]);
  
    return (
 <div>
        <h4>Summer Types</h4>
      <button onClick={()=> setCurrentSummer(props.filterSummer[1])}>Next Fish</button>
      <button onClick={()=> setCurrentSummer(props.filterSummer[2])}>Next Fish</button>
      <button onClick={()=> setCurrentSummer(props.filterSummer[3])}>Next Fish</button>

 <ListGroup>
         <ListGroup.Item>{currentSummer.fishType}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.price}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.durationInDays}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.itemWeightInGrams}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.originCountry}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.season}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.stockVolumeInKg}</ListGroup.Item>
         <ListGroup.Item>{currentSummer.saleLocations}</ListGroup.Item>
     </ListGroup>
 
 </div>
     )
}

export default SummerFishes;