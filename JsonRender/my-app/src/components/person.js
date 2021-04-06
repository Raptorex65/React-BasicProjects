import React from 'react';
import {Table} from 'react-bootstrap'

function Person(props){
//Persondetailsden props ile jsondan sadece persona ait kisisel bilgileri aliyoruz
    return (
        <div>
<Table striped bordered hover>
    
  <thead>
    <tr>
      <th>Person ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>EMAIL</th>
      <th>GENDER</th>
      <th>ADDRESS</th>
      <th>SALARY</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.person.id}</td>
      <td>{props.person.first_name}</td>
      <td>{props.person.last_name}</td>
      <td>{props.person.email}</td>
      <td>{props.person.gender}</td>
      <td>{props.person.address}</td>
      <td>{props.person.salary}</td>
    </tr>
  </tbody>
</Table>
    </div>
    )
}

export default Person;