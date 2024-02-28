import { Container, Paragraph, Span } from "@components";
import { DraftPostFragment } from "@graphql/gen/graphql";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import { ReactElement } from "react";
import { createPortal } from "react-dom";
import { DraftsModalProps } from "./Communities.props";

export const DraftsModal = ({
  onClick,
  draftPosts,
}: DraftsModalProps): ReactElement => {
  const portal = document.getElementById("portal");
  return createPortal(
    <>
      <Container className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-75" />
      <AnimatePresence>
        <Container className="absolute left-0 right-0 top-20 z-50 mx-auto w-[600px] rounded-md border border-[#747474] bg-base">
          <Container className="flex items-center justify-between border-b border-[#747474] p-2">
            <Container className="bo flex items-center space-x-4 ">
              <Paragraph className="text-sm text-white">Drafts</Paragraph>
              <Span className="text-sm text-description">
                {draftPosts?.draft_posts_aggregate.aggregate?.count || 0}/20
              </Span>
            </Container>
            <Container onClick={onClick}>
              <XMarkIcon className="h-5 w-5 text-gray-300" />
            </Container>
          </Container>
          <Container className="flex items-center justify-center">
            {draftPosts?.draft_posts_aggregate.aggregate?.count === 0 ? (
              <img
                className="p-24"
                src="https://www.redditstatic.com/desktop2x/img/snoo-drafts.png"
              />
            ) : (
              <Container>Test</Container>
            )}
          </Container>
        </Container>
      </AnimatePresence>
    </>,
    portal as HTMLElement,
  );
};
