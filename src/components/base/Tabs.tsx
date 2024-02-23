import { ReactElement, useEffect, useState } from "react";
import {
  TabContentProps,
  TabHeaderProps,
  TabsProps,
} from "./BaseComponent.props";
import { AnimatePresence, motion } from "framer-motion";
import classNames from "classnames";

export const Tabs = ({
  children,
  className,
  ...rest
}: TabsProps): ReactElement => {
  return (
    <motion.div className={classNames(className)} {...rest}>
      {children}
    </motion.div>
  );
};

export const TabContentContaier = ({
  children,
  className,
  ...rest
}: TabsProps): ReactElement => {
  return (
    <motion.div
      id="tab-content-container"
      className={classNames(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const TabContent = ({
  tabId,
  children,
  className,
  activeTab,
  ...rest
}: TabContentProps): ReactElement => {
  const [parentWidth, setParentWidth] = useState<number>(0);
  const tabContentContainer = document.getElementById("tab-content-container");

  useEffect(() => {
    setParentWidth(tabContentContainer?.clientWidth || 0);
  }, [tabContentContainer?.clientWidth]);
  return (
    <AnimatePresence>
      {activeTab === tabId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={tabId}
          className={classNames(
            "absolute z-0 rounded-b-md bg-[#1a1a1b] text-white",
            className,
          )}
          style={{
            ...(parentWidth && {
              width: `${parentWidth}px`,
            }),
          }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const TabHeaderContaier = ({
  children,
  className,
  ...rest
}: TabsProps): ReactElement => {
  return (
    <motion.div
      className={classNames(
        "flex items-center divide-x divide-[#2a2a2c] rounded-md border-b border-[#2a2a2c]",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const TabHeader = ({
  children,
  className,
  activeTab,
  ...rest
}: TabHeaderProps): ReactElement => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          background: "#1a1a1b",
        }}
        whileHover={{
          cursor: "pointer",
          background: "#2b2b2c",
        }}
        whileInView={{
          transition: { duration: 1.5 },
          boxShadow: activeTab ? "0 5px 2px -2px white" : "none",
        }}
        exit={{
          boxShadow: "none",
        }}
        whileTap={{ background: "#5e5e5f" }}
        className={classNames(
          "flex w-full items-center justify-center space-x-1 bg-[#1a1a1b] p-2 text-sm  first:rounded-tl-md last:rounded-tr-md",
          activeTab ? "shadow-active-tab text-[#cccfd1] " : "text-[#7e8081]",
          className,
        )}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
