import {
  Container,
  Link,
  Paragraph,
  TabContent,
  TabContentContaier,
  TabHeader,
  TabHeaderContaier,
  Tabs,
} from "@components";
import {
  LinkIcon,
  ListBulletIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import {
  PencilSquareIcon as PencilSquareIconOutline,
  PhotoIcon as PhotoIconOutline,
  LinkIcon as LinkIconOutline,
  ListBulletIcon as ListBulletIconOutline,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, useState } from "react";
import { Post } from "./Post";
import { CommunityFragment } from "@graphql/gen/graphql";

export const CreatePost = ({
  selectedCommunity,
}: {
  selectedCommunity: CommunityFragment;
}): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <Tabs>
      <TabHeaderContaier className="mt-3">
        <TabHeader activeTab={activeTab === 0} onClick={() => setActiveTab(0)}>
          {activeTab === 0 ? (
            <PencilSquareIcon className="h-6 w-6" />
          ) : (
            <PencilSquareIconOutline className="h-6 w-6" />
          )}
          <Paragraph>Post</Paragraph>
        </TabHeader>
        <TabHeader activeTab={activeTab === 1} onClick={() => setActiveTab(1)}>
          {activeTab === 1 ? (
            <PhotoIcon className="h-6 w-6" />
          ) : (
            <PhotoIconOutline className="h-6 w-6" />
          )}
          <Paragraph>Image & Video</Paragraph>
        </TabHeader>
        <TabHeader activeTab={activeTab === 2} onClick={() => setActiveTab(2)}>
          {activeTab === 2 ? (
            <LinkIcon className="h-6 w-6" />
          ) : (
            <LinkIconOutline className="h-6 w-6" />
          )}
          <Paragraph>Link</Paragraph>
        </TabHeader>
        <TabHeader activeTab={activeTab === 3} onClick={() => null}>
          {activeTab === 3 ? (
            <ListBulletIcon className="h-6 w-6" />
          ) : (
            <ListBulletIconOutline className="h-6 w-6" />
          )}
          <Paragraph>Poll</Paragraph>
        </TabHeader>
      </TabHeaderContaier>
      <TabContentContaier>
        <TabContent tabId={0} activeTab={activeTab}>
          {activeTab === 0 && (
            <>
              <Post communityId={selectedCommunity.id} />
              <Container className="flex flex-col space-y-2 rounded-b-md bg-[#272729] p-3">
                <Container className="flex items-center space-x-2">
                  <input type="checkbox" />
                  <Paragraph className="text-sm">
                    Send me post reply notifications
                  </Paragraph>
                </Container>
                <Container className="flex items-center space-x-2">
                  <Link to="#" className="text-sm text-sky-500">
                    Connect accounts to share your post
                  </Link>
                  <InformationCircleIcon className="text-description h-7 w-7" />
                </Container>
              </Container>
            </>
          )}
        </TabContent>
        <TabContent tabId={1} activeTab={activeTab}>
          {activeTab === 1 && (
            <Container className="text-sm text-white">test</Container>
          )}
        </TabContent>
        <TabContent tabId={2} activeTab={activeTab}>
          {activeTab === 2 && (
            <Container className="text-sm text-white">test</Container>
          )}
        </TabContent>
      </TabContentContaier>
    </Tabs>
  );
};
