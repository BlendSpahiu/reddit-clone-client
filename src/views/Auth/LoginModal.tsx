import { ReactElement, useState } from "react";
import {
  AppleIcon,
  Button,
  Container,
  Divider,
  FieldError,
  Form,
  GoogleIcon,
  Input,
  Link,
  Modal,
  Paragraph,
} from "@components";
import { ToastrTypes } from "@enums";
import { useLoginMutation } from "@graphql/gen/graphql";
import { joiResolver } from "@hookform/resolvers/joi";
import { useToast, useAuth } from "@hooks";
import { getGraphQLErrorMessage } from "@utils";
import { AnimatePresence } from "framer-motion";
import { LoginInputs } from "interfaces/Auth.props";
import { useForm } from "react-hook-form";
import { LoginValidatorSchema } from "@validators";
import { LoginModalProps } from "./Auth.props";
import fourhead from "../../assets/images/4Head.jpg";

export const LoginModal = ({
  isLogin,
  setIsLogin,
  setIsLoading,
  setIsRegister,
}: LoginModalProps): ReactElement => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: joiResolver(LoginValidatorSchema),
  });

  const { addToast } = useToast();
  const { setIsAuthenticated, login } = useAuth();
  const [loginMutation, { loading }] = useLoginMutation({});

  const onSubmit = async (payload: LoginInputs) => {
    console.log(payload);
    loginMutation({
      variables: {
        payload,
      },
      onCompleted: (loginRes) => {
        if (loginRes.login?.token) {
          login(loginRes.login.token);
        }
        setIsLoading(true);
        setIsLogin(false);
        setIsAuthenticated(true);
        const toastId = Math.ceil(Math.random() * 1000);
        addToast({
          toastId,
          title: "Logged In",
          content: "Logged In successfully! Redirecting you to the main page.",
          type: ToastrTypes.SUCCESS,
        });
      },
      onError: (loginError) => {
        const toastId = Math.ceil(Math.random() * 1000);
        addToast({
          toastId,
          title: "Login Error",
          content: getGraphQLErrorMessage(loginError),
          type: ToastrTypes.ERROR,
        });
      },
    });
  };

  return (
    <>
      <AnimatePresence>
        {isLogin && (
          <Modal
            headerTitle="Log In"
            headerDescription="By continuing, you agree to our User Agreement and acknowledge
            that you understand the Privacy Policy."
            headerAction={() => setIsLogin(false)}
            onClick={() => setIsLogin(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 right-0 top-20 z-50 mx-auto w-[600px] rounded-lg bg-[#0f1a1c]"
          >
            <Container className="mt-6">
              <Container className="space-y-2">
                <Button
                  layout
                  buttonVariant="secondary"
                  whileTap={{
                    scale: 0.95,
                  }}
                  whileHover={{
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  className="flex w-full items-center justify-between rounded-3xl bg-white px-4 py-3 text-black"
                >
                  <GoogleIcon />
                  <Paragraph className="text-sm font-semibold">
                    Continue with Google
                  </Paragraph>
                  <div />
                </Button>
                <Button
                  layout
                  buttonVariant="secondary"
                  whileTap={{
                    scale: 0.95,
                  }}
                  whileHover={{
                    backgroundColor: "#000",
                    color: "#fff",
                  }}
                  onMouseOver={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex w-full items-center justify-between rounded-3xl bg-white px-4 py-3 text-black"
                >
                  <AppleIcon fill={isHovering ? "#ffffff" : "#000000"} />
                  <Paragraph className="text-sm font-semibold">
                    Continue with Apple
                  </Paragraph>
                  <div />
                </Button>
              </Container>

              <Divider className="mt-5" />

              <Container className="mt-4">
                <Form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <Container className="flex flex-col">
                    <Input
                      name="username"
                      placeholder={"Username *"}
                      register={register}
                    />
                    {errors.username && (
                      <FieldError className="mt-4" error={errors.username} />
                    )}
                  </Container>
                  <Container className="flex flex-col">
                    <Input
                      name="password"
                      placeholder="Password *"
                      type="password"
                      register={register}
                    />
                  </Container>
                  {errors.password && <FieldError error={errors.password} />}

                  <Container className="mt-6 flex flex-col space-y-4">
                    <Paragraph className="text-sm text-white">
                      Forgor your{" "}
                      <Link className="text-[#4b7ac1]" to={""}>
                        username
                      </Link>{" "}
                      or{" "}
                      <Link className="text-[#4b7ac1]" to={""}>
                        password
                      </Link>
                      💀 ?
                    </Paragraph>
                    <Container className="flex items-center space-x-1 text-sm">
                      <Paragraph className="text-white">
                        New to Reddit?{" "}
                      </Paragraph>
                      <Link
                        className=" text-[#4b7ac1]"
                        to=""
                        onClick={() => {
                          setIsLogin(false);
                          setIsRegister(true);
                        }}
                      >
                        Just Join{" "}
                      </Link>
                      <img src={fourhead} alt="4Head" width={32} height={32} />
                    </Container>
                  </Container>

                  <Button
                    className="mt-6 w-full rounded-3xl bg-[#1a282d] py-4 text-sm text-white"
                    type="submit"
                    layout
                    whileHover={{
                      backgroundColor: "#00000",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    isLoading={loading}
                  >
                    Log In
                  </Button>
                </Form>
              </Container>
            </Container>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
