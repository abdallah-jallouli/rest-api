import React from 'react'
import  {Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const UserCard = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.fullname}</Card.Title>
        <Card.Text>
          {user.email}
        </Card.Text>
        <Card.Text>
          {user.phone}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default UserCard