import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BaseComponentProps } from "./BaseComponent.props";

export const Form = ({
  children,
  ...rest
}: BaseComponentProps<"form">): ReactElement => {
  return <motion.form {...rest}>{children}</motion.form>;
};
