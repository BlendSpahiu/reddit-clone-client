import { ReactElement, useState } from "react";
import { Button } from "../../components/base/Button";
import { Container } from "../../components/base/Container";
import { Heading, Paragraph } from "../../components/base/Typography";
import { GoogleIcon } from "../../components/base/Icons/GoogleIcon";
import { AppleIcon } from "../../components/base/Icons/AppleIcon";
import { Divider } from "../../components/base/Divider";
import { Form } from "../../components/base/Form";
import { useForm } from "react-hook-form";
import { RegisterInputs } from "../../interfaces/Auth.props";
import { joiResolver } from "@hookform/resolvers/joi";
import { Input } from "../../components/base/Input";
import { Link } from "../../components/base/Link";
import { Modal } from "../../components/base/Modal";
import { FieldError } from "../../components/base/FieldError";
import { useRegisterMutation } from "../../graphql/gen/graphql";
import { RegisterModalProps } from "./Auth.props";
import { AnimatePresence } from "framer-motion";
import { useToast } from "../../hooks/useToast";
import { getGraphQLErrorMessage } from "../../utils/getGraphQLErrorMessage";
import { ToastrTypes } from "../../enums/Toastr.enums";
import { RegisterValidatorSchema } from "../../validators/Auth/RegisterValidator";
import { useAuth } from "../../hooks/Auth/useAuth";

export const RegisterModal = ({
  isRegister,
  setIsLogin,
  setIsRegister,
  setIsLoading,
}: RegisterModalProps): ReactElement => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    resolver: joiResolver(RegisterValidatorSchema()),
  });

  const [registerMutation] = useRegisterMutation({});
  const { login } = useAuth();
  const { addToast } = useToast();

  const onSubmit = async (payload: RegisterInputs) => {
    console.log(payload);
    registerMutation({
      variables: {
        payload,
      },
      onCompleted: (registerResponse) => {
        if (registerResponse.register?.token) {
          login(registerResponse.register.token);
        }
        setIsLoading(true);
        setIsRegister(false);
      },
      onError: (registerError) => {
        addToast({
          toastId: Math.ceil(Math.random() * 1000),
          title: "Sign up error",
          content: getGraphQLErrorMessage(registerError),
          type: ToastrTypes.ERROR,
        });
      },
    });
  };

  return (
    <AnimatePresence>
      {isRegister && (
        <Modal
          key="modal"
          headerTitle="Sign Up"
          headerDescription="By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy."
          headerAction={() => setIsRegister(false)}
          onClick={() => setIsRegister(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute left-0 right-0 top-20 z-50 mx-auto w-[600px] rounded-lg bg-[#0f1a1c]"
        >
          <Container className="mt-6">
            <Container className="space-y-2">
              <Button
                layout
                whileTap={{
                  scale: 0.95,
                }}
                whileHover={{
                  backgroundColor: "#000",
                  color: "#fff",
                }}
                className="flex w-full items-center justify-between rounded-3xl bg-white px-4 py-3 text-black"
                buttonVariant="secondary"
              >
                <GoogleIcon />
                <Paragraph className="text-sm font-semibold">
                  Continue with Google
                </Paragraph>
                <div />
              </Button>
              <Button
                layout
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
                buttonVariant="secondary"
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
                    name="email"
                    placeholder="Email *"
                    register={register}
                  />
                  {errors.email && (
                    <FieldError className="mt-4" error={errors.email} />
                  )}
                </Container>
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
                  {errors.password && (
                    <FieldError className="mt-4" error={errors.password} />
                  )}
                </Container>
                <Container className="flex flex-col">
                  <Input
                    name="date_of_birth"
                    placeholder="Date of birth (DD-MM-YYYY) *"
                    register={register}
                  />
                  {errors.date_of_birth && (
                    <FieldError className="mt-4" error={errors.date_of_birth} />
                  )}
                </Container>

                <Container className="mt-6 flex flex-col space-y-4">
                  <Paragraph className="text-sm text-white">
                    Already a fat loser?{" "}
                    <Link
                      className="text-[#4b7ac1]"
                      to={""}
                      onClick={() => {
                        setIsRegister(false);
                        setIsLogin(true);
                      }}
                    >
                      Log In
                    </Link>
                  </Paragraph>
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
                  Sign Up
                </Button>
              </Form>
            </Container>
          </Container>
        </Modal>
      )}
    </AnimatePresence>
  );
};
