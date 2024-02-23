import { ReactElement } from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./BaseComponent.props";
import classnames from "classnames";
import { LoaderSpinner } from "./LoaderSpinner";

export const Button = ({
  size,
  children,
  className,
  buttonVariant = "primary",
  isLoading,
  type = "button",
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <motion.button
      type={type}
      className={classnames(
        buttonVariant ? `button-${buttonVariant}` : "",
        size ? `button-${size}` : "",
        className,
      )}
      whileTap={{
        scale: 0.95,
      }}
      {...rest}
    >
      {isLoading ? <LoaderSpinner /> : children}
    </motion.button>
  );
};
