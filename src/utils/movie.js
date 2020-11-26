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

export const humanizeDuration = (duration) => {
  const minutes = 60;
  const hours = duration / minutes;
  return Math.floor(hours) + `h ` + Math.floor(duration % minutes) + `m`;
};

export const humanizeDate = (inputDate) => {
  let monthString = ``;
  const year = inputDate.getFullYear().toString();
  const day = inputDate.getDate().toString();
  const month = inputDate.getMonth() + 1;
  switch (month) {
    case 1: monthString = `January`; break;
    case 2: monthString = `February`; break;
    case 3: monthString = `March`; break;
    case 4: monthString = `April`; break;
    case 5: monthString = `May`; break;
    case 6: monthString = `June`; break;
    case 7: monthString = `July`; break;
    case 8: monthString = `August`; break;
    case 9: monthString = `September`; break;
    case 10: monthString = `October`; break;
    case 11: monthString = `November`; break;
    case 12: monthString = `December`; break;
  }
  return {
    human: monthString + ` ` + day + `, ` + year,
    html: year + `-` + month + `-` + day
  };
};
