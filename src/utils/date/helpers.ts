import moment, { Moment } from "moment";

export const getPostDateCreated = (date: string | Date | Moment): string => {
  const today = moment();
  const diff = moment(today).diff(date);

  if (diff.toString().length <= 6) {
    return `${moment(today).diff(date, "seconds")} s. ago`;
  }

  if (diff.toString().length >= 6) {
    return `${moment(today).diff(date, "minutes")} m. ago`;
  }

  if (diff.toString().length >= 9) {
    return `${moment(today).diff(date, "hours")} h. ago`;
  }

  if (diff.toString().length > 9) {
    return `${moment(today).diff(date, "days")} d. ago`;
  }

  return `${moment(date).format("DD-MM-YYYY")}`;
};
