import { ReactNode } from "react";

export interface HomeDropdownProps {
  postId: string;
  isPostCreator: boolean;
  dropdownMenu: { icon: ReactNode; label: string }[];
}
