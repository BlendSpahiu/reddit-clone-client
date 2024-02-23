import {
  ForwardedRef,
  ReactElement,
  RefObject,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { motion } from "framer-motion";
import { CustomTextareaProps, TextareaProps } from "./BaseComponent.props";
import classNames from "classnames";
import { Span } from "./Typography";

export const Textarea = ({
  children,
  className,
  ...rest
}: TextareaProps): ReactElement => {
  return (
    <motion.textarea
      className={classNames("min-h-72 w-full bg-base p-3", className)}
      {...rest}
    />
  );
};

export const CustomTextarea = forwardRef(
  (
    { children, className, markup, ...rest }: CustomTextareaProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    (ref as RefObject<HTMLDivElement>).current?.addEventListener(
      "change",
      (e) => {
        console.log(e);
      },
    );

    return (
      <motion.div
        id="text-area"
        ref={ref}
        className={classNames(
          "text-area min-h-72 w-full max-w-full resize overflow-auto rounded-b-md bg-base p-3",
          className,
        )}
        contentEditable
        {...rest}
      >
        {markup?.map((m, index) => (
          <Span className={`${m}-${index}`}>
            {(ref as RefObject<HTMLDivElement>).current?.innerText}
          </Span>
        ))}
      </motion.div>
    );
  },
);
