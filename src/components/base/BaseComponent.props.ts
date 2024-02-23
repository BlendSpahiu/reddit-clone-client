import { HTMLMotionProps } from "framer-motion";
import { FC, MouseEvent, ReactHTML, ReactNode, RefObject } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { GeneralProps } from "../../interfaces/GeneralProps";

export type BaseComponentProps<T extends keyof ReactHTML> = HTMLMotionProps<T>;

export interface ModalProps extends BaseComponentProps<"div"> {
  headerTitle: string;
  headerAction: () => void;
  ref?: RefObject<HTMLDivElement>;
  headerDescription?: string;
}

export interface DividerProps extends BaseComponentProps<"div"> {
  text?: string;
}

export interface ContainerProps extends BaseComponentProps<"div"> {
  ref?: RefObject<HTMLDivElement>;
}

export type InputVariants = "primary" | "secondary" | "none";

export interface InputProps<T extends FieldValues>
  extends BaseComponentProps<"input"> {
  namePlaceholder?: ReactNode;
  register: UseFormRegister<T>;
  icon?: ReactNode;
  prefix?: string;
  inputVariant?: InputVariants;
  shouldAnimate?: boolean;
}

export interface LinkProps {
  to: string;
}

export interface ConditionsProps {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

export interface HeadingProps
  extends BaseComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  heading: keyof ReactHTML;
  children: ReactNode;
}

export interface FieldErrorProps {
  error: FieldError;
  className?: string;
}

export interface Option {
  label: string | number | readonly string[] | undefined;
  value: string | number | readonly string[] | undefined;
}

export interface SelectProps extends BaseComponentProps<"div"> {}

export interface SelectTriggerProps extends BaseComponentProps<"div"> {
  isOpen?: boolean;
  icon?: ReactNode;
}

export interface SelectMenuProps extends BaseComponentProps<"div"> {
  isOpen: boolean;
  onCreate: () => void;
}

export interface SelectItemProps extends BaseComponentProps<"div"> {}

type ButtonVariants = "primary" | "secondary" | "none";

export interface ButtonProps
  extends BaseComponentProps<"button">,
    GeneralProps {
  isLoading?: boolean;
  buttonVariant?: ButtonVariants;
}

export interface AvatarProps {
  src?: string;
  className?: string;
  onClick?: () => void;
}

export interface CommunityAvatarProps {
  communityName: string;
  src?: string;
  className?: string;
}

export interface DropdownProps {}

export interface DropdownComposition {
  Item: FC<HTMLMotionProps<"div">>;
}

export type BadgeVariants =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warnig"
  | "nsfw"
  | "none";

export interface BadgeProps extends BaseComponentProps<"div"> {
  className?: string;
  badgeVariant?: BadgeVariants;
  onClick?: (e: MouseEvent) => void;
}

export interface PortalProps extends BaseComponentProps<"div"> {
  onClose: () => void;
}

export interface TabsProps extends BaseComponentProps<"div"> {}

export interface TabContentProps extends BaseComponentProps<"div"> {
  tabId: number;
  activeTab: number;
}

export interface TabHeaderProps extends BaseComponentProps<"div"> {
  activeTab: boolean;
}

export interface TextareaProps extends BaseComponentProps<"textarea"> {}

export interface CustomTextareaProps extends BaseComponentProps<"div"> {
  markup: string[];
}
