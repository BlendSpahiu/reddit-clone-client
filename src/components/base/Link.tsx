import { ReactElement } from "react";
import { motion } from "framer-motion";
import { LinkProps, Link as NavLink } from "react-router-dom";
import { BaseComponentProps } from "./BaseComponent.props";

export const Link = ({
  to,
  children,
  ...rest
}: BaseComponentProps<"a"> & LinkProps): ReactElement => {
  return (
    <motion.a {...rest}>
      <NavLink to={to}>{children}</NavLink>
    </motion.a>
  );
};
