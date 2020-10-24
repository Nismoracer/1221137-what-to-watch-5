import {MovieRate, RateLimits} from "../const";

export const getMovieRate = (mark) => {
  if (mark <= RateLimits.BAD_TO) {
    return MovieRate.BAD;
  } else if (RateLimits.BAD_TO < mark && mark <= RateLimits.NORMAL_TO) {
    return MovieRate.NORMAL;
  } else if (RateLimits.NORMAL_TO < mark && mark <= RateLimits.GOOD_TO) {
    return MovieRate.GOOD;
  } else if (mark > RateLimits.GOOD_TO) {
    return MovieRate.VERY_GOOD;
  }
  return ``;
};
