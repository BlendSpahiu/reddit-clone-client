import { Container, Paragraph, Span } from "@components";
import { ReactElement } from "react";

export const Preloader = (): ReactElement => (
  <Container className="mx-10 my-5 h-[360px] animate-pulse rounded-md border border-gray-700 px-5 py-5">
    <Container className="mb-10 flex items-center">
      <Container className="rounded-full border border-gray-700 p-5"></Container>
      <Span className="mx-10 h-2 w-full rounded-full bg-gray-800" />
    </Container>
    <Container className="mb-10 space-y-4">
      <Paragraph className="h-2 w-full rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-3/5 rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-3/4 rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-full rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-1/2 rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-3/5 rounded-full bg-gray-800" />
      <Paragraph className="h-2 w-3/4 rounded-full bg-gray-800" />
    </Container>
    <Container className="h-2 w-1/5 rounded-full bg-gray-800" />
  </Container>
);
