import { BaseComponentProps, Container, Paragraph } from "@components";
import { ReactElement } from "react";
import deadLogo from "../assets/images/not-found.png";
import classNames from "classnames";

export const EmptyState = ({
  className,
  ...rest
}: BaseComponentProps<"div">): ReactElement => {
  return (
    <Container
      className={classNames(
        "flex flex-col items-center justify-center space-y-3",
        className,
      )}
      {...rest}
    >
      <img src={deadLogo} alt="Dead" width={64} height={64} />
      <Paragraph className="text-sm text-white">
        Nothing was found, for some reason.
      </Paragraph>
    </Container>
  );
};
