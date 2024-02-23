import { ReactElement, useEffect } from "react";
import { Container } from "../../components/base/Container";
import { Paragraph } from "../../components/base/Typography";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthRedirect = (): ReactElement => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        navigate("/r/home");
      }, state?.redirectTimeout || 3000);
    }
  }, []);

  return (
    <Container
      key="redirect"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute bottom-0 left-0 right-0 top-0 z-[998] flex h-screen w-full flex-col items-center justify-center bg-black"
    >
      <span className="loader" />
      <Paragraph className="mt-5 text-gray-300">
        You will be redirected shortly...
      </Paragraph>
    </Container>
  );
};
