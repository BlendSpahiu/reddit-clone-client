import { ReactElement } from "react";
import { Paragraph } from "./Typography";
import { FieldErrorProps } from "./BaseComponent.props";
import classNames from "classnames";

export const FieldError = ({
  error,
  className,
}: FieldErrorProps): ReactElement => {
  return (
    <Paragraph className={classNames("text-sm text-red-500", className)}>
      {error.message}
    </Paragraph>
  );
};
