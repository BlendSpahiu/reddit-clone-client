import { ReactElement } from "react";
import { Container } from "./Container";
import avatar from "../../assets/images/Avatar.png";
import { motion } from "framer-motion";
import { AvatarProps } from "./BaseComponent.props";
import classNames from "classnames";

export const Avatar = ({
  onClick,
  className,
  src,
}: AvatarProps): ReactElement => {
  return (
    <Container onClick={onClick}>
      <motion.img
        src={avatar || src}
        alt="Avatar"
        width={50}
        height={50}
        className={classNames(
          "rounded-full ring-2 ring-orange-600 hover:cursor-pointer hover:ring-orange-300",
          className,
        )}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      />
    </Container>
  );
};
