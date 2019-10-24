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
    {
      name: "Basic",
      img: "http://3rd-strike.com/wp-content/uploads/2016/02/hearthstone-banner.jpg"
    },
    {
      name: "Classic",
      img: "https://i.imgur.com/4510BxO.jpg"
    },
    {
      name: "The Witchwood",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/c/ce/The_Witchwood_banner.jpg?version=66a0f7dba9f229ea108bae61cf8b2cab"
    },
    {
      name: "The Boomsday Project",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/3/32/The_Boomsday_Project_banner.jpg?version=4bfa317b6611e23df697f4bc825c3b15"
    },
    {
      name: "Rastakhan's Rumble",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2a/Rastakhan%27s_Rumble_banner.jpg?version=46a25a6e19651711cc26fe3e67796cae"
    },
    {
      name: "Naxxramas",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/e/e0/Curse_of_Naxxramas_banner.jpg?version=94019550ab1028450bfa7642183fafea"
    },
    // "Rise of Shadows",
    // "Saviors of Uldum",
    {
      name: "Goblins vs Gnomes",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/71/Goblins_vs_Gnomes_banner.jpg?version=b0c8a30fc069660602b41c4b07656436"
    },
    {
      name: "Blackrock Mountain",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/2/2f/Blackrock_Mountain_banner.jpg?version=88627f9153ecb73c96fd066028921d13"
    },
    {
      name: "The Grand Tournament",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/5/58/The_Grand_Tournament.png?version=896ca984dfb1c5cc8614abd801715c27"
    },
    {
      name: "The League of Explorers",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/6/66/The_League_of_Explorers_banner.jpg?version=4fea093aa5307a303143ec28fad0ccf7"
    },
    {
      name: "Whispers of the Old Gods",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/8/8c/Whispers_of_the_Old_Gods_banner.png?version=a23fd64d3d34160a98b79b4542c42641"
    },
    {
      name: "One Night in Karazhan",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/7f/One_Night_in_Karazhan_banner.jpg?version=cb7b0775ce04d1b6d391278ceead4fcf"
    },
    {
      name: "Mean Streets of Gadgetzan",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/c/c7/Mean_Streets_of_Gadgetzan_banner2.jpg?version=dad72775a5d5d7abbf23c479dee88345"
    },
    {
      name: "Journey to Un'Goro",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/d/dc/Journey_to_Un%27Goro_banner2.png?version=fef60aa7c0c1fdd8ab8cb0fd76c414a7"
    },
    {
      name: "Knights of the Frozen Throne",
      img:
        "https://gamepedia.cursecdn.com/hearthstone_gamepedia/7/71/Knights_of_the_Frozen_Throne_banner.jpg?version=2623158fc38fe4f71acb5a567c233aa6"
    },
    {
      name: "Kobolds & Catacombs",
      img:
        " https://gamepedia.cursecdn.com/hearthstone_gamepedia/5/51/Kobolds_and_Catacombs_banner.jpg?version=c4cfe4c9606b22c7915848adfb88cd43"
    }

    // "Hall of Fame",
  ];

  setListHandler = set => {
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

  raceListHandler = race => {
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

  typeListHandler = type => {
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
                    // <button
                    //   key={index}
                    //   className="sidebar-innerbuttons"
                    //   onClick={() => this.setListHandler(set)}
                    // >
                    //   {set}
                    // </button>
                    //
                    // <button
                    //   key={index}
                    //   className="sidebar-setinnerbuttons"
                    //   onClick={() => this.setListHandler(set.name)}
                    // >
                    <React.Fragment key={index}>
                      <img
                        src={set.img}
                        alt={set.name}
                        className="sidebar-setinnerbuttons"
                        onClick={() => this.setListHandler(set.name)}
                      />
                      {/* </button> */}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              </Accordion.Collapse>

              <CustomToggle eventKey="1">Classes</CustomToggle>
              <Accordion.Collapse eventKey="1" style={{ marginLeft: 15 }}>
                <React.Fragment>
                  {this.classList.map((_class, index) => (
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
