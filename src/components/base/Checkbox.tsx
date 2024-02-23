import { ReactElement } from "react";
import { motion } from "framer-motion";
import { InputProps } from "./BaseComponent.props";
import classNames from "classnames";

export const Checkbox = <T extends object>({
  className,
  register,
  ...rest
}: InputProps<T>): ReactElement => {
  return (
    <motion.input
      className={classNames("", className)}
      type="checkbox"
      hidden
      {...register}
      {...rest}
    />
  );
};
