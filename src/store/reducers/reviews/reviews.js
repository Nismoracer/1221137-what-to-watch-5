import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {TransmitState} from "../../../const";

const initialState = {
  reviewsList: [],
  TransmitState: TransmitState.IDLE
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviewsList: action.payload,
      });
    case ActionType.SEND_REVIEW:
      return extend(state, {
        TransmitState: action.payload,
      });
  }
  return state;
};

export {reviews};
