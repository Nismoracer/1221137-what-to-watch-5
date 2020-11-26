import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {getFilteredList} from "../movies";

const initialState = {
  initialList: [],
  filteredList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INITIALIZE_LIST:
      return extend(state, {
        initialList: action.payload,
        filteredList: action.payload,
      });
    case ActionType.FILTER_LIST:
      return extend(state, {
        initialList: state.initialList,
        filteredList: getFilteredList(state.initialList, action.filter),
      });
  }
  return state;
};

export {reducer};
