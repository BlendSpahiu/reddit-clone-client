import { ReactElement, useRef, useState } from "react";
import { Container } from "@components";
import {
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  Cog8ToothIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Paragraph } from "../components/base/Typography";
import { Avatar } from "../components/base/Avatar";
import { NotificationAlert } from "../components/base/Icons/NotificationAlert";
import { Dropdown, DropdownItem } from "../components/base/Dropdown";
import { useAuth } from "../hooks/Auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Icon } from "../components/base/Icons/Icon";

export const ProfileHeader = (): ReactElement => {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isHoveringOnBell, setIsHoveringOnBell] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const profileSettings = [
    {
      label: "View Profile",
      icon: <Avatar className="h-8 w-8" />,
      user: user?.username,
    },
    {
      icon: <ArrowLeftEndOnRectangleIcon className="h-6 w-6 text-gray-400" />,
      label: "Log Out",
      onClick: () => {
        navigate("/logout", { state: { redirectTime: 3000 } });
        logout();
      },
    },

    {
      label: "Settings",
      icon: <Cog8ToothIcon className="h-6 w-6 text-gray-400" />,
      onClick: () => navigate("/user/settings"),
    },
  ];

  return (
    <Container className="flex items-center space-x-4">
      <ChatBubbleOvalLeftEllipsisIcon className="h-12 w-12 text-white hover:scale-110 active:scale-100" />
      <Container
        className="flex items-center rounded-full px-2 ring-gray-400 hover:cursor-pointer hover:ring-1"
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => navigate("/create")}
      >
        <PlusIcon className="h-8 w-8 text-white" />
        <Paragraph className="ml-1 text-sm text-white">Create</Paragraph>
      </Container>
      <div className="flex h-12 w-12 items-center">
        {isHoveringOnBell ? (
          <NotificationAlert
            isVisible={isHoveringOnBell}
            onMouseLeave={() => setIsHoveringOnBell(false)}
          />
        ) : (
          <BellIcon
            className="text-white"
            onMouseOver={() => setIsHoveringOnBell(true)}
            onMouseLeave={() => setIsHoveringOnBell(false)}
          />
        )}
      </div>
      <Container>
        <Dropdown
          className="z-50 divide-y divide-gray-700"
          ref={ref}
          icon={<Avatar />}
          open={isDropdownVisible}
          setOpen={setIsDropdownVisible}
        >
          {profileSettings.map((item) => (
            <DropdownItem
              key={item.label}
              className="flex items-center space-x-2 px-2 py-3"
              onClick={item.onClick}
            >
              <Icon icon={item.icon} />
              <Paragraph className="m-0 text-sm text-white">
                {item.label}
              </Paragraph>
            </DropdownItem>
          ))}
        </Dropdown>
      </Container>
    </Container>
  );
};
