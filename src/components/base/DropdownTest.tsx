import * as React from "react";
import * as Ariakit from "@ariakit/react";
import clsx from "classnames";
import type { MotionProps, Variants } from "framer-motion";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import "./Dropdown.css";

export interface MenuProps extends Ariakit.MenuButtonProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  label: React.ReactNode;
  animate?: MotionProps["animate"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
  initial?: MotionProps["initial"];
  exit?: MotionProps["exit"];
  menuClassName?: string;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(function Menu(
  {
    open,
    setOpen,
    label,
    children,
    animate,
    transition,
    variants,
    initial,
    exit,
    ...props
  },
  ref,
) {
  const variant = {
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

  const menu = Ariakit.useMenuStore({ open, setOpen });
  const currentPlacement = menu.useState("currentPlacement");
  const mounted = menu.useState("mounted");
  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton
        store={menu}
        ref={ref}
        {...props}
        className={clsx("button", props.className)}
      >
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            alwaysVisible
            className={clsx("menu", props.menuClassName)}
            // We'll use this data attribute to style the transform-origin
            // property based on the menu's placement. See style.css.
            data-placement={currentPlacement}
            render={
              <motion.div
                animate={open ? "open" : "closed"}
                initial="closed"
                exit="closed"
                variants={variant}
                transition={transition}
              />
            }
          >
            <Ariakit.MenuArrow className="menu-arrow" />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
});

export interface MenuItemProps
  extends React.ComponentPropsWithoutRef<typeof MotionMenuItem> {}

// Instead of using the Ariakit `render` prop, we give control to Framer Motion
// so it can process the props before we pass the remainder to
// `Ariakit.MenuItem`.
const MotionMenuItem = motion(Ariakit.MenuItem);

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  function MenuItem(props, ref) {
    const item = {
      variants: {
        closed: { x: -16, opacity: 0 },
        open: { x: 0, opacity: 1 },
      },
      transition: { opacity: { duration: 0.2 } },
    } satisfies MotionProps;
    return (
      <MotionMenuItem
        ref={ref}
        {...item}
        {...props}
        className={clsx("menu-item hover:bg-[#7b7d7e]", props.className)}
      />
    );
  },
);
