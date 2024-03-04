import { ReactElement, useEffect, useRef, useState } from "react";
import { Path } from "react-hook-form";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { InputProps } from "./BaseComponent.props";
import { Container } from "./Container";

export const Input = <T extends object>({
  name,
  icon,
  register,
  className,
  placeholder,
  prefix,
  inputVariant = "primary",
  shouldAnimate = true,
  ...rest
}: InputProps<T>): ReactElement => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [replacePlaceholder, setReplacePlaceholder] = useState<string>(
    placeholder || "",
  );
  const [calculatedDistance, setCalculatedDistance] = useState<number>(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { ref, ...registerProps } = register(name as Path<T>, {
    onBlur: () => {
      if (inputRef.current?.value) {
        return;
      }
      setIsFocused(false);
    },
  });

  const inputElement = document.getElementById(`input-${placeholder}`);
  const animatedPlaceholder = document.getElementById(
    `animated-${placeholder}`,
  );

  useEffect(() => {
    if (isFocused) {
      setReplacePlaceholder("");
    } else {
      timeoutRef.current = setTimeout(() => {
        setReplacePlaceholder(placeholder || "");
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isFocused, placeholder]);

  useEffect(() => {
    const inputWidth = inputElement?.clientWidth;
    const animatedPlaceholderWidth = animatedPlaceholder?.clientWidth;
    const finalDistance = Math.round(
      (inputWidth || 0) - (animatedPlaceholderWidth || 0) - 32,
    );
    setCalculatedDistance(finalDistance);
  }, [animatedPlaceholder?.clientWidth, inputElement?.clientWidth]);

  return (
    <Container className="flex w-full items-center">
      <AnimatePresence>
        {icon && icon}
        {isFocused && shouldAnimate && (
          <motion.span
            id={`animated-${placeholder}`}
            key="placeholder"
            className="absolute z-10 ml-4 text-sm text-gray-400"
            initial={{
              y: 0,
              x: 0,
            }}
            animate={{ ...(shouldAnimate && { y: 0, x: calculatedDistance }) }}
            exit={{ y: 0, x: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {placeholder}
          </motion.span>
        )}
        <motion.div className="flex w-full items-center">
          <motion.span className="absolute left-9 text-[#6e868d]">
            {prefix}
          </motion.span>
          <motion.input
            id={`input-${placeholder}`}
            className={classNames(
              "w-full rounded-2xl bg-[#272729] px-4 py-3 text-sm text-[#6e868d] ring-gray-400 transition-all duration-200 hover:ring-2 focus:outline-none focus:ring-inset",
              inputVariant ? `input-${inputVariant}` : "",
              icon ? "pl-10" : "",
              prefix ? "pl-[30px]" : "",
              className,
            )}
            ref={(r) => {
              ref(r);
              inputRef.current = r;
            }}
            placeholder={replacePlaceholder}
            onFocus={() => setIsFocused(true)}
            {...registerProps}
            {...rest}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};
