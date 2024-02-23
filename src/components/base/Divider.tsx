import { ReactElement } from "react";
import { Container } from "./Container";
import { BaseComponentProps, DividerProps } from "./BaseComponent.props";
import { Span } from "./Typography";
import classNames from "classnames";

export const Divider = ({
  text,
  className,
  ...rest
}: DividerProps): ReactElement => {
  return (
    <Container className={classNames("flex items-center", className)} {...rest}>
      {text && (
        <Span className="absolute left-0 right-0 mx-auto w-[40px] bg-[#0f1a1c] text-center text-sm text-gray-400">
          OR
        </Span>
      )}
      <Container className="h-[1px] w-full bg-gray-600" />
    </Container>
  );
};
