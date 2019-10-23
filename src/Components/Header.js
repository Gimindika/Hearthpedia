import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import "../Styles/Header.css";

import { connect } from "react-redux";

import { DebounceInput } from "react-debounce-input";

class Header extends React.Component {
  state = {
    search: ""
  };

  // inputHandler = (name, value) => {
  //   this.setState(() => ({ [name]: value }));
  // };

  nameHandler = name => {
    if (!this.props.isLoading) {
      this.props.setFilter("name", name);
    }
  };

  healthHandler = health => {
    if (!this.props.isLoading) {
      this.props.setFilter("health", health);
    }
  };

  attackHandler = attack => {
    if (!this.props.isLoading) {
      this.props.setFilter("attack", attack);
    }
  };

  rarityHandler = rarity => {
    if (!this.props.isLoading) {
      this.props.setFilter("rarity", rarity);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Row className="navbar">
          <Col>
            <img
              className="logo"
              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/d/d4/Hearthstone_logo.png/675px-Hearthstone_logo.png?version=2a47f70dd8f723de897c4829a3a420b0"
              alt="logo"
            ></img>
          </Col>

          <Col></Col>

          <Col>
            <div className="filter-container">
              <img
                className="filter-icon"
                src={require("../images/attack.png")}
                alt="attack"
              />
              <p className="minmax-separator"> : </p>

              <input
                className="minmax-input"
                onChange={event => this.attackHandler(event.target.value)}
              />
            </div>
          </Col>

          <Col>
            <div className="filter-container">
              <img
                className="filter-icon"
                src={require("../images/health.png")}
                alt="health"
              />
              <p className="minmax-separator"> : </p>

              <input
                className="minmax-input"
                onChange={event => this.healthHandler(event.target.value)}
              />
            </div>
          </Col>

          {/* <Col>
            <div className="filter-container">
              <img
                className="filter-icon"
                src={require("../images/mana.png")}
                alt="mana"
              />
              <input className="minmax-input" />
              <p className="minmax-separator"> ~ </p>
              <input className="minmax-input" />
            </div>
          </Col> */}

          <Col className="col-lg-3 ml-auto">
            <DebounceInput
              name="search"
              className="search-bar"
              placeholder="Find card"
              minLength={3}
              onChange={event => this.nameHandler(event.target.value)}
            ></DebounceInput>
          </Col>

          <Col>
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                id="dropdown-basic"
                className="dropdown-buttons"
              >
                Rarity
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  className="dropdown-innerbuttons"
                  style={{ color: "grey" }}
                  onClick={() => this.rarityHandler("Basic")}
                >
                  Basic
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-innerbuttons"
                  style={{ color: "black" }}
                  onClick={() => this.rarityHandler("Common")}
                >
                  Common
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-innerbuttons"
                  style={{ color: "blue" }}
                  onClick={() => this.rarityHandler("Rare")}
                >
                  Rare
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-innerbuttons"
                  style={{ color: "magenta" }}
                  onClick={() => this.rarityHandler("Epic")}
                >
                  Epic
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-innerbuttons"
                  style={{ color: "orange" }}
                  onClick={() => this.rarityHandler("Legendary")}
                >
                  Legendary
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col></Col>

          <Col className="col-lg-1 login">
            {/* <button className="login-button">LogIn</button> */}
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  };
}

export default connect(mapStateToProps)(Header);
