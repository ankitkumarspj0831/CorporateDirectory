import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

class AddEmployee extends Component {
  state = {
    name: "",
    email: "",
    department: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
      })
      .catch((err) => console.log("Sending word to backend failed."));
  };
  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.handleSubmit} method="POST">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={this.handleChange}
                name="name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={this.handleChange}
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sales/Accounts/Tech"
                onChange={this.handleChange}
                name="department"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default AddEmployee;
