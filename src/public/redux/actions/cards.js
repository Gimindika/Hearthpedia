import Axios from "axios";
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";

const header = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "d74edda605msh634bd54c9935348p1a7422jsn2b288df71077"
  }
};

export const getAllCards = () => {
  return {
    type: "GET_ALL_CARDS",
    payload: Axios.get(`${url}/cards/`, header)
  };
};

export const getCardsBySet = set => {
  return {
    type: "GET_CARDS_BY_SET",
    payload: Axios.get(`${url}/cards/sets/${set}`, header)
  };
};

export const getCardsByClass = _class => {
  return {
    type: "GET_CARDS_BY_CLASS",
    payload: Axios.get(`${url}/cards/classes/${_class}`, header)
  };
};

export const getCardsByRace = race => {
  return {
    type: "GET_CARDS_BY_RACE",
    payload: Axios.get(`${url}/cards/races/${race}`, header)
  };
};

export const getCardsByFaction = faction => {
  return {
    type: "GET_CARDS_BY_FACTION",
    payload: Axios.get(`${url}/cards/factions/${faction}`, header)
  };
};

export const getCardsByType = type => {
  return {
    type: "GET_CARDS_BY_TYPE",
    payload: Axios.get(`${url}/cards/types/${type}`, header)
  };
};
// https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/