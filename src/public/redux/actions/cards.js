import Axios from "axios";
const url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/";

const header = {
  headers: {
    "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
    "x-rapidapi-key": "d74edda605msh634bd54c9935348p1a7422jsn2b288df71077"
  }
};

export const getAllCards = (query) => {
  return {
    type: "GET_ALL_CARDS",
    // payload: Axios.get(`${url}/cards/`, header)
    payload: Axios.get(`http://54.235.224.136:4000/api/cards?page=${query}`)

  };
};

export const getCardById = id => {
  return {
    type: "GET_CARD_BY_ID",
    payload: Axios.get(`${url}/cards/${id}`, header)
  };
};
//  https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/alakir