import {
  Button,
  Container,
  Menu,
  MenuItem,
  Paragraph,
  Portal,
} from "@components";
import {
  EllipsisHorizontalIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, ReactNode, useState } from "react";
import { HomeDropdownProps } from "./Home.props";
import { useDeletePostMutation } from "@graphql/gen/graphql";
import { useToast } from "@hooks";
import { ToastrTypes } from "@enums";
import { getGraphQLErrorMessage } from "@utils";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Dropdown = ({
  postId,
  dropdownMenu,
  isPostCreator,
}: HomeDropdownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { addToast } = useToast();

  const [deletePostMutation] = useDeletePostMutation({
    variables: { postId },
    onCompleted: () => {
      addToast({
        type: ToastrTypes.SUCCESS,
        title: "Delete post",
        content: "Post deleted successfully.",
      });
    },
    onError: (err) => {
      addToast({
        type: ToastrTypes.ERROR,
        title: "Delete post",
        content: getGraphQLErrorMessage(err),
      });
    },
  });

  return (
    <>
      <Menu
        className="test flex items-center rounded-full  px-3 py-1 outline-none hover:ring-gray-300"
        menuClassName="bg-base text-sm text-white border-[#747474] right-4"
        label={
          <EllipsisHorizontalIcon className="h-6 w-6 rounded-full text-[#fff] transition-all hover:ring-1 hover:ring-[#747474]" />
        }
        open={isOpen}
        setOpen={setIsOpen}
      >
        {dropdownMenu.map((item) => (
          <MenuItem
            initial={{
              background: "#1a1a1b",
            }}
            whileHover={{
              background: "#747474",
            }}
          >
            {item.icon}
            <Paragraph>{item.label}</Paragraph>
          </MenuItem>
        ))}
        {isPostCreator && (
          <>
            <MenuItem
              onClick={() => navigate(`/edit/${postId}`)}
              initial={{
                background: "#1a1a1b",
              }}
              whileHover={{
                background: "#747474",
              }}
            >
              <PencilIcon className="h-5 w-5 text-white" />
              <Paragraph>Edit</Paragraph>
            </MenuItem>
            <MenuItem
              onClick={() => setIsDeleteModalOpen(true)}
              initial={{
                background: "#1a1a1b",
              }}
              whileHover={{
                background: "#747474",
              }}
            >
              <TrashIcon className="h-5 w-5 text-white" />
              <Paragraph>Delete</Paragraph>
            </MenuItem>
          </>
        )}
      </Menu>

      <AnimatePresence>
        {isDeleteModalOpen && (
          <Portal onClose={() => setIsDeleteModalOpen(false)}>
            <Container
              key="create"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute left-0 right-0 top-20 mx-auto w-[600px] rounded-md border border-[#747474] bg-[#1a1a1b] p-5 text-white last:p-0"
            >
              <Container className="flex items-center space-x-2 px-5 py-10 text-sm">
                <ExclamationTriangleIcon className="h-16 w-16 text-red-500" />
                <Paragraph>
                  Are you sure you want to delete this post? This action cannot
                  be reverted.
                </Paragraph>
              </Container>
              <Container className="flex items-center justify-end space-x-4 rounded-b-lg border-t border-t-[#747474] bg-[#1b1b1b] p-5">
                <Button
                  onClick={() => setIsDeleteModalOpen(false)}
                  buttonVariant="none"
                  className="rounded-full border border-[#747474] px-4 py-1.5"
                  initial={{
                    background: "#1b1b1b",
                  }}
                  whileHover={{
                    background: "#3b3b3b",
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() =>
                    deletePostMutation({
                      variables: {
                        postId,
                      },
                    })
                  }
                  buttonVariant="none"
                  className="rounded-full border border-red-500 px-4 py-1.5 text-error"
                  initial={{
                    background: "#1b1b1b",
                  }}
                  whileHover={{
                    background: "#f87171",
                    color: "#fff",
                  }}
                >
                  Delete
                </Button>
              </Container>
            </Container>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
};
