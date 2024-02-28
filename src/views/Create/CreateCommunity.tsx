import {
  Badge,
  Button,
  Checkbox,
  Container,
  Form,
  Input,
  Label,
  Modal,
  Paragraph,
  Portal,
  RadioInput,
  Span,
} from "@components";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { EyeIcon, LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import { ForwardedRef, ReactElement, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { CommunityTypes, ToastrTypes } from "@enums";
import { joiResolver } from "@hookform/resolvers/joi";
import { CreateCommunityValidator } from "@validators";
import { CreateCommunityProps } from "./Communities.props";
import classNames from "classnames";
import { useCreateCommunityMutation } from "@graphql/gen/graphql";
import { useAuth, useToast } from "@hooks";
import { getGraphQLErrorMessage } from "@utils";

interface CreateCommunityInputs {
  name: string;
  type: number;
  isNSFW: boolean;
}

export const CreateCommunity = ({
  isOpen,
  onClose,
}: CreateCommunityProps): ReactElement => {
  const [communityType, setCommunityType] = useState<number>(
    CommunityTypes.PUBLIC,
  );

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<CreateCommunityInputs>({
    resolver: joiResolver(CreateCommunityValidator()),
    defaultValues: {
      type: CommunityTypes.PUBLIC,
      isNSFW: false,
    },
  });

  const { addToast } = useToast();
  const { user } = useAuth();
  const { name, type, isNSFW } = useWatch({ control });

  const [insertCommunityMutation, { loading }] = useCreateCommunityMutation({
    onCompleted: (data) => {
      addToast({
        type: ToastrTypes.SUCCESS,
        content: `Successfully created ${data.insert_communities_one?.name}!`,
        title: "Community",
      });
      onClose();
    },
    onError: (data) => {
      addToast({
        type: ToastrTypes.ERROR,
        content: getGraphQLErrorMessage(data),
        title: "Community",
      });
    },
  });

  const onSubmit = (data: CreateCommunityInputs) => {
    console.log(data, errors);
    insertCommunityMutation({
      variables: {
        object: {
          name: data.name,
          isNSFW: data.isNSFW,
          type: data.type,
          user_id: user?.id,
        },
      },
    });
  };

  return (
    <Portal onClose={onClose}>
      <AnimatePresence>
        {isOpen && (
          <Container
            key="create"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 right-0 top-20 mx-auto w-[600px] rounded-md border border-[#2e2e2f] bg-[#1a1a1b] text-white last:p-0"
          >
            <Container className="mx-5 mb-4 flex items-center justify-between border-b border-[#2e2e2f] py-5">
              <Paragraph className=" text-sm text-white">
                Create a community
              </Paragraph>
              <Container
                whileTap={{
                  scale: 0.95,
                }}
                whileHover={{
                  boxShadow: "0 0 2px 2px #7c7c7e",
                }}
                className="h-6 w-6 rounded-full"
                onClick={onClose}
              >
                <XMarkIcon className="text-gray-500" />
              </Container>
            </Container>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Container className="p-5">
                <Container className="mb-5 flex flex-col">
                  <Label htmlFor="name">Name</Label>
                  <Span className="flex items-center text-xs text-[#6e7071]">
                    Community names including capitalization cannot be changed{" "}
                    <InformationCircleIcon className="ml-2 h-4 w-4 text-[#6e7071]" />
                  </Span>
                </Container>
                <Container className="flex flex-col">
                  <Input
                    className="rounded-md border border-[#2e2e2f] !bg-[#1a1a1b] py-1.5"
                    name="name"
                    prefix="r/"
                    register={register}
                  />
                  <Paragraph className="mt-4 text-xs text-description">
                    {21 - (name?.length || 0)} Characters remaining
                  </Paragraph>
                  {errors.name && (
                    <Paragraph className="text-xs text-error">
                      {errors.name.message}
                    </Paragraph>
                  )}
                </Container>
              </Container>

              <Container className="mt-4 flex flex-col space-y-5 p-5">
                <Paragraph className="">Community type</Paragraph>
                <Container className="mt-3 flex items-center">
                  <RadioInput
                    name="type"
                    value={CommunityTypes.PUBLIC}
                    register={register}
                  />
                  <motion.div
                    onClick={() => setValue("type", CommunityTypes.PUBLIC)}
                    whileHover={{
                      cursor: "pointer",
                      boxShadow: "0 0 2px 2px #818384",
                    }}
                    className={classNames(
                      "flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#818384]",
                      type === CommunityTypes.PUBLIC
                        ? "border-transparent bg-[#2c7bd3]"
                        : "",
                    )}
                    role="radio"
                  >
                    <AnimatePresence>
                      {type === CommunityTypes.PUBLIC && (
                        <motion.div
                          key="circle"
                          className="absolute h-1.5 w-1.5 rounded-full bg-base"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                  <Container className="ml-2 flex items-center space-x-2">
                    <UserIcon className="h-5 w-5 text-[#818384]" />
                    <Paragraph className="text-sm">Public</Paragraph>
                    <Span className="text-xs text-description">
                      Anyone can view, post, and comment to this community
                    </Span>
                  </Container>
                </Container>
                <Container className="mt-3 flex items-center">
                  <RadioInput
                    name="type"
                    value={CommunityTypes.RESTRICTED}
                    register={register}
                  />
                  <motion.div
                    onClick={() => setValue("type", CommunityTypes.RESTRICTED)}
                    whileHover={{
                      cursor: "pointer",
                      boxShadow: "0 0 2px 2px #818384",
                    }}
                    className={classNames(
                      "flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#818384]",
                      type === CommunityTypes.RESTRICTED
                        ? "border-transparent bg-[#2c7bd3]"
                        : "",
                    )}
                    role="radio"
                  >
                    {type === CommunityTypes.RESTRICTED && (
                      <motion.div className="absolute h-1.5 w-1.5 rounded-full bg-base" />
                    )}
                  </motion.div>
                  <Container className="ml-2 flex items-center space-x-2">
                    <EyeIcon className="h-5 w-5 text-[#818384]" />
                    <Paragraph className="text-sm">Restricted</Paragraph>
                    <Span className="text-xs text-description">
                      Anyone can view this community, but only approved users
                      can post
                    </Span>
                  </Container>
                </Container>
                <Container className="mt-3 flex items-center">
                  <RadioInput
                    name="type"
                    value={CommunityTypes.PRIVATE}
                    register={register}
                  />
                  <motion.div
                    onClick={() => setValue("type", CommunityTypes.PRIVATE)}
                    whileHover={{
                      cursor: "pointer",
                      boxShadow: "0 0 2px 2px #818384",
                    }}
                    className={classNames(
                      "flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#818384]",
                      type === CommunityTypes.PRIVATE
                        ? "border-transparent bg-[#2c7bd3]"
                        : "",
                    )}
                    role="radio"
                  >
                    {type === CommunityTypes.PRIVATE && (
                      <motion.div className="absolute h-1.5 w-1.5 rounded-full bg-base" />
                    )}
                  </motion.div>
                  <Container className="ml-2 flex items-center space-x-2">
                    <LockClosedIcon className="h-5 w-5 text-[#818384]" />
                    <Paragraph className="text-sm">Private</Paragraph>
                    <Span className="text-xs text-description">
                      Only approved users can view and submit to this community
                    </Span>
                  </Container>
                </Container>
              </Container>

              <Container className="mt-10 p-5">
                <Paragraph className="mb-2">Adult content</Paragraph>
                <Container className="flex items-center space-x-2">
                  <Checkbox name="isNSFW" register={register} />
                  <Container
                    role="checkbox"
                    className={classNames(
                      "h-6 w-6 rounded-md",
                      !isNSFW ? "border-2 border-[#818384]" : "",
                    )}
                    onClick={() => setValue("isNSFW", !isNSFW)}
                  >
                    {isNSFW && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        className="rounded-md bg-base"
                      >
                        <path
                          fill="#2c7bd3"
                          d="M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
                        ></path>
                      </svg>
                    )}
                  </Container>
                  <Badge
                    badgeVariant="nsfw"
                    onClick={() => setValue("isNSFW", !isNSFW)}
                  >
                    NSFW
                  </Badge>
                  <Paragraph className="text-xs font-semibold">
                    18+ year old community
                  </Paragraph>
                </Container>
              </Container>
              <Container className="flex items-center justify-end space-x-2 bg-[#343536] py-4 pr-3">
                <Button
                  whileHover={{
                    opacity: 0.7,
                  }}
                  onClick={onClose}
                  className="rounded-full border border-gray-300 bg-transparent px-4 py-1 text-sm"
                  buttonVariant="none"
                >
                  Cancel
                </Button>
                <Button
                  isLoading={loading}
                  whileHover={{
                    opacity: 0.8,
                  }}
                  type="submit"
                  className="rounded-full bg-[#d7dadc] px-4 py-1 text-[#000]"
                  buttonVariant="none"
                >
                  Create Community
                </Button>
              </Container>
            </Form>
          </Container>
        )}
      </AnimatePresence>
    </Portal>
  );
};
