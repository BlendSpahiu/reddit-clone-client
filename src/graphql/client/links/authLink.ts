// apollo
import { setContext } from "@apollo/client/link/context";
import {
  getHasuraUserId,
  getHasuraUserRole,
} from "../../../utils/auth/jwt/getHasureUserId";

// utils

export const authLink = setContext((_, { headers }) => {
  // fetch token from storage here
  const token = localStorage.getItem("access_token");

  console.log(getHasuraUserRole(token || ""));

  // validate token here
  if (token) {
    return {
      headers: {
        ...headers,
        "x-hasura-role": getHasuraUserRole(token),
        "x-hasura-user-id": getHasuraUserId(token),
        Authorization: `Bearer ${token}`,
      },
    };
  }
  return headers;
});
