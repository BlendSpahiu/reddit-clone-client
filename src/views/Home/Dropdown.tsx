import { Menu, MenuItem, Paragraph } from "@components";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { ReactElement, ReactNode, useState } from "react";

export const Dropdown = ({
  dropdownMenu,
}: {
  dropdownMenu: { icon: ReactNode; label: string }[];
}): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Menu
      className="test flex items-center rounded-full  px-3 py-1 outline-none hover:ring-gray-300"
      menuClassName="bg-base text-sm text-white border-[#747474] right-4"
      label={
        <EllipsisHorizontalIcon className="h-6 w-6 rounded-full text-[#fff] transition-all hover:ring-1 hover:ring-[#747474]" />
      }
      open={isOpen}
      setOpen={setIsOpen}
    >
      {dropdownMenu.map((item) => (
        <MenuItem
          initial={{
            background: "#1a1a1b",
          }}
          whileHover={{
            background: "#747474",
          }}
        >
          {item.icon}
          <Paragraph>{item.label}</Paragraph>
        </MenuItem>
      ))}
    </Menu>
  );
};
