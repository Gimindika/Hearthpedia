const initialState = {
  card: {},
  cards: [],
  allCard: [],
  isLoading: false,
  isFullfiled: false,
  isRejected: false
};

const cards = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_CARDS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_ALL_CARDS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_ALL_CARDS_FULFILLED":
      // let set;
      // let allCard = [];
      // for (set in action.payload.data) {
      //   action.payload.data[set].map(card => {
      //     if (card.img) {
      //       if (card.collectible) {
      //         allCard.push(card);
      //       }
      //     }
      //     return null;
      //   });
      // }
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        // allCard: allCard,
        // cards: allCard,
        cards: action.payload.data.response
      };

    case "GET_CARDS_BY_SET_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_SET_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_SET_FULFILLED":
      let cardsBySet = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsBySet.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsBySet
      };

    case "GET_CARDS_BY_CLASS_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_CLASS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_CLASS_FULFILLED":
      let cardsByClass = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsByClass.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsByClass
      };

    case "GET_CARDS_BY_RACE_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_RACE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_RACE_FULFILLED":
      let cardsByRace = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsByRace.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsByRace
      };

    case "GET_CARDS_BY_FACTION_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_FACTION_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_FACTION_FULFILLED":
      let cardsByFaction = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsByFaction.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsByFaction
      };

    case "GET_CARDS_BY_TYPE_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_TYPE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_TYPE_FULFILLED":
      let cardsByType = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsByType.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsByType
      };

    case "GET_CARDS_BY_RARITY_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARDS_BY_RARITY_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARDS_BY_RARITY_FULFILLED":
      let cardsByRarity = [];
      action.payload.data.map(card => {
        if (card.img) {
          if (card.collectible) {
            cardsByRarity.push(card);
          }
        }
        return null;
      });
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        cards: cardsByRarity
      };

    case "GET_CARD_BY_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFullfiled: false
      };
    case "GET_CARD_BY_ID_REJECTED":
      return {
        ...state,
        isLoading: false,
        isRejected: true
      };
    case "GET_CARD_BY_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isRejected: false,
        isFullfiled: true,
        card: action.payload.data[0]
      };

    default:
      return state;
  }
};

export default cards;
