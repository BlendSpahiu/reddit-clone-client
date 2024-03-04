import { ReactElement, useEffect, useRef, useState } from "react";
import {
  Badge,
  CommunityAvatar,
  Container,
  Heading,
  Link,
  Paragraph,
  Preloader,
  Span,
} from "@components";
import { EmptyState } from "@containers";
import { ToastrTypes } from "@enums";
import {
  Order_By,
  useGetPostWithVotesQuery,
  useGetPostsSubscription,
  useUpdatePostVoteMutation,
  useVotePostMutation,
} from "@graphql/gen/graphql";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowUpTrayIcon,
  BookmarkIcon,
  ChatBubbleLeftIcon,
  EyeSlashIcon,
  FlagIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { useAuth, useOnClickOutside, useToast } from "@hooks";
import {
  getGraphQLErrorMessage,
  getPostDateCreated,
  getShortPostContent,
  gqlVar,
} from "@utils";
import axios from "axios";
import classNames from "classnames";
import { Dropdown } from "./Dropdown";

export const Home = (): ReactElement => {
  const [images, setImages] = useState<
    {
      id: number;
      base64Image: string;
      post_id: string;
    }[]
  >([]);

  const ref = useRef<HTMLDivElement | null>(null);

  const { addToast } = useToast();
  const { user, isAuthenticated, setIsLogin } = useAuth();

  const { Desc } = Order_By;

  const { data, loading } = useGetPostsSubscription({
    onData: async () => {
      const response = await axios.get(
        "https://65dfae79ff5e305f32a2f6b1.mockapi.io/api/v1/images",
      );
      setImages(response.data);
    },
    variables: {
      orderBy: { created_at: Desc },
    },
  });
  const [votePostMutation] = useVotePostMutation();
  const [updateVotePostMutation] = useUpdatePostVoteMutation();

  const handleVotePost = (
    voteExists: boolean,
    postId: string,
    vote: number,
  ) => {
    if (!voteExists) {
      votePostMutation({
        variables: {
          postId,
          vote,
          userId: user?.id,
        },
      });
    } else {
      updateVotePostMutation({
        variables: {
          postId,
          vote,
        },
      });
    }
  };

  const isPostCreator = !!data?.posts.find(
    (post) => post.user?.id === user?.id,
  );

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

  return (
    <Container className="h-full w-full">
      {data?.posts.length === 0 && <EmptyState className="mt-40" />}
      {loading ? (
        [1, 2, 3].map(() => <Preloader />)
      ) : (
        <>
          {data?.posts.map((post) => {
            const image = images.find((img) => img.post_id === post.id);

            const voteExists = post.voted_posts.find(
              (vote) => vote.post_id === post.id,
            );

            console.log(voteExists);

            return (
              <Container
                key={post.id}
                className="mx-10 my-5 border-y border-gray-700 px-5 py-5"
                whileHover={{
                  boxShadow: "0 0 5px white",
                }}
              >
                <Container className="flex items-center justify-between">
                  <Container className="flex items-center space-x-2">
                    <CommunityAvatar communityName="leagueoflegends" />
                    <Paragraph className="text-xs text-[#bac5c4] hover:cursor-pointer">
                      r/{post.community?.name}
                    </Paragraph>
                    <Span className="text-white">•</Span>
                    <Span className="text-xs text-gray-400">
                      {getPostDateCreated(post.created_at)}
                    </Span>
                  </Container>
                  <Container className="flex items-center space-x-4">
                    {!user?.communities.find(
                      (v) => v.id === post.community?.id,
                    ) && (
                      <Badge
                        onClick={() => {
                          if (!isAuthenticated) {
                            setIsLogin(true);
                          }
                        }}
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
                    <Dropdown
                      postId={post.id}
                      isPostCreator={isPostCreator}
                      dropdownMenu={dropdownMenu}
                    />
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
                  <Link to={post.link || ""}>{post.link}</Link>
                  {image?.base64Image && (
                    <Container className="flex items-center justify-center bg-[#111111]">
                      <img alt="Post" src={image?.base64Image || ""} />
                    </Container>
                  )}
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
                        handleVotePost(!!voteExists, post.id, 1);
                      }}
                    >
                      <ArrowUpIcon
                        className={classNames(
                          "h-5 w-5 hover:stroke-orange-500",
                          voteExists?.user_id === user?.id &&
                            voteExists?.vote === 1
                            ? "stroke-orange-500"
                            : "stroke-current",
                        )}
                      />
                    </Container>
                    <Paragraph>
                      {post.voted_posts.reduce(
                        (a, b) => (a.vote || 0) - (b.vote || 0),
                      ).vote || 0}
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
                        onClick={() => {
                          handleVotePost(!!voteExists, post.id, -1);
                        }}
                        className={classNames(
                          "h-5 w-5 hover:stroke-indigo-400",
                          voteExists?.user_id === user?.id &&
                            voteExists?.vote === -1
                            ? "stroke-indigo-500"
                            : "stroke-current",
                        )}
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
        </>
      )}
    </Container>
  );
};
