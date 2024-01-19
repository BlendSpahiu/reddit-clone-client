import { ReactElement, useEffect, useState } from "react";
import { Container } from "../components/base/Container";
import { Header } from "../containers/Header";
import { LoginModal } from "./Auth/LoginModal";
import { useAuth } from "../hooks/Auth/useAuth";
import { If, Ternary } from "../components/base/Conditions";
import { RegisterModal } from "./Auth/RegisterModal";
import { Loader } from "../components/base/Loader";
import { Paragraph } from "../components/base/Typography";
import { AnimatePresence } from "framer-motion";

export const Main = (): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isLogin, isRegister, setIsLogin, setIsRegister } = useAuth();

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <Container>
      <Header />

      <If condition={isLogin}>
        <LoginModal
          isLogin={isLogin}
          setIsLoading={setIsLoading}
          setIsLogin={setIsLogin}
          setIsRegister={setIsRegister}
        />
      </If>
      <If condition={isRegister}>
        <RegisterModal
          isRegister={isRegister}
          setIsLogin={setIsLogin}
          setIsRegister={setIsRegister}
        />
      </If>

      <AnimatePresence>
        {isLoading && (
          <Container
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 top-0 z-[900] flex flex-col items-center justify-center bg-white"
          >
            <Paragraph className="mb-4 text-sm font-semibold">
              You will be redirected shortly...
            </Paragraph>
            <Loader />
          </Container>
        )}
      </AnimatePresence>
    </Container>
  );
};
