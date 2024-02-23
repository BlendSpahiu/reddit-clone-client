import { ReactElement } from "react";
import { motion } from "framer-motion";
import { InputProps } from "./BaseComponent.props";
import classNames from "classnames";

export const RadioInput = <T extends object>({
  register,
  className,
}: InputProps<T>): ReactElement => {
  return (
    <motion.input
      className={classNames(
        "h-6 w-6 appearance-none rounded-full border border-[#818384] checked:border-transparent checked:bg-[#2c7bd3]",
        className,
      )}
      type="radio"
      hidden
      {...register}
    />
  );
};
