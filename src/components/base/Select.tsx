import {
  ForwardedRef,
  ReactElement,
  ReactNode,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, MotionProps, Variants, motion } from "framer-motion";
import {
  BaseComponentProps,
  SelectItemProps,
  SelectMenuProps,
  SelectProps,
  SelectTriggerProps,
} from "./BaseComponent.props";
import classNames from "classnames";
import { Container } from "./Container";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Paragraph } from "./Typography";
import { Avatar } from "./Avatar";
import { useAuth } from "@hooks";
import { Badge } from "./Badge";
import { EmptyState } from "@containers";
import { Link } from "./Link";

export const Select = forwardRef(
  (
    { children, className, ...rest }: SelectProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <motion.div ref={ref} className={classNames(className)} {...rest}>
        {children}
      </motion.div>
    );
  },
);

export const SelectTrigger = ({
  isOpen,
  children,
  icon,
  className,
  ...rest
}: SelectTriggerProps): ReactElement => {
  const trigger = document.querySelector("#select-trigger");

  const getRippleEffect = (e: Event) => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    trigger?.appendChild(ripple);
    // @ts-ignore
    const x = e.clientX - e.target.offsetLeft;
    // @ts-ignore
    const y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  useEffect(() => {
    trigger?.addEventListener("mousedown", getRippleEffect);

    return () => {
      trigger?.removeEventListener("mousedown", getRippleEffect);
    };
  }, [trigger]);

  return (
    <Container
      id="select-trigger"
      onClick={(e) => {}}
      whileTap={{
        scale: 0.95,
      }}
      whileHover={{
        cursor: "pointer",
      }}
      className={classNames(
        "ripple-container w relative flex items-center justify-between overflow-hidden rounded-md bg-[#1a1a1b] px-2 py-3 text-white ring-1 ring-[#2b2b2c] transition-all hover:ring-gray-600",
        className,
      )}
      {...rest}
    >
      {children as ReactNode}
      {icon ? (
        icon
      ) : (
        <ChevronDownIcon
          className={classNames(
            "h-4 w-4 text-white transition-all duration-300",
            isOpen ? "rotate-180" : "",
          )}
        />
      )}
    </Container>
  );
};

export const SelectItem = ({
  className,
  children,
  ...rest
}: SelectItemProps) => {
  const item = {
    variants: {
      closed: { x: -16, opacity: 0, background: "#1a1a1b" },
      open: { x: 0, opacity: 1, background: "#1a1a1b" },
    },
    transition: { opacity: { duration: 0.2 } },
  } satisfies MotionProps;

  return (
    <Container
      layout
      whileTap={{
        scale: 0.95,
      }}
      initial={{ background: "#1a1a1b" }}
      whileHover={{
        background: "#272729",
        transition: {
          duration: 0.1,
        },
      }}
      {...item}
      className={classNames(
        "w-full bg-[#1a1a1b] px-2 py-3 text-sm text-white first:rounded-t-md last:rounded-b-md",
        className,
      )}
      {...rest}
    >
      {children}
    </Container>
  );
};

export const SelectMenu = forwardRef(
  (
    { isOpen, className, children, onCreate, ...rest }: SelectMenuProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const selectTrigger = document.getElementById("select-trigger");
    const { user } = useAuth();

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

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="select-menu"
            initial="closed"
            exit="closed"
            ref={ref}
            animate={isOpen ? "open" : "closed"}
            variants={menu}
            className={classNames(
              "absolute z-50 mt-2 divide-y divide-[#2b2b2c] rounded-md bg-[#1a1a1b] ring-1 ring-[#2b2b2c]",
              className,
            )}
            style={{
              ...(selectTrigger && { width: `${selectTrigger.clientWidth}px` }),
            }}
            {...rest}
          >
            <Container className="flex flex-col space-y-2 border-gray-700 border-b-[0.5] px-3 py-2">
              <Paragraph className="text-xs text-gray-400">
                YOUR PROFILE
              </Paragraph>
              <Container className="flex items-center space-x-2">
                <Avatar className="h-10 w-10" />
                <Link
                  to={`/u/${user?.username}`}
                  className="text-sm text-white"
                >
                  u/{user?.username}
                </Link>
              </Container>
            </Container>
            <Container className="mt-1 flex flex-col px-3 py-2">
              <Container className="flex items-center justify-between">
                <Paragraph className="text-xs text-gray-400">
                  YOUR COMMUNITIES
                </Paragraph>
                <Badge
                  className="rounded-full"
                  onClick={onCreate}
                  initial={{ background: "transparent" }}
                  whileHover={{
                    background: "#29292b",
                  }}
                  badgeVariant="secondary"
                >
                  Create New
                </Badge>
              </Container>
              {children instanceof Array && children.length === 0 ? (
                <EmptyState className="my-10" />
              ) : (
                (children as ReactNode)
              )}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
