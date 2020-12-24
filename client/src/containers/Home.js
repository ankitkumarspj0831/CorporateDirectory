import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Employee from "../components/Employee";

class Home extends Component {
  state = {
    dataFetched: [],
  };
  componentDidMount() {
    fetch("http://localhost:8080/feed")
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        this.setState({ dataFetched: result.data });
        console.log("Fetched successfully.");
        console.log(result);
      })
      .catch((err) => {
        console.log("Fetching Failed.");
      });
  }
  render() {
    return (
      <Container>
        <p></p>
        {this.state.dataFetched.map((val, key) => {
          return (
            <div key={key}>
              <Employee
                name={val.name}
                email={val.email}
                department={val.department}
              />
            </div>
          );
        })}
      </Container>
    );
  }
}

export default Home;
