import { HTMLMotionProps } from "framer-motion";
import { FC, ReactHTML, ReactNode, RefObject } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { GeneralProps } from "../../interfaces/GeneralProps";

export type BaseComponentProps<T extends keyof ReactHTML> = HTMLMotionProps<T>;

export interface ModalProps extends BaseComponentProps<"div"> {
  ref?: RefObject<HTMLDivElement>;
}

export interface ContainerProps extends BaseComponentProps<"div"> {
  ref?: RefObject<HTMLDivElement>;
}

export interface InputProps<T extends FieldValues>
  extends BaseComponentProps<"input"> {
  register: UseFormRegister<T>;
  icon?: ReactNode;
}

export interface LinkProps {
  to: string;
}

export interface ConditionsProps {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

export interface HeadingProps
  extends BaseComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  heading: keyof ReactHTML;
  children: ReactNode;
}

export interface FieldErrorProps {
  error: FieldError;
  className?: string;
}

export interface Option {
  label: string | number | readonly string[] | undefined;
  value: string | number | readonly string[] | undefined;
}

export interface SelectProps extends BaseComponentProps<"select"> {
  options: Option[];
}

export interface ButtonProps
  extends BaseComponentProps<"button">,
    GeneralProps {}
