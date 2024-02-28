import {
  CommunityFragment,
  DraftPostFragment,
  GetDraftPostsQuery,
} from "@graphql/gen/graphql";
import { PostInputs } from "@interfaces";
import { Dispatch, SetStateAction } from "react";
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

export interface DraftsModalProps {
  onClick: () => void;
  draftPosts: GetDraftPostsQuery | undefined;
}
