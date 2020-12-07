import {combineReducers} from "redux";
import {film} from "./film/film";
import {user} from "./user/user";
import {reviews} from "./reviews/reviews";

export const NameSpace = {
  MOVIES: `MOVIES`,
  USER: `USER`,
  REVIEWS: `REVIEWS`
};

export default combineReducers({
  [NameSpace.MOVIES]: film,
  [NameSpace.USER]: user,
  [NameSpace.REVIEWS]: reviews,
});
