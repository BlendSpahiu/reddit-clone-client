import {
  Container,
  Input,
  Span,
  Paragraph,
  Label,
  Badge,
  Icon,
  Divider,
  Menu,
  MenuItem,
  Button,
  Form,
} from "@components";
import CIcon from "@coreui/icons-react";
import {
  LinkIcon,
  XMarkIcon,
  PlusIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import * as icon from "@coreui/icons";
import classNames from "classnames";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditPostProps, PostProps } from "./Communities.props";
import { ToastrTypes } from "@enums";
import {
  useCreatePostMutation,
  useSaveDraftMutation,
  useGetFlaresByCommunityIdQuery,
  useUpdatePostMutation,
  useGetPostByIdQuery,
} from "@graphql/gen/graphql";
import { useToast, useAuth } from "@hooks";
import { PostInputs } from "@interfaces";
import { getGraphQLErrorMessage } from "@utils";
import axios from "axios";
import { useWatch } from "react-hook-form";

export const EditPost = ({
  communityId,
  activeTab,
  postId,
  formProps: {
    control,
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    setValue,
    trigger,
    reset,
  },
}: EditPostProps): ReactElement => {
  const [image, setImage] = useState<FileList | null>(null);
  const [base64Image, setBase64Image] = useState<string | ArrayBuffer | null>(
    null,
  );
  const [error, setError] = useState<string>("");
  const [isFlairOpen, setIsFlairOpen] = useState<boolean>(false);
  const [isFlairDisabled, setIsFlairDisabled] = useState<boolean>(true);
  const [markup, setMarkup] = useState<string[]>([]);

  const textareaRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();
  const { addToast } = useToast();
  const { user } = useAuth();
  const { title, content, isNSFW, isOC, isSpoiler } = useWatch({ control });

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

  // graphql
  const {} = useGetPostByIdQuery({
    variables: { postId },
    onCompleted: (data) => {
      const post = data.posts_by_pk;
      reset({
        title: post?.title,
        content: post?.content || "",
        isNSFW: post?.isNSFW,
        isOC: post?.isOriginalContent,
        isSpoiler: post?.isSpoiler,
        link: post?.link || "",
      });
    },
  });
  const [updatePostMutation, { loading }] = useUpdatePostMutation({
    onCompleted: async () => {
      try {
        await axios.post(
          "https://65dfae79ff5e305f32a2f6b1.mockapi.io/api/v1/images",
          {
            base64Image: base64Image as string,
            post_id: postId,
          },
        );
        addToast({
          type: ToastrTypes.SUCCESS,
          title: "Create post",
          content: "Post created successfully.",
        });
        navigate("/r/home");
      } catch (err) {
        addToast({
          type: ToastrTypes.ERROR,
          title: "Image File",
          content: "Image is too large, please select a smaller image.",
        });
      }
    },
    onError: (err) => {
      addToast({
        type: ToastrTypes.ERROR,
        title: "Create post",
        content: getGraphQLErrorMessage(err),
      });
    },
  });

  const { data: flares } = useGetFlaresByCommunityIdQuery({
    variables: {
      userId: user?.id || "",
      communityId,
    },
    onCompleted: (data) => {
      if (data.flares.length === 0) {
        setIsFlairDisabled(true);
      }
    },
  });

  const onSubmit = async (data: PostInputs) => {
    if (!communityId) {
      addToast({
        type: ToastrTypes.ERROR,
        title: "Create Post",
        content: "Please select a community first.",
      });
      return;
    }

    updatePostMutation({
      variables: {
        postId,
        set: {
          ...data,
        },
      },
    });
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.readAsDataURL(image[0]);
      reader.onload = () => {
        setBase64Image(reader.result);
        console.log(base64Image);
      };
    }
  }, [image]);

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
            defaultValue={title}
            maxLength={300}
          />
          <Span className="absolute right-5 text-sm text-description">
            {title?.length || 0}/300
          </Span>
        </Container>
        {errors.title && (
          <Span className="mt-2 text-xs text-red-500">
            {errors.title.message}
          </Span>
        )}
      </Container>
      {activeTab === 0 && (
        <Container className="mt-3 flex flex-col rounded-md border border-base">
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
              onClick={() => {
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
          <textarea
            placeholder="Text (Optional)"
            className={classNames(
              "min-h-72 w-full rounded-md bg-base p-3 text-sm",
              markup && markup.join(" "),
            )}
            {...register("content")}
          />
        </Container>
      )}
      {activeTab === 1 && (
        <Container className="mt-3 flex w-full appearance-none flex-col items-center rounded-lg border border-dotted border-[#747474] py-36">
          <Container className="flex items-center space-x-1 text-sm">
            {!image ? (
              <>
                <Paragraph>Drag and drop an image or</Paragraph>
                <Label
                  className="rounded-full border border-[#747474] px-2 py-0.5"
                  htmlFor="file"
                >
                  Upload
                </Label>
                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={async (e) => {
                    setImage(e.target.files);
                  }}
                />
              </>
            ) : (
              <>
                <img alt="Uploaded" src={URL.createObjectURL(image[0])} />
                <Container
                  className="absolute right-4 top-20"
                  onClick={() => setImage(null)}
                >
                  <XMarkIcon className="h-8 w-8 text-[#6e868d]" />
                </Container>
              </>
            )}
          </Container>
        </Container>
      )}
      {activeTab === 2 && (
        <>
          <textarea
            className="my-3 min-h-32 w-full rounded-md border border-[#747474] bg-base px-3 py-2 text-sm"
            placeholder="Url"
            {...register("link")}
          />
          {errors.link && (
            <Paragraph className="text-sm text-error">
              {errors.link.message}
            </Paragraph>
          )}
        </>
      )}
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
          className={classNames(
            "flex items-center rounded-full bg-base px-3 py-1 ring-1 ring-[#7b7d7e] hover:ring-gray-300",
          )}
          menuClassName="bg-base text-white"
          label={
            <Paragraph
              className={classNames(
                "flex items-center text-sm font-semibold text-[#7b7d7e]",
                !flares?.flares[0]?.isEnabled || flares.flares.length === 0
                  ? "hover:cursor-not-allowed"
                  : "",
              )}
            >
              <Icon
                className="mr-2"
                icon={<TagIcon className="h-6 w-6 rotate-90 text-[#7b7d7e]" />}
              />
              Flair
            </Paragraph>
          }
          open={isFlairOpen}
          disabled={!flares?.flares[0]?.isEnabled}
          setOpen={setIsFlairOpen}
        >
          <MenuItem>Test</MenuItem>
          <MenuItem>Test2</MenuItem>
        </Menu>
      </Container>

      {/* END OF FORM */}

      <Divider className="my-3 bg-[#7b7d7e]" />
      <Container className="flex items-center justify-end space-x-2">
        <Button
          initial={{ background: "#e1e1e1" }}
          whileHover={{
            background: "#fff",
          }}
          type="submit"
          buttonVariant="none"
          className="rounded-full bg-[#e1e1e1] px-3 py-1 font-semibold text-[#808080] ring-1 ring-white"
        >
          Update
        </Button>
      </Container>
    </Form>
  );
};