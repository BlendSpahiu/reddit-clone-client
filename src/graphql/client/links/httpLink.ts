// apollo
import { createHttpLink } from "@apollo/client";

// export link
export const httpLink = createHttpLink({
  uri: "http://localhost:8060/v1/graphql",
});
