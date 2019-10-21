import React from "react";
import { Accordion, useAccordionToggle, Card, Col } from "react-bootstrap";
import "../Styles/Sidebar.css";

import { connect } from "react-redux";
import {
  getCardsBySet,
  getAllCards,
  getCardsByClass,
  getCardsByRace,
  getCardsByFaction,
  getCardsByType
} from "../public/redux/actions/cards";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      className="sidebar-buttons"
      style={{ width: 255 }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

class Sidebar extends React.Component {
  setList = [
    "Basic",
    "Classic",
    "The Witchwood",
    "The Boomsday Project",
    "Rastakhan's Rumble",
    // "Rise of Shadows",
    // "Saviors of Uldum",
    "Naxxramas",
    "Goblins vs Gnomes",
    "Blackrock Mountain",
    "The Grand Tournament",
    "The League of Explorers",
    "Whispers of the Old Gods",
    "One Night in Karazhan",
    "Mean Streets of Gadgetzan",
    "Hall of Fame",
    "Journey to Un'Goro",
    "Knights of the Frozen Throne",
    "Kobolds & Catacombs"
  ];

  setListHandler = async set => {
    await this.props.dispatch(getCardsBySet(set));
  };

  classList = [
    "Priest",
    "Warrior",
    "Mage",
    "Shaman",
    "Paladin",
    "Hunter",
    "Warlock",
    "Rogue",
    "Druid"
  ];

  classListHandler = async _class => {
    await this.props.dispatch(getCardsByClass(_class));
  };

  factionList = ["Horde", "Alliance", "Neutral"];

  factionListHandler = async faction => {
    await this.props.dispatch(getCardsByFaction(faction));
  };

  raceList = ["Demon", "Dragon", "Mech", "Murloc", "Beast", "Pirate", "Totem"];

  raceListHandler = async race => {
    await this.props.dispatch(getCardsByRace(race));
  };

  typeList = [
    "Hero",
    "Minion",
    "Spell",
    // , "Enchanment"
    "Weapon",
    "Hero Power"
  ];

  typeListHandler = async type => {
    await this.props.dispatch(getCardsByType(type));
  };

  render() {
    return (
      <React.Fragment>
        <Col className="sidebar " xs={2}>
          <div className="filter-by ">
            <p>Filter By</p>
          </div>

          <div>
            <div
              className="sidebar-buttons"
              onClick={() => this.props.dispatch(getAllCards())}
            >
              <p>All Cards</p>
            </div>

            <Accordion>
              <CustomToggle eventKey="0">Sets</CustomToggle>
              <Accordion.Collapse eventKey="0">
                <React.Fragment>
                  {this.setList.map((set, index) => (
                    <div
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.setListHandler(set)}
                    >
                      <p>{set}</p>
                    </div>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="1">Classes</CustomToggle>
              <Accordion.Collapse eventKey="1">
                <React.Fragment>
                  {this.classList.map((_class, index) => (
                    <div
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.classListHandler(_class)}
                    >
                      <p>{_class}</p>
                    </div>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="2">Faction</CustomToggle>
              <Accordion.Collapse eventKey="2">
                <React.Fragment>
                  {this.factionList.map((faction, index) => (
                    <div
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.factionListHandler(faction)}
                    >
                      <p>{faction}</p>
                    </div>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="3">Race</CustomToggle>
              <Accordion.Collapse eventKey="3">
                <React.Fragment>
                  {this.raceList.map((race, index) => (
                    <div
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.raceListHandler(race)}
                    >
                      <p>{race}</p>
                    </div>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="4">Type</CustomToggle>
              <Accordion.Collapse eventKey="4">
                <React.Fragment>
                  {this.typeList.map((type, index) => (
                    <div
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.typeListHandler(type)}
                    >
                      <p>{type}</p>
                    </div>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>
            </Accordion>
          </div>
        </Col>
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

export default connect(mapStateToProps)(Sidebar);
