import { ReactElement, useEffect, useState } from "react";
import { ToastrModel } from "../../interfaces/Toastr.props";
import { Container } from "../base/Container";
import { Paragraph } from "../base/Typography";
import { Icon } from "../base/Icons/Icon";
import { XCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ToastrTypes } from "../../enums/Toastr.enums";
import { AnimatePresence } from "framer-motion";

export const Toastr = ({
  content,
  title,
  onClose,
  toastId,
  type,
}: ToastrModel): ReactElement => {
  const [isVisible, setIsVisible] = useState<boolean>(!!toastId);

  useEffect(() => {
    const clearToastTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearTimeout(clearToastTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Container
          initial={{ x: 0 }}
          animate={{ x: [300, -24] }}
          exit={{ x: [-24, 350] }}
          className={classNames(
            "fixed right-6 top-6 z-[999] w-[300px] rounded-lg border bg-transparent text-sm text-white",
            type === ToastrTypes.ERROR ? "border-red-600" : "border-green-500",
          )}
        >
          <Container
            className={classNames(
              "flex items-center justify-between rounded-t-lg border-b bg-[#0f1a1c] px-2 py-2 font-semibold",
              type === ToastrTypes.ERROR
                ? "border-red-600"
                : "border-green-500",
            )}
          >
            <Paragraph className="text-sm">{title}</Paragraph>
            <Icon
              onClick={() => onClose(toastId)}
              whileHover={{
                scale: 1.1,
                boxShadow: `0px 0px 4px 1px ${type === ToastrTypes.ERROR ? "#f73535" : "#0bda0b"}`,
              }}
              whileTap={{ scale: 0.9 }}
              icon={
                <XCircleIcon
                  className={classNames(
                    "h-8 w-8",
                    type === ToastrTypes.ERROR
                      ? "text-red-600"
                      : "text-green-500",
                  )}
                />
              }
            />
          </Container>
          <Container className="rounded-b-lg bg-[#1a282d] px-2 py-3">
            {content}
          </Container>
        </Container>
      )}
    </AnimatePresence>
  );
};
