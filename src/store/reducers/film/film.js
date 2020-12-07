import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {getFilteredList, updateMovies} from "../../../movies";

const initialState = {
  initialList: [],
  filteredList: [],
  myList: [],
  promo: {},
};

const film = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INITIALIZE_MOVIES:
      return extend(state, {
        initialList: action.payload,
        filteredList: action.payload,
      });
    case ActionType.UPDATE_MOVIES:
      return extend(state, {
        initialList: updateMovies(state.initialList, action.payload),
      });
    case ActionType.INITIALIZE_MYLIST:
      return extend(state, {
        myList: action.payload,
      });
    case ActionType.INITIALIZE_PROMO:
      return extend(state, {
        promo: action.payload,
      });
    case ActionType.FILTER_LIST:
      return extend(state, {
        filteredList: getFilteredList(state.initialList, action.filter),
      });
  }
  return state;
};

export {film};
