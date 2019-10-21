import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "../Styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="navbar">
          <Col>
            <img
              className="logo"
              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/d/d4/Hearthstone_logo.png/675px-Hearthstone_logo.png?version=2a47f70dd8f723de897c4829a3a420b0"
            ></img>
          </Col>
          <Col className="login"><Button variant="dark">Log In</Button></Col>
        </Row>
        </React.Fragment>
    );
  }
}

export default Header;
