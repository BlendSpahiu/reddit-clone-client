import { Container, If } from "@components";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "@hooks";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  LoginModal,
  RegisterModal,
  AuthRedirect,
  PopularCommunities,
} from "@views";
import { Header } from "./Header";

export const MainLayout = ({
  children,
  isCreate = false,
}: {
  children: ReactNode;
  isCreate?: boolean;
}): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { state } = useLocation();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { isLogin, isRegister, setIsLogin, setIsRegister } = useAuth();

  useEffect(() => {
    if (isLoading) {
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
      }, state?.redirectTimer || 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      <Container>
        {!isLoading && <Header />}

        {!isCreate ? (
          <main className="flex h-full justify-between">
            <Sidebar />
            {children}
            <PopularCommunities />
          </main>
        ) : (
          <>{children}</>
        )}

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
            setIsLoading={setIsLoading}
            setIsLogin={setIsLogin}
            setIsRegister={setIsRegister}
          />
        </If>

        <AnimatePresence>{isLoading && <AuthRedirect />}</AnimatePresence>
      </Container>
    </AnimatePresence>
  );
};
