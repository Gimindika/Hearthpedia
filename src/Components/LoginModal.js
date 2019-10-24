import React from "react";
import { connect } from "react-redux";
import { Modal, Col, Row } from "react-bootstrap";
import "../Styles/LoginModal.css";
import RegisterModal from "../Components/RegisterModal";

class LoginModal extends React.Component {
  state = {
    modal: false
  };

  switchModal = () => {
    if (this.state.modal) {
      this.setState({ modal: false });
    } else {
      this.setState({ modal: true });
    }
  };

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
        <Modal.Body
          style={{ flexDirection: "column" }}
          className="modal-container"
        >
          <Row
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img
              style={{ height: 200, width: 600 }}
              alt="banner"
              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/thumb/d/d4/Hearthstone_logo.png/675px-Hearthstone_logo.png?version=2a47f70dd8f723de897c4829a3a420b0"
            />
          </Row>
          <Row>
            <Col className="login-mainrow">
              <Row>
                <Col
                  style={{ textAlign: "center", fontWeight: 800, fontSize: 40 }}
                >
                  <p>Log In</p>
                </Col>
              </Row>
              <Row className="login-rowinput">
                <Col className="login-collabel col-lg-2">
                  <p className="login-label">Email : </p>
                </Col>
                <Col>
                  <input />
                </Col>
              </Row>
              <Row className="login-rowinput">
                <Col className="login-collabel col-lg-2">
                  <p className="login-label">Password : </p>
                </Col>
                <Col>
                  <input />
                </Col>
              </Row>
              <Row>
                <Col>
                  <button className="login-button">Log In</button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    style={{ fontSize: 15, width: 100 }}
                    className="login-button"
                    onClick={() => this.switchModal()}
                  >
                    Register
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <RegisterModal
          modalState={this.state.modal}
          switchModal={this.switchModal}
        />
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

export default connect(mapStateToProps)(LoginModal);
