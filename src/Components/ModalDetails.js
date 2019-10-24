import React from "react";
import { connect } from "react-redux";
import { Modal, Col, Row } from "react-bootstrap";
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
                {/* //playerClass///////////////////////////////////////////// */}
                {(() => {
                  switch (this.props.selectedCard.playerClass) {
                    case "Neutral":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="http://nexustipsandtales.com/wp-content/uploads/2016/10/Hearthstone-Icon.png"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Priest":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/23/Icon_Priest_64.png?version=ebbdfd4d3aea21e56c2bf01cd17cd0b9"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );

                    case "Warrior":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/1/19/Icon_Warrior_64.png?version=3b06eb317c38ddfdf5b80ff07323944b"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );

                    case "Mage":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/f/f2/Icon_Mage_64.png?version=c44fe389911609ee8ef8b84fa579c375"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Shaman":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/a/a8/Icon_Shaman_64.png?version=11aa74dd8178410e7b01a1599c4b60b2"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Paladin":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/7b/Icon_Paladin_64.png?version=c461393966e4643dbf920a37972669d0"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Hunter":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/f/f4/Icon_Hunter_64.png?version=07fcd83fa04f07fe460ef796017c7f42"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Warlock":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2e/Icon_Warlock_64.png?version=4ac840bd96daacba22a463f7fe8fc8eb"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Rogue":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/76/Icon_Rogue_64.png?version=29e843cbc7d2b116db40358408ba9b7d"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                    case "Druid":
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/8/8d/Icon_Druid_64.png?version=c5cdf27e1eb9a22d69317735160765d2"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );

                    default:
                      return (
                        <p>
                          <span>
                            <img
                              style={{ width: 25, height: 25 }}
                              src="http://nexustipsandtales.com/wp-content/uploads/2016/10/Hearthstone-Icon.png"
                              alt={this.props.selectedCard.playerClass}
                            />
                          </span>{" "}
                          {this.props.selectedCard.playerClass}
                        </p>
                      );
                  }
                })()}
                {/* ///////////////////////////////////////////// */}

                {/* //rarity///////////////////////////////////////////// */}
                {(() => {
                  switch (this.props.selectedCard.rarity) {
                    case "Free":
                      return (
                        <p>
                          <span style={{ color: "grey" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    case "Basic":
                      return (
                        <p>
                          <span style={{ color: "grey" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    case "Common":
                      return (
                        <p>
                          <span style={{ color: "black" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    case "Rare":
                      return (
                        <p>
                          <span style={{ color: "blue" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    case "Epic":
                      return (
                        <p>
                          <span style={{ color: "magenta" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    case "Legendary":
                      return (
                        <p>
                          <span style={{ color: "orange" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                    default:
                      return (
                        <p>
                          <span style={{ color: "grey" }}>
                            {this.props.selectedCard.rarity}
                          </span>{" "}
                          {this.props.selectedCard.type}
                        </p>
                      );
                  }
                })()}
                {/* ///////////////////////////////////////////// */}

                {/* //cardset///////////////////////////////////////////// */}
                {(() => {
                  switch (this.props.selectedCard.cardSet) {
                    case "Classic":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://i.imgur.com/4510BxO.jpg"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "The Witchwood":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/c/ce/The_Witchwood_banner.jpg?version=66a0f7dba9f229ea108bae61cf8b2cab"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "The Boomsday Project":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/3/32/The_Boomsday_Project_banner.jpg?version=4bfa317b6611e23df697f4bc825c3b15"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Rastakhan's Rumble":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2a/Rastakhan%27s_Rumble_banner.jpg?version=46a25a6e19651711cc26fe3e67796cae"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Naxxramas":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/e/e0/Curse_of_Naxxramas_banner.jpg?version=94019550ab1028450bfa7642183fafea"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Goblins vs Gnomes":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/71/Goblins_vs_Gnomes_banner.jpg?version=b0c8a30fc069660602b41c4b07656436"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Blackrock Mountain":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2f/Blackrock_Mountain_banner.jpg?version=88627f9153ecb73c96fd066028921d13"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "The Grand Tournament":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/5/58/The_Grand_Tournament.png?version=896ca984dfb1c5cc8614abd801715c27"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "The League of Explorers":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/6/66/The_League_of_Explorers_banner.jpg?version=4fea093aa5307a303143ec28fad0ccf7"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Whispers of the Old Gods":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/8/8c/Whispers_of_the_Old_Gods_banner.png?version=a23fd64d3d34160a98b79b4542c42641"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "One Night in Karazhan":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/7f/One_Night_in_Karazhan_banner.jpg?version=cb7b0775ce04d1b6d391278ceead4fcf"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Mean Streets of Gadgetzan":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/c/c7/Mean_Streets_of_Gadgetzan_banner2.jpg?version=dad72775a5d5d7abbf23c479dee88345"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Journey to Un'Goro":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/d/dc/Journey_to_Un%27Goro_banner2.png?version=fef60aa7c0c1fdd8ab8cb0fd76c414a7"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Knights of the Frozen Throne":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/71/Knights_of_the_Frozen_Throne_banner.jpg?version=2623158fc38fe4f71acb5a567c233aa6"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Kobolds & Catacombs":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/5/51/Kobolds_and_Catacombs_banner.jpg?version=c4cfe4c9606b22c7915848adfb88cd43"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Rise of Shadows":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/9/94/Rise_of_Shadows_banner.jpg?version=c7d26fde94140ae7e905735e46091b8e"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    case "Saviors of Uldum":
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2f/Saviors_of_Uldum_banner.jpg?version=f4cf525be2e3541d7969c27442033c01"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );

                    default:
                      return (
                        <p>
                          <img
                            style={{ height: 50 }}
                            src="https://i.imgur.com/4510BxO.jpg"
                            alt={this.props.selectedCard.cardSet}
                          />
                        </p>
                      );
                  }
                })()}
                <p style={{ fontSize: 15 }}>
                  {this.props.selectedCard.cardSet}
                </p>
                {/* ///////////////////////////////////////////// */}
                <p>{this.props.selectedCard.faction}</p>
                <p>{this.props.selectedCard.race}</p>
              </Col>
              <Col>
                {this.props.selectedCard.cost != null ? (
                  <p>
                    <span>
                      <img
                        src={require("../images/mana.png")}
                        alt="mana"
                        className="details-icons"
                      />
                    </span>{" "}
                    {this.props.selectedCard.cost}
                  </p>
                ) : null}

                {this.props.selectedCard.health != null ? (
                  <p>
                    <span>
                      <img
                        src={require("../images/health.png")}
                        alt="health"
                        className="details-icons"
                      />
                    </span>{" "}
                    {this.props.selectedCard.health}
                  </p>
                ) : null}

                {this.props.selectedCard.attack != null ? (
                  <p>
                    <span>
                      <img
                        src={require("../images/attack.png")}
                        alt="attack"
                        className="details-icons"
                      />
                    </span>{" "}
                    {this.props.selectedCard.attack}
                  </p>
                ) : null}
              </Col>
            </Row>

            <p>{this.props.selectedCard.text}</p>
            <p>
              <em>{this.props.selectedCard.flavor}</em>
            </p>
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
