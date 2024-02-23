import { ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NotificationAlertProps } from "./Icon.props";

export const NotificationAlert = ({
  onMouseLeave,
  isVisible,
}: NotificationAlertProps): ReactElement => (
  <motion.div className="flex h-full w-full items-center rounded-full hover:cursor-pointer">
    <AnimatePresence>
      <motion.svg
        key="bell"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="hover:animate-bell rounded-full text-white"
        onMouseLeave={onMouseLeave}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
        />
      </motion.svg>
      {isVisible && (
        <motion.span
          onMouseOver={(e) => e.stopPropagation()}
          key="count"
          initial={{ scale: 0 }}
          exit={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          className="absolute mb-6 ml-4 rounded-full bg-red-500 px-1 py-0.5 text-xs text-white"
        >
          1
        </motion.span>
      )}
    </AnimatePresence>
  </motion.div>
);
