import {
  Dispatch,
  ForwardedRef,
  ReactNode,
  SetStateAction,
  forwardRef,
} from "react";
import {
  AnimatePresence,
  HTMLMotionProps,
  MotionProps,
  Variants,
  motion,
} from "framer-motion";
import { useOnClickOutside } from "../../hooks/useOutsideClick";
import classNames from "classnames";

export const Dropdown = forwardRef(
  (
    {
      open,
      children,
      icon,
      setOpen,
      trigger,
      className,
      ...rest
    }: HTMLMotionProps<"div"> & {
      open: boolean;
      icon?: ReactNode;
      trigger?: ReactNode;
      setOpen: Dispatch<SetStateAction<boolean>>;
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const menu = {
      closed: {
        scale: 0,
        transition: {
          delay: 0.15,
        },
      },
      open: {
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.4,
          delayChildren: 0.2,
          staggerChildren: 0.05,
        },
      },
    } satisfies Variants;
    useOnClickOutside(ref, () => setOpen(false));

    return (
      <AnimatePresence>
        <motion.div onClick={() => setOpen(!open)}>
          {icon ? icon : trigger}
        </motion.div>
        {open && (
          <motion.div
            key="menu"
            className={classNames(
              "absolute z-50 flex max-h-max min-w-[180px] flex-col overflow-visible overscroll-contain p-4 outline-none",
              className,
            )}
            ref={ref}
            initial="closed"
            exit="closed"
            animate={open ? "open" : "closed"}
            variants={menu}
            {...rest}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);

export const DropdownItem = forwardRef(
  (
    { children, className, ...rest }: HTMLMotionProps<"div">,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const item = {
      variants: {
        closed: { x: -16, opacity: 0, background: "#0b1416" },
        open: { x: 0, opacity: 1, background: "#0b1416" },
      },
      transition: { opacity: { duration: 0.2 } },
    } satisfies MotionProps;

    return (
      <motion.div
        layout
        className={classNames(
          "first:rounded-t-2xl last:rounded-b-2xl",
          className,
        )}
        whileTap={{
          scale: 0.95,
        }}
        whileHover={{
          background: "#1a282d",
          transition: {
            duration: 0.1,
          },
        }}
        ref={ref}
        {...item}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);
