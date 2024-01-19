import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { BaseComponentProps, SelectProps } from "./BaseComponent.props";

export const Option = ({
  children,
  ...rest
}: BaseComponentProps<"option">): ReactElement => {
  return <motion.option {...rest}>{children}</motion.option>;
};

export const Select = ({ options, ...rest }: SelectProps): ReactElement => {
  const [selected, setSelected] = useState<
    string | number | readonly string[] | undefined
  >();

  return (
    <motion.select
      onChange={(e) => {
        setSelected(e.target.value);
      }}
      value={selected}
      {...rest}
    >
      {options.map((option) => (
        <Option value={option.value}>{option.label}</Option>
      ))}
    </motion.select>
  );
};
