import { ReactElement } from "react";
import { Container } from "./Container";
import { Span } from "./Typography";
import { BadgeProps } from "./BaseComponent.props";
import classNames from "classnames";

export const Badge = ({
  children,
  badgeVariant = "primary",
  className,
  onClick,
  ...rest
}: BadgeProps): ReactElement => {
  return (
    <Container
      whileTap={{
        scale: 0.95,
      }}
      className={classNames(
        onClick ? "cursor-pointer" : "",
        badgeVariant ? `badge-${badgeVariant}` : "",
        "badge",
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Container>
  );
};
