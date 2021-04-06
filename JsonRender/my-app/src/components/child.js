import {Card, ListGroup} from 'react-bootstrap'
function CreateChild (props){
    return (

<Card style={{ width: '10rem' }}>
  <Card.Img variant="top" src={props.child[0].avatar} />
  <Card.Body>
    <Card.Title></Card.Title>
    <ListGroup variant="flush">
    <ListGroup.Item style={{color:"red"}}>{props.child[0].gender}</ListGroup.Item>
    <ListGroup.Item>{props.child[0].firstName}</ListGroup.Item>
    <ListGroup.Item>{props.child[0].lastName}</ListGroup.Item>
    <ListGroup.Item>{props.child[0].avatar}</ListGroup.Item>
    <ListGroup.Item>{props.child[0].birthday}</ListGroup.Item>
  </ListGroup>
  </Card.Body>
</Card>


    )
}

export default CreateChild;