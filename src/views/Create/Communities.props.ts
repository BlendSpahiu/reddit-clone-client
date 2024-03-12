import { GetDraftPostsQuery } from "@graphql/gen/graphql";
import { PostInputs } from "@interfaces";
import { UseFormReturn } from "react-hook-form";

export interface CreateCommunityProps {
  isOpen?: boolean;
  onClose: () => void;
}

export interface PostProps {
  activeTab: number;
  communityId: number;
  formProps: UseFormReturn<PostInputs>;
}

export interface EditPostProps extends PostProps {
  postId: string;
}

export interface DraftsModalProps {
  onClick: () => void;
  draftPosts: GetDraftPostsQuery | undefined;
}
