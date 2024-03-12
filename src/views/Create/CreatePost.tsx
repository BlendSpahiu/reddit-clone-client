import {
  Container,
  If,
  Link,
  Paragraph,
  TabContent,
  TabContentContaier,
  TabHeader,
  TabHeaderContaier,
  Tabs,
  Ternary,
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
import { PostValidatorSchema } from "@validators";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { PostInputs } from "@interfaces";
import { useParams } from "react-router-dom";
import { EditPost } from "./EditPost";

export const CreatePost = ({
  selectedCommunity,
}: {
  selectedCommunity: CommunityFragment;
}): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const params = useParams();
  console.log(params);

  const formProps = useForm<PostInputs>({
    resolver: joiResolver(PostValidatorSchema()),
  });

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
        <TabContent tabId={activeTab} activeTab={activeTab}>
          <Ternary
            condition={!!params.postId?.toString()}
            fallback={
              <Post
                formProps={formProps}
                activeTab={activeTab}
                communityId={selectedCommunity.id}
              />
            }
          >
            <EditPost
              formProps={formProps}
              activeTab={activeTab}
              communityId={selectedCommunity.id}
              postId={params.postId?.toString() || ""}
            />
          </Ternary>
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
              <InformationCircleIcon className="h-7 w-7 text-description" />
            </Container>
          </Container>
        </TabContent>
      </TabContentContaier>
    </Tabs>
  );
};
