import {
  Container,
  Divider,
  Dropdown,
  DropdownItem,
  Option,
  Select,
  Paragraph,
  SelectMenu,
  Span,
  SelectTrigger,
  SelectItem,
  CommunityAvatar,
} from "@components";
import {
  CommunityFragment,
  useGetCommunitiesQuery,
} from "@graphql/gen/graphql";
import { useAuth, useOnClickOutside } from "@hooks";
import { ReactElement, useRef, useState } from "react";
import { CreateCommunity } from "./CreateCommunity";
import { gqlVar } from "@utils";
import { CreatePost } from "./CreatePost";

export const CreateContainer = (): ReactElement => {
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityFragment>(
    {} as CommunityFragment,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const { user } = useAuth();

  useOnClickOutside(ref, () => setIsOpen(false));

  const options = user ? user?.communities.map((community) => community) : [];

  return (
    <>
      <Container className="mx-[300px] mt-10">
        <Container className="flex items-center justify-between text-sm text-white">
          <Paragraph className="text-lg">Create a post</Paragraph>
          <Paragraph>
            DRAFTS{" "}
            <Span className="rounded-sm bg-gray-500 p-1 text-black">0</Span>
          </Paragraph>
        </Container>
        <Divider className="py-5" />

        <Select ref={ref} className="mt-1 w-1/3">
          <SelectTrigger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <Paragraph className="text-sm">
              {selectedCommunity.name || "Choose a community"}
            </Paragraph>
          </SelectTrigger>
          <SelectMenu
            isOpen={isOpen}
            onCreate={() => {
              setIsCreateModalOpen(true);
              setIsOpen(false);
            }}
          >
            {options.map((option) => (
              <SelectItem
                key={option.id}
                className="flex items-center space-x-4"
                onClick={() => {
                  setSelectedCommunity(option);
                  setIsOpen(false);
                }}
              >
                <CommunityAvatar communityName={option.name} />
                <Container className="flex flex-col">
                  <Paragraph className="text-sm ">{option.name}</Paragraph>
                  <Paragraph className="text-xs text-description">
                    {options.length} members
                  </Paragraph>
                </Container>
              </SelectItem>
            ))}
          </SelectMenu>
        </Select>
        <CreatePost selectedCommunity={selectedCommunity} />
      </Container>

      {isCreateModalOpen && (
        <CreateCommunity
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </>
  );
};
