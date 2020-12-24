import React from "react";
import { Card } from "react-bootstrap";

const Employee = (props) => {
  return (
    <Card bg="secondary" text="white" style={{marginBottom: "5px"}}>
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            <b>Email: </b>
            {props.email}
          </p>
          <p>
            <b>Department: </b>
            {props.department}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Employee;
