import { ReactElement } from "react";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { CommunityAvatarProps } from "./BaseComponent.props";
import classNames from "classnames";
import { Paragraph } from "./Typography";

export const CommunityAvatar = ({
  className,
  src,
  communityName,
}: CommunityAvatarProps): ReactElement => {
  return (
    <Container>
      {src ? (
        <motion.img
          src={src}
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
      ) : (
        <motion.div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700">
          <Paragraph className="text-sm text-white">
            {communityName[0].toUpperCase()}
          </Paragraph>
        </motion.div>
      )}
    </Container>
  );
};
