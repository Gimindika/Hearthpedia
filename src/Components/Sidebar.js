import React from "react";
import { Accordion, useAccordionToggle, Col } from "react-bootstrap";
import "../Styles/Sidebar.css";

import { connect } from "react-redux";

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

  setListHandler =  set => {
    this.props.setFilter("cardSet", set);
  };

  classList = [
    {
      name: "Priest",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/23/Icon_Priest_64.png?version=ebbdfd4d3aea21e56c2bf01cd17cd0b9"
    },
    {
      name: "Warrior",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/1/19/Icon_Warrior_64.png?version=3b06eb317c38ddfdf5b80ff07323944b"
    },
    {
      name: "Mage",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/f/f2/Icon_Mage_64.png?version=c44fe389911609ee8ef8b84fa579c375"
    },
    {
      name: "Shaman",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/a/a8/Icon_Shaman_64.png?version=11aa74dd8178410e7b01a1599c4b60b2"
    },
    {
      name: "Paladin",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/7b/Icon_Paladin_64.png?version=c461393966e4643dbf920a37972669d0"
    },
    {
      name: "Hunter",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/f/f4/Icon_Hunter_64.png?version=07fcd83fa04f07fe460ef796017c7f42"
    },
    {
      name: "Warlock",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2e/Icon_Warlock_64.png?version=4ac840bd96daacba22a463f7fe8fc8eb"
    },
    {
      name: "Rogue",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/76/Icon_Rogue_64.png?version=29e843cbc7d2b116db40358408ba9b7d"
    },
    {
      name: "Druid",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/8/8d/Icon_Druid_64.png?version=c5cdf27e1eb9a22d69317735160765d2"
    }
  ];
  classListHandler = _class => {
    this.props.setFilter("playerClass", _class);
  };

  factionList = ["Horde", "Alliance", "Neutral"];
  factionListHandler = faction => {
    this.props.setFilter("faction", faction);
  };

  raceList = ["Demon", "Dragon", "Mech", "Murloc", "Beast", "Pirate", "Totem"];

  raceListHandler =  race => {
    this.props.setFilter("race", race);
  };

  typeList = [
    "Hero",
    "Minion",
    "Spell",
    // , "Enchanment"
    "Weapon",
    "Hero Power"
  ];

  typeListHandler =  type => {
    this.props.setFilter("type", type);
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
              //reset filter
              onClick={() => this.props.resetFilter()}
            >
              <p>Reset</p>
            </div>

            <Accordion>
              <CustomToggle eventKey="0">Sets</CustomToggle>
              <Accordion.Collapse eventKey="0">
                <React.Fragment>
                  {this.setList.map((set, index) => (
                    <button
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.setListHandler(set)}
                    >
                      {set}
                    </button>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="1">Classes</CustomToggle>
              <Accordion.Collapse eventKey="1" style={{ marginLeft: 15 }}>
                <React.Fragment>
                  {this.classList.map((_class, index) => (
                    // <div
                    //   key={index}
                    //   className="sidebar-innerbuttons"
                    //   onClick={() => this.classListHandler(_class)}
                    // >
                    //   <p>{_class}</p>
                    // </div>
                    <button
                      key={index}
                      className="sidebar-classinnerbuttons"
                      onClick={() => this.classListHandler(_class.name)}
                    >
                      {/* {_class} */}
                      <img src={_class.img} alt={_class.name} />
                    </button>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="2">Faction</CustomToggle>
              <Accordion.Collapse eventKey="2">
                <React.Fragment>
                  {this.factionList.map((faction, index) => (
                    // <div
                    //   key={index}
                    //   className="sidebar-innerbuttons"
                    //   onClick={() => this.factionListHandler(faction)}
                    // >
                    //   <p>{faction}</p>
                    // </div>
                    <button
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.factionListHandler(faction)}
                    >
                      {faction}
                    </button>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="3">Race</CustomToggle>
              <Accordion.Collapse eventKey="3">
                <React.Fragment>
                  {this.raceList.map((race, index) => (
                    // <div
                    //   key={index}
                    //   className="sidebar-innerbuttons"
                    //   onClick={() => this.raceListHandler(race)}
                    // >
                    //   <p>{race}</p>
                    // </div>
                    <button
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.raceListHandler(race)}
                    >
                      {race}
                    </button>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="4">Type</CustomToggle>
              <Accordion.Collapse eventKey="4">
                <React.Fragment>
                  {this.typeList.map((type, index) => (
                    // <div
                    //   key={index}
                    //   className="sidebar-innerbuttons"
                    //   onClick={() => this.typeListHandler(type)}
                    // >
                    //   <p>{type}</p>
                    // </div>
                    <button
                      key={index}
                      className="sidebar-innerbuttons"
                      onClick={() => this.typeListHandler(type)}
                    >
                      {type}
                    </button>
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
