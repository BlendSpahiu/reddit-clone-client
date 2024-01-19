import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BaseComponentProps, ContainerProps } from "./BaseComponent.props";

export const Container = ({
  children,
  ...rest
}: ContainerProps): ReactElement => {
  return <motion.div {...rest}>{children}</motion.div>;
};
