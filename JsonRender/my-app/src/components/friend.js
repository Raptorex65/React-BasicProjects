import {Card, ListGroup} from 'react-bootstrap'
function CreateFriend (props){
    return (

<Card style={{ width: '10rem'}}>
  <Card.Img variant="top" src={props.friend[0].avatar} />
  <Card.Body>
    <Card.Title></Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item >{props.friend[0].firstName}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].lastName}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].phone}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].address}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].city}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].birthday}</ListGroup.Item>
    <ListGroup.Item>{props.friend[0].avatar}</ListGroup.Item>

  </ListGroup>
  </Card.Body>
</Card>
        
    )
}

export default CreateFriend;