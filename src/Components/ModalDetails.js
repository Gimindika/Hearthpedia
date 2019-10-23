import React from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import "../Styles/ModalDetails.css"

class ModalDetails extends React.Component {
  render() {
    return (
        <Modal className="modal-parent"  show={this.props.modalState} onHide={this.props.switchModal} animation={false}>
        
        <Modal.Body className="modal-container" >
            <img src={this.props.selectedCard.img} alt={this.props.selectedCard.name}/>
            <p>{this.props.selectedCard.name}</p>
            <p>{this.props.selectedCard.cardSet}</p>
            <p>{this.props.selectedCard.type}</p>
            <p>{this.props.selectedCard.faction}</p>
            <p>{this.props.selectedCard.rarity}</p>
            <p>{this.props.selectedCard.cost}</p>
            <p>{this.props.selectedCard.name}</p>

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
