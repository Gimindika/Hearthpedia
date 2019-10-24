import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import "./App.css";

import { connect } from "react-redux";
import { getAllCards, getCardById } from "./public/redux/actions/cards";

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import Modal from "./Components/ModalDetails";

class App extends React.Component {
  state = {
    items: [],

    modal: false,

    page: 1,

    filters: {
      name: "",
      cardSet: "",
      type: "",
      faction: "",
      rarity: "",
      playerClass: "",
      health: "",
      attack: "",
      cost: "",
      race: ""
    },

    cardId: ""
  };

  switchModal = async id => {
    if (this.state.modal) {
      this.setState({ modal: false });
    } else {
      await this.props.dispatch(getCardById(id));
      this.setState({ modal: true });
    }
  };

  componentDidMount = async () => {
    let query = "" + this.state.page;
    await this.props.dispatch(getAllCards(query));

    // await this.props.dispatch(getCardById("EX1_572"));
  };

  resetFilter = async () => {
    await this.setState({
      ...this.state,
      filters: {
        name: "",
        cardSet: "",
        type: "",
        faction: "",
        rarity: "",
        playerClass: "",
        health: "",
        attack: "",
        cost: "",
        race: ""
      }
    });
    await this.handlePage("reset");
  };

  setFilter = async (fil, value) => {
    await this.setState({
      ...this.state,
      filters: {
        ...this.state.filters,
        [fil]: value
      }
    });
    await this.handlePage("reset");
  };

  handlePage = async command => {
    let page = this.state.page;
    // eslint-disable-next-line
    if (command == "next") {
      page += 1;
      // eslint-disable-next-line
    } else if (command == "back") {
      if (page > 1) {
        page -= 1;
      }
      // eslint-disable-next-line
    } else if (command == "reset") {
      page = 1;
    }
    let query = "" + page;

    let filters = this.state.filters;
    for (let fil in filters) {
      if (filters[fil]) {
        query += "&" + fil + "=" + filters[fil];
      }
    }

    await this.props.dispatch(getAllCards(query));
    await this.setState({ page });
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
                <p style={{ fontSize: 40, fontWeight: 600, margin: 20 }}>
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
          <Header setFilter={this.setFilter} />
          <Row style={{ margin: 0, padding: 0 }}>
            <Sidebar
              setFilter={this.setFilter}
              resetFilter={this.resetFilter}
            />
            {this.props.cards.length ? (
              <Col xs={10} className="main-container">
                <div className="middle-container">
                  <img
                    className="backnext-button"
                    src={require("./images/back.png")}
                    alt="back"
                    onClick={() => this.handlePage("back")}
                  />

                  <div className="card-container m-auto">
                    {this.props.cards.map((card, index) => (
                      <React.Fragment key={card.cardId}>
                        {card.img ? (
                          <div>
                            <img
                              className="card-image"
                              src={card.img}
                              alt={card.name}
                              onClick={() => this.switchModal(card.cardId)}
                            />
                          </div>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </div>
                  <img
                    className="backnext-button"
                    src={require("./images/next.png")}
                    alt="next"
                    style={{ marginRight: 15, marginLeft: 0 }}
                    onClick={() => this.handlePage("next")}
                  />
                </div>
              </Col>
            ) : (
              <Col xs={10} className="main-container-loading">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                  }}
                >
                  <p style={{ fontSize: 40, fontWeight: 600, margin: 20 }}>
                    Oops, Someone stole the cards in this category!!
                  </p>
                </div>
              </Col>
            )}
          </Row>

          <Modal
            modalState={this.state.modal}
            switchModal={this.switchModal}
            selectedCard={this.props.card}
          />
        </React.Fragment>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    card: state.cards.card,
    cards: state.cards.cards,
    isLoading: state.cards.isLoading
  };
}

export default connect(mapStateToProps)(App);
