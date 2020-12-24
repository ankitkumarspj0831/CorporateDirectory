import { Navbar, Nav } from "react-bootstrap";

const Navigation = (props) => {
  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "#4fa5c9" }}>
        <Navbar.Brand href="/feed">Corporate Directory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/feed">Home</Nav.Link>
            <Nav.Link href="/add">Add Employee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
