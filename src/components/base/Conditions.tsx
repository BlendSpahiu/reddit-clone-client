import { ReactElement } from "react";
import { ConditionsProps } from "./BaseComponent.props";

export const If = ({
  condition,
  children,
  ...rest
}: ConditionsProps): ReactElement => {
  return condition ? <>{children}</> : <></>;
};

export const Ternary = ({
  condition,
  fallback,
  children,
  ...rest
}: ConditionsProps): ReactElement => {
  return condition ? <>{children}</> : <>{fallback}</>;
};
