import { combineReducers } from "redux";
import gamesReducers from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducers,
  detail: detailReducer,
});

export default rootReducer;
