import moment, { Moment } from "moment";

export const customDateFormat = (
  date: string | Date | Moment,
  format: string,
): string => {
  if (!moment(date).isValid()) {
    return "Invalid date.";
  }

  return moment(date).format(format);
};
