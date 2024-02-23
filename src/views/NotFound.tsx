import { ReactElement } from "react";
import { Container } from "../components/base/Container";
import notFound from "../assets/images/not-found.png";
import { Paragraph } from "../components/base/Typography";
import { Link } from "../components/base/Link";

export const NotFound = (): ReactElement => {
  return (
    <Container className="flex h-screen w-screen flex-col items-center justify-center space-y-4">
      <img src={notFound} width={82} height={82} alt="Not Found" />
      <Paragraph className="text-sm text-white">
        Whatever you were looking for could not be found.{" "}
        <Link className="text-sky-500 underline" to="/r/home">
          Go back to home page.
        </Link>
      </Paragraph>
    </Container>
  );
};
