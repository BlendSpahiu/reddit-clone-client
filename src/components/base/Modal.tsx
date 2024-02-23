import { ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./BaseComponent.props";
import { Container } from "./Container";
import { motion } from "framer-motion";
import { Heading, Paragraph } from "./Typography";
import { Icon } from "./Icons/Icon";
import { XCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export const Modal = ({
  children,
  ref,
  onClick,
  headerTitle,
  headerAction,
  headerDescription,
  className,
  ...rest
}: ModalProps): ReactElement => {
  const portal = document.querySelector("#portal");

  return createPortal(
    <>
      <Container
        onClick={onClick}
        className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-75"
      />
      <motion.div className={classNames("", className)} {...rest}>
        <Icon
          layout
          className="absolute right-5 mr-6 mt-6 w-fit rounded-full"
          icon={<XCircleIcon className="h-10 w-10 text-gray-400" />}
          onClick={headerAction}
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            transition: { duration: 0.2 },
            boxShadow: "0px 0px 2px 4px gray",
          }}
        />
        <motion.div className="flex flex-col p-24">
          <motion.div>
            <Heading heading="h1" className="text-3xl font-bold text-white">
              {headerTitle}
            </Heading>
            {headerDescription && (
              <Paragraph className="mt-2 text-sm text-gray-200">
                {headerDescription}
              </Paragraph>
            )}
          </motion.div>
          {children as ReactNode}
        </motion.div>
      </motion.div>
    </>,
    portal as Element,
  );
};
