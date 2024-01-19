import { ApolloError } from "@apollo/client";

export const getGraphQLErrorMessage = (graphqlError: ApolloError): string =>
  (graphqlError.graphQLErrors[0].extensions as any).internal.response.body
    .statusMessage;
