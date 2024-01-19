import { Container } from "../Container";
import { IconProps } from "./Icon.props";

export const Icon = ({ icon, ...rest }: IconProps) => {
  return (
    <Container className="rounded-full" {...rest}>
      {icon && icon}
    </Container>
  );
};
