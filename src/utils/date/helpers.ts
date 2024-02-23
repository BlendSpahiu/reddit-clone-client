import moment, { Moment } from "moment";

export const getPostDateCreated = (date: string | Date | Moment): string => {
  const today = moment();
  const diff = moment(today).diff(date, "hours");

  if (diff === 24) {
    return `${moment(today).diff(date, "days")} d. ago`;
  }

  return `${diff} hr. ago`;
};
