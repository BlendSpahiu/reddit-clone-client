import {
  Badge,
  CommunityAvatar,
  Container,
  DownvoteIcon,
  Heading,
  Icon,
  Menu,
  MenuItem,
  Paragraph,
  Span,
  UpvoteIcon,
} from "@components";
import {
  useDeleteUpvotedPostMutation,
  useDownvotePostMutation,
  useGetAllPostsQuery,
  useGetPostsSubscription,
  useGetUpvotedPostsQuery,
  useUpvotePostMutation,
} from "@graphql/gen/graphql";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpTrayIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  EyeSlashIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import { useAuth, useOnClickOutside, useToast } from "@hooks";
import {
  customDateFormat,
  getGraphQLErrorMessage,
  getPostDateCreated,
  getShortPostContent,
} from "@utils";
import classNames from "classnames";
import { ToastrTypes } from "@enums";
import moment from "moment";
import { ReactElement, useRef, useState } from "react";
import { EmptyState } from "@containers";
import { Dropdown } from "./Dropdown";

export const Home = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement | null>(null);

  const dropdownMenu = [
    {
      icon: <BookmarkIcon className="h-5 w-5 text-white" />,
      label: "Save",
    },
    {
      icon: <EyeSlashIcon className="h-5 w-5 text-white" />,
      label: "Hide",
    },
    {
      icon: <FlagIcon className="h-5 w-5 text-white" />,
      label: "Report",
    },
  ];

  const { addToast } = useToast();
  const { user, isAuthenticated } = useAuth();
  useOnClickOutside(ref, () => setIsOpen(false));

  const { data } = useGetPostsSubscription();
  const { data: upvotedPosts } = useGetUpvotedPostsQuery({
    skip: !user?.id,
    variables: { userId: user?.id },
  });
  const [upvoteMutation] = useUpvotePostMutation({
    onCompleted: () => {
      setIsUpvoted(true);
    },
    onError: (error) => {
      addToast({
        title: "Something went wrong",
        content: getGraphQLErrorMessage(error),
        type: ToastrTypes.ERROR,
      });
    },
  });
  const [deleteUpvotedPostMutation] = useDeleteUpvotedPostMutation({
    onCompleted: () => null,
    onError: () => null,
  });
  const [downvoteMutation] = useDownvotePostMutation({
    onCompleted: () => {
      setIsUpvoted(true);
    },
    onError: (error) => {
      addToast({
        title: "Something went wrong",
        content: getGraphQLErrorMessage(error),
        type: ToastrTypes.ERROR,
      });
    },
  });

  console.log(upvotedPosts?.upvoted_posts);

  return (
    <Container className="h-full w-full">
      {data?.posts.length === 0 && <EmptyState className="mt-40" />}
      {data?.posts.map((post) => {
        const upvotedPost = upvotedPosts?.upvoted_posts.find(
          (p) => p.user_id === user?.id,
        );
        return (
          <Container
            key={post.id}
            className="mx-10 my-5 border-y border-gray-700 px-5 py-5"
            whileHover={{
              boxShadow: "0 0 5px white",
            }}
          >
            <Container className="flex items-center justify-between">
              <Container className="flex items-center space-x-1">
                <CommunityAvatar communityName="leagueoflegends" />
                <Paragraph className="text-xs text-[#bac5c4] hover:cursor-pointer">
                  {post.community.name}
                </Paragraph>
                <Span className="text-white">•</Span>
                <Span className="text-xs text-gray-400">
                  {getPostDateCreated(post.created_at)}
                </Span>
              </Container>
              <Container className="flex items-center space-x-4">
                {!user?.communities.find((v) => v.id === post.community.id) && (
                  <Badge
                    className="cursor-pointer rounded-full"
                    initial={{ background: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{
                      background: "#3b82f6",
                    }}
                  >
                    Join
                  </Badge>
                )}
                <Dropdown dropdownMenu={dropdownMenu} />
              </Container>
            </Container>
            <Container className="flex flex-col space-y-3">
              <Heading
                heading="h1"
                className="mt-3 text-xl text-white hover:cursor-pointer"
              >
                {post.title}
              </Heading>
              <Paragraph className="text-sm text-[#bac5c4]">
                {getShortPostContent(post.content || "")}
              </Paragraph>
            </Container>
            <Container className="mt-3 flex items-center space-x-4">
              <Badge
                className="flex items-center space-x-2 rounded-full bg-[#1c282d] !p-0"
                badgeVariant="none"
              >
                <Container
                  layout
                  className="rounded-full p-2"
                  whileTap={{ scale: 0.95 }}
                  initial={{
                    background: "#1c282d",
                  }}
                  whileHover={{
                    background: "#374151",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (upvotedPost) {
                      deleteUpvotedPostMutation({
                        variables: { postId: post.id },
                      });
                      return;
                    }
                    upvoteMutation({
                      variables: { postId: post.id, userId: user?.id },
                    });
                  }}
                >
                  <ArrowUpIcon
                    className={classNames(
                      "h-5 w-5 hover:stroke-orange-500",
                      upvotedPost ? "stroke-orange-500" : "stroke-current",
                    )}
                  />
                </Container>
                <Paragraph>
                  {isAuthenticated ? post.upvotes - post.downvotes : 0}
                </Paragraph>
                <Container
                  layout
                  className="rounded-full p-2"
                  whileTap={{ scale: 0.95 }}
                  initial={{
                    background: "#1c282d",
                  }}
                  whileHover={{
                    background: "#374151",
                    cursor: "pointer",
                  }}
                >
                  <ArrowDownIcon
                    onClick={() => {}}
                    className={"h-5 w-5 hover:stroke-indigo-400"}
                  />
                </Container>
              </Badge>
              <Badge
                className="flex items-center space-x-2 rounded-full bg-[#1c282d] !py-2"
                badgeVariant="none"
              >
                <ChatBubbleLeftIcon className="h-5 w-5 " />
                <Paragraph>
                  {post.comments_aggregate.aggregate?.count}
                </Paragraph>
              </Badge>
              <Badge
                className="flex items-center space-x-2 rounded-full bg-[#1c282d] !py-2"
                badgeVariant="none"
              >
                <ArrowUpTrayIcon className="h-5 w-5" />
                <Paragraph>Share</Paragraph>
              </Badge>
            </Container>
          </Container>
        );
      })}
    </Container>
  );
};
