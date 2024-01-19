import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "./BaseComponent.props";
import { Container } from "./Container";
import { motion } from "framer-motion";

export const Modal = ({
  children,
  ref,
  onClick,
  ...rest
}: ModalProps): ReactElement => {
  const portal = document.querySelector("#portal");

  return createPortal(
    <>
      <Container
        onClick={onClick}
        className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-75"
      />
      <motion.div {...rest}>{children}</motion.div>
    </>,
    portal as Element,
  );
};
