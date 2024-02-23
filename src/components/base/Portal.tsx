import { ForwardedRef, ReactElement, ReactNode, forwardRef } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "./BaseComponent.props";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export const Portal = forwardRef(
  (
    { onClose, children, className, ...rest }: PortalProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const portal = document.getElementById("portal");
    return createPortal(
      <AnimatePresence>
        <motion.div
          className="absolute bottom-0 left-0 right-0 top-0 bg-[#191919] opacity-75"
          onClick={onClose}
        />

        {children as ReactNode}
      </AnimatePresence>,
      portal as HTMLElement,
    );
  },
);
