const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        isLoading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
        isLoading: false,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "SET_GAMES_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

// ACTION - object which describes what're going to do. Dispatch sends that action to the reducer to modify data

export default gamesReducer;
