import { ReactElement } from "react";
import { motion } from "framer-motion";
import { InputProps } from "./BaseComponent.props";
import { Path } from "react-hook-form";
import classNames from "classnames";
import { Container } from "./Container";

export const Input = <T extends object>({
  name,
  icon,
  register,
  className,
  ...rest
}: InputProps<T>): ReactElement => {
  return (
    <Container className="flex w-full items-center">
      {icon && icon}
      <motion.input
        className={classNames(
          "w-full rounded-2xl border-none bg-[#1a282d] px-4 py-3 text-sm text-[#6e868d]",
          icon ? "pl-10" : "",
          className,
        )}
        {...register(name as Path<T>)}
        {...rest}
      />
    </Container>
  );
};
