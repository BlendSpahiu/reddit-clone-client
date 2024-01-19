import { ReactElement } from "react";
import { motion } from "framer-motion";
import { BaseComponentProps, HeadingProps } from "./BaseComponent.props";

export const Paragraph = ({
  children,
  ...rest
}: BaseComponentProps<"p">): ReactElement => {
  return <motion.p {...rest}>{children}</motion.p>;
};

export const Heading = ({ heading, children, ...rest }: HeadingProps): ReactElement => {
  switch (heading) {
    case "h1":
      return <motion.h1 {...rest}>{children}</motion.h1>;
    case "h2":
      return <motion.h2 {...rest}>{children}</motion.h2>;
    case "h3":
      return <motion.h3 {...rest}>{children}</motion.h3>;
    case "h4":
      return <motion.h4 {...rest}>{children}</motion.h4>;
    case "h5":
      return <motion.h5 {...rest}>{children}</motion.h5>;
    case "h6":
      return <motion.h6 {...rest}>{children}</motion.h6>;
  }

  return <motion.h1 {...rest}>{children}</motion.h1>;
};

export const Bold = ({
  children,
  ...rest
}: BaseComponentProps<"b">): ReactElement => {
  return <motion.b {...rest}>{children}</motion.b>;
};

export const Italic = ({
  children,
  ...rest
}: BaseComponentProps<"i">): ReactElement => {
  return <motion.i {...rest}>{children}</motion.i>;
};

export const Span = ({
  children,
  ...rest
}: BaseComponentProps<"span">): ReactElement => {
  return <motion.span {...rest}>{children}</motion.span>;
};
