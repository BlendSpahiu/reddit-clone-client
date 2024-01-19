import { ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "../../components/base/Button";
import { Container } from "../../components/base/Container";
import { Heading, Paragraph } from "../../components/base/Typography";
import { GoogleIcon } from "../../components/base/Icons/GoogleIcon";
import { AppleIcon } from "../../components/base/Icons/AppleIcon";
import { Divider } from "../../components/base/Divider";
import { Form } from "../../components/base/Form";
import { useForm } from "react-hook-form";
import { LoginInputs } from "../../interfaces/Auth.props";
import { joiResolver } from "@hookform/resolvers/joi";
import { LoginValidatorSchema } from "../../validators/Auth/LoginValidator";
import { Input } from "../../components/base/Input";
import { Link } from "../../components/base/Link";
import { Modal } from "../../components/base/Modal";
import { FieldError } from "../../components/base/FieldError";
import { useLoginMutation } from "../../renderer/graphql/gen/graphql";
import fourhead from "../../assets/images/4Head.jpg";
import { useToast } from "../../hooks/useToast";
import { getGraphQLErrorMessage } from "../../utils/getGraphQLErrorMessage";
import { ToastrTypes } from "../../enums/Toastr.enums";
import { LoginModalProps } from "./Auth.props";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../../hooks/Auth/useAuth";
import { time } from "console";
import { Loader } from "../../components/base/Loader";
import { If } from "../../components/base/Conditions";

export const LoginModal = ({
  isLogin,
  setIsLogin,
  setIsLoading,
  setIsRegister,
}: LoginModalProps): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: joiResolver(LoginValidatorSchema),
  });

  const { addToast } = useToast();
  const { setIsAuthenticated, login } = useAuth();
  const [loginMutation] = useLoginMutation({});

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
            key="modal"
            onClick={() => setIsLogin(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 right-0 z-50 mx-auto flex w-[600px] flex-col rounded-lg bg-[#0f1a1c] p-24"
          >
            <Heading heading="h1" className="text-3xl font-bold text-white">
              Log In
            </Heading>
            <Paragraph className="mt-2 text-sm text-gray-200">
              By continuing, you agree to our User Agreement and acknowledge
              that you understand the Privacy Policy.
            </Paragraph>
            <Container className="mt-6 flex flex-col">
              <Container className="flex flex-col space-y-2">
                <Button className="flex w-full items-center justify-between rounded-3xl !bg-white px-4 py-3 text-black">
                  <GoogleIcon />
                  <Paragraph className="text-sm font-semibold">
                    Continue with Google
                  </Paragraph>
                  <div />
                </Button>
                <Button className="flex w-full items-center justify-between rounded-3xl !bg-white px-4 py-3 text-black">
                  <AppleIcon />
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
                      placeholder="Username *"
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
