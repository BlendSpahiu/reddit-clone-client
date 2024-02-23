import { CommunityFragment } from "@graphql/gen/graphql";

export interface CreateCommunityProps {
  isOpen?: boolean;
  onClose: () => void;
}
