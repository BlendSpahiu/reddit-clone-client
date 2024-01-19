import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BaseComponentProps } from "./BaseComponent.props";

export const Label = ({
  children,
  ...rest
}: BaseComponentProps<"label">): ReactElement => {
  return <motion.label {...rest}>{children}</motion.label>;
};
