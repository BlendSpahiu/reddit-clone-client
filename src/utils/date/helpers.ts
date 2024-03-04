import moment, { Moment } from "moment";

export const getPostDateCreated = (date: string | Date | Moment): string => {
  const today = moment();
  const minutesDiff = moment(today).diff(date, "minutes");
  const hoursDiff = moment(today).diff(date, "hours");
  const daysDiff = moment(today).diff(date, "days");
  const monthsDiff = moment(today).diff(date, "months");

  console.log(hoursDiff, daysDiff);

  if (minutesDiff < 1) {
    return `< 1m. ago`;
  }

  if (minutesDiff >= 60) {
    return `${hoursDiff} h. ago`;
  }

  if (hoursDiff > 24) {
    return `${daysDiff} d. ago`;
  }

  if (daysDiff > 30) {
    return `${monthsDiff} mo. ago`;
  }

  return `${moment(date).format("DD-MM-YYYY")}`;
};
