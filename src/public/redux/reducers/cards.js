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
