import { ReactElement, useEffect, useRef, useState } from "react";
import { MotionProps, Variants, motion } from "framer-motion";
import {
  Badge,
  Bold,
  Button,
  Checkbox,
  Container,
  CustomTextarea,
  Divider,
  Dropdown,
  DropdownItem,
  Form,
  Icon,
  Input,
  Menu,
  MenuItem,
  Paragraph,
  Span,
  Textarea,
} from "@components";
import { useForm, useWatch } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { PostValidatorSchema } from "@validators";
import { ChevronDownIcon, LinkIcon, PlusIcon } from "@heroicons/react/24/solid";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import classNames from "classnames";
import { TagIcon } from "@heroicons/react/24/outline";
import { useCreatePostMutation } from "@graphql/gen/graphql";
import { useAuth, useToast } from "@hooks";
import { ToastrTypes } from "@enums";
import { getGraphQLErrorMessage } from "@utils";

interface PostInputs {
  title: string;
  description: string;
  isOC?: boolean;
  isSpoiler?: boolean;
  isNSFW?: boolean;
}

export const Post = ({
  communityId,
}: {
  communityId: string;
}): ReactElement => {
  const [isFlairOpen, setIsFlairOpen] = useState<boolean>(false);
  const [markup, setMarkup] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    control,
    handleSubmit,
  } = useForm<PostInputs>({
    resolver: joiResolver(PostValidatorSchema()),
  });

  const textareaRef = useRef<HTMLDivElement | null>(null);

  const { addToast } = useToast();
  const { user } = useAuth();
  const { title } = useWatch({ control });

  const handleSetMarkup = (markupClassname: string) => {
    if (markupClassname === "inline-code") {
      setMarkup([markupClassname]);
      return;
    }
    if (markup.includes(markupClassname)) {
      setMarkup(markup.filter((m) => m !== markupClassname));
      return;
    }
    setMarkup([...markup, markupClassname]);
    const newText = document.createElement("span");
    newText.classList.add(markupClassname);
    newText.innerText = textareaRef.current?.innerText || "";
    textareaRef.current?.appendChild(newText);
  };

  const [insertPostMutation, { loading }] = useCreatePostMutation({
    onCompleted: () => {},
    onError: (err) => {
      addToast({
        type: ToastrTypes.ERROR,
        title: "Create post",
        content: getGraphQLErrorMessage(err),
      });
    },
  });

  const onSubmit = (data: PostInputs) => {
    console.log(data, errors);
    insertPostMutation({
      variables: {
        object: {
          title: data.title,
          content: data.description,
          isNSFW: data.isNSFW,
          isSpoiler: data.isSpoiler,
          isOriginalContent: data.isOC,
          user_id: user?.id,
          community_id: communityId,
        },
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="px-3 py-4">
      <Container className="flex flex-col">
        <Container className="flex items-center">
          <Input
            placeholder="Title"
            name="title"
            register={register}
            inputVariant="secondary"
            shouldAnimate={false}
          />
          <Span className="text-description absolute right-5 text-sm">
            {title?.length || 0}/300
          </Span>
        </Container>
        {errors.title && (
          <Span className="mt-2 text-xs text-red-500">
            {errors.title.message}
          </Span>
        )}
      </Container>
      <Container className="border-base mt-3 flex flex-col rounded-md border">
        <Container className="flex items-center space-x-3 bg-[#272729] p-3">
          <Container
            className={classNames(
              "p-1",
              markup.includes("font-bold")
                ? "rounded-md !bg-[#1a1a1b] ring-1 ring-gray-500"
                : "",
            )}
            initial={{ background: "none" }}
            whileHover={{
              background: "#1a1a1b",
            }}
            onClick={(e) => {
              handleSetMarkup("font-bold");
            }}
          >
            <CIcon className="h-6 w-6" icon={icon.cilBold} />
          </Container>
          <Container
            className={classNames(
              "p-1",
              markup.includes("italic")
                ? "rounded-md !bg-[#1a1a1b] ring-1 ring-gray-500"
                : "",
            )}
            initial={{ background: "none" }}
            whileHover={{
              background: "#1a1a1b",
            }}
            onClick={() => {
              handleSetMarkup("italic");
            }}
          >
            <CIcon icon={icon.cilItalic} className="h-6 w-6" />
          </Container>
          <Container
            className={classNames(
              "p-1",
              markup.includes("line-through")
                ? "rounded-md !bg-[#1a1a1b] ring-1 ring-gray-500"
                : "",
            )}
            initial={{ background: "none" }}
            whileHover={{
              background: "#1a1a1b",
            }}
            onClick={() => {
              handleSetMarkup("line-through");
            }}
          >
            <CIcon icon={icon.cilStrikethrough} className="h-6 w-6" />
          </Container>
          <Container>
            <LinkIcon className="h-6 w-6 text-[#818384]" />
          </Container>
        </Container>
        <Textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Text (Optional)"
          className={classNames(
            "rounded-md text-sm",
            markup && markup.join(" "),
          )}
        />
      </Container>
      <Container className="flex items-center space-x-2 py-3">
        <Badge
          badgeVariant="secondary"
          className={classNames(
            "flex items-center space-x-2 rounded-full ring-1 ring-[#7b7d7e]  hover:ring-gray-300",
            getValues("isOC") ? "ring-white" : "",
          )}
          onClick={() => setValue("isOC", !getValues("isOC"))}
        >
          <Icon
            icon={
              <PlusIcon
                className={classNames(
                  "h-6 w-6 text-[#7b7d7e] transition-all",
                  getValues("isOC") ? "text-[#fff]" : "",
                )}
              />
            }
          />
          <Paragraph
            className={classNames(
              "text-sm font-semibold text-[#7b7d7e] transition-all",
              getValues("isOC") ? "text-[#fff]" : "",
            )}
          >
            OC
          </Paragraph>
        </Badge>
        <Badge
          badgeVariant="secondary"
          className={classNames(
            "flex items-center space-x-2 rounded-full ring-1 ring-[#7b7d7e] hover:ring-gray-300",
            getValues("isSpoiler") ? "ring-white" : "",
          )}
          onClick={() => setValue("isSpoiler", !getValues("isSpoiler"))}
        >
          <Icon
            icon={
              <PlusIcon
                className={classNames(
                  "h-6 w-6 text-[#7b7d7e] transition-all",
                  getValues("isSpoiler") ? "text-[#fff]" : "",
                )}
              />
            }
          />
          <Paragraph
            className={classNames(
              "text-sm font-semibold text-[#7b7d7e] transition-all",
              getValues("isSpoiler") ? "text-[#fff]" : "",
            )}
          >
            Spoiler
          </Paragraph>
        </Badge>
        <Badge
          badgeVariant="secondary"
          className={classNames(
            "flex items-center space-x-2 rounded-full ring-1 ring-[#7b7d7e] hover:ring-gray-300",
            getValues("isNSFW") ? "ring-white" : "",
          )}
          onClick={() => setValue("isNSFW", !getValues("isNSFW"))}
        >
          <Icon
            icon={
              <PlusIcon
                className={classNames(
                  "h-6 w-6 text-[#7b7d7e] transition-all",
                  getValues("isNSFW") ? "text-[#fff]" : "",
                )}
              />
            }
          />
          <Paragraph
            className={classNames(
              "text-sm font-semibold text-[#7b7d7e] transition-all",
              getValues("isNSFW") ? "text-[#fff]" : "",
            )}
          >
            NSFW
          </Paragraph>
        </Badge>

        <Menu
          className="flex items-center rounded-full bg-base px-3 py-1 ring-1 ring-[#7b7d7e] hover:ring-gray-300"
          menuClassName="bg-base text-white"
          label={
            <Paragraph className="flex items-center text-sm font-semibold text-[#7b7d7e]">
              <Icon
                className="mr-2"
                icon={<TagIcon className="h-6 w-6 rotate-90 text-[#7b7d7e]" />}
              />
              Flair
            </Paragraph>
          }
          open={isFlairOpen}
          setOpen={setIsFlairOpen}
        >
          <MenuItem>Test</MenuItem>
          <MenuItem>Test2</MenuItem>
        </Menu>
      </Container>
      <Divider className="my-3 bg-[#7b7d7e]" />
      <Container className="flex items-center justify-end space-x-2">
        <Button
          buttonVariant="none"
          className="rounded-full px-3 py-1 font-semibold ring-1 ring-white"
        >
          Save Draft
        </Button>
        <Button
          type="submit"
          buttonVariant="none"
          className="rounded-full bg-[#e1e1e1] px-3 py-1 font-semibold text-[#808080] ring-1 ring-white"
        >
          Post
        </Button>
      </Container>
    </Form>
  );
};
