import React from "react";
import { connect } from "react-redux";
import { Modal, Col,Row } from "react-bootstrap";
import "../Styles/ModalDetails.css";

class ModalDetails extends React.Component {
  render() {
    return (
      <Modal
        className="modal-parent"
        show={this.props.modalState}
        onHide={this.props.switchModal}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Body className="modal-container">
          <Col className="image-container">
            <img
              style={{ alignSelf: "center" }}
              src={this.props.selectedCard.img}
              alt={this.props.selectedCard.name}
            />
          </Col>

          <Col className="details-container">
                <p className="details-name">{this.props.selectedCard.name}</p>
            <Row>
              <Col>
                <p>{this.props.selectedCard.cardSet}</p>
                <p>
                  <span>{this.props.selectedCard.rarity}</span>{" "}
                  {this.props.selectedCard.type}
                </p>
                <p>{this.props.selectedCard.playerClass}</p>
                <p>{this.props.selectedCard.faction}</p>
                <p>{this.props.selectedCard.race}</p>
              </Col>
              <Col>
                <p><span><img src={require("../images/mana.png")} className="details-icons"/></span> {this.props.selectedCard.cost}</p>
                <p><span><img src={require("../images/health.png")} className="details-icons"/></span> {this.props.selectedCard.health}</p>
                <p><span><img src={require("../images/attack.png")} className="details-icons"/></span> {this.props.selectedCard.attack}</p>
              </Col>
            </Row>

            <span>{this.props.selectedCard.text}</span>
            <p>{this.props.selectedCard.flavor}</p>
            <p className="details-artist">{this.props.selectedCard.artist}</p>
          </Col>
        </Modal.Body>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    cardDetail: state.cards.cardDetail,
    isLoading: state.cards.isLoading
  };
}

export default connect(mapStateToProps)(ModalDetails);
