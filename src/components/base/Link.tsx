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
    <motion.a
      whileHover={{ opacity: 0.7, transition: { duration: 0.1 } }}
      {...rest}
    >
      <NavLink to={to}>{children}</NavLink>
    </motion.a>
  );
};
