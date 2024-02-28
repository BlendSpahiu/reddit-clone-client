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
  useGetCommunityByUserIdQuery,
  useGetDraftPostsQuery,
} from "@graphql/gen/graphql";
import { useAuth, useOnClickOutside } from "@hooks";
import { ReactElement, useEffect, useRef, useState } from "react";
import { CreateCommunity } from "./CreateCommunity";
import { gqlVar } from "@utils";
import { CreatePost } from "./CreatePost";
import { DraftsModal } from "./DraftsModal";

export const Create = (): ReactElement => {
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityFragment>(
    {} as CommunityFragment,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDraftsModalOpen, setIsDraftsModalOpen] = useState<boolean>(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const { user } = useAuth();
  const { data, refetch } = useGetCommunityByUserIdQuery({
    variables: { userId: user?.id },
  });
  const { data: draftPosts } = useGetDraftPostsQuery();

  useOnClickOutside(ref, () => setIsOpen(false));

  const options = data?.communities.map((community) => community) || [];

  useEffect(() => {
    if (isOpen) {
      refetch({ userId: user?.id });
    }
  }, [isOpen]);

  return (
    <>
      <Container className="mx-[300px] mt-10">
        <Container className="flex items-center justify-between text-sm text-white">
          <Paragraph className="text-lg">Create a post</Paragraph>
          <Container
            whileTap={{
              scale: 0.9,
            }}
            onClick={() => setIsDraftsModalOpen(!isDraftsModalOpen)}
            className="rounded-full px-3 py-1 transition-all hover:cursor-pointer hover:bg-base hover:ring-1 hover:ring-gray-400"
          >
            <Paragraph>
              DRAFTS{" "}
              <Span className="rounded-sm bg-gray-500 p-1 text-black">
                {draftPosts?.draft_posts_aggregate.aggregate?.count || 0}
              </Span>
            </Paragraph>
          </Container>
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

      {isDraftsModalOpen && (
        <DraftsModal
          draftPosts={draftPosts}
          onClick={() => setIsDraftsModalOpen(false)}
        />
      )}
    </>
  );
};
