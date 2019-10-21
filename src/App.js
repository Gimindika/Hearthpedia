import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import "./App.css";

import { connect } from "react-redux";
import { getAllCards } from "./public/redux/actions/cards";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";



class App extends React.Component {
  componentDidMount = async () => {
    await this.props.dispatch(getAllCards());
  };

  render() {
    if (this.props.isLoading) {
      return (
        <React.Fragment>
          <Header />
          <Row style={{ margin: 0, padding: 0 }}>
            <Sidebar />
            <Col xs={10} className="main-container-loading">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                <Spinner animation="border" variant="dark" />
                <p style={{ fontSize: 30, fontWeight: 600, margin: 20 }}>
                  Unpacking crates...
                </p>
              </div>
            </Col>
          </Row>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Header />
          <Row style={{ margin: 0, padding: 0 }}>
            <Sidebar />
            {this.props.cards.length ? 
            <Col xs={10} className="main-container">
              <div className="middle-container">
                <div className="card-container m-auto">
                  {this.props.cards.map((card, index) => (
                    <React.Fragment key={card.cardId}>
                      {card.img !== undefined && card.img !== null ? (
                        <div>
                          <img
                            className="card-image"
                            src={card.img}
                          />
                        </div>
                      ) : null}
                    </React.Fragment>
                  ))}
                </div>
              </div>
          
            </Col>
            
            : 
            <Col xs={10} className="main-container-loading">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
               
                <p style={{ fontSize: 30, fontWeight: 600, margin: 20 }}>
                  Oops, Someone stole the cards in this category!!
                </p>
              </div>
            </Col>
            }
          </Row>
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  };
}

export default connect(mapStateToProps)(App);
