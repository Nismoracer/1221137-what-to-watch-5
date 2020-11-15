import {RatingLabels, RatingLimits} from "../const";

export const getRatingLabels = (mark) => {
  if (mark <= RatingLimits.BAD) {
    return RatingLabels.BAD;
  } else if (RatingLimits.BAD < mark && mark <= RatingLimits.NORMAL) {
    return RatingLabels.NORMAL;
  } else if (RatingLimits.NORMAL < mark && mark <= RatingLimits.GOOD) {
    return RatingLabels.GOOD;
  } else if (RatingLimits.GOOD < mark && mark <= RatingLimits.VERY_GOOD) {
    return RatingLabels.VERY_GOOD;
  }
  return RatingLabels.AWESOME;
};
