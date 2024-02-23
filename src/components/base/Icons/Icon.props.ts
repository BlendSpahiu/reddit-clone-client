import { MouseEventHandler, ReactNode } from "react";
import { BaseComponentProps } from "../BaseComponent.props";

export interface IconProps extends BaseComponentProps<"div"> {
  icon: ReactNode;
}

export interface NotificationAlertProps {
  isVisible: boolean;
  onMouseLeave: MouseEventHandler;
}
