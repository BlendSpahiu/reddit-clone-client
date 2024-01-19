import { ReactElement } from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./BaseComponent.props";
import classnames from "classnames";

export const Button = ({
  size,
  children,
  className,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <motion.button
      className={classnames(
        `rounded-2xl border-none bg-[#d93a00] `,
        size ? `button-${size}` : "",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
