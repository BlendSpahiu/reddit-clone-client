import { WebSocketLink } from "@apollo/client/link/ws";
import {
  getHasuraUserId,
  getHasuraUserRole,
} from "../../../utils/auth/jwt/getHasureUserId";
import { SubscriptionClient } from "subscriptions-transport-ws";

// config
// import { getHasuraUserId, getHasuraUserRole, readAuthToken } from 'utils/auth';

// utils

export const wsClient = new SubscriptionClient(
  "ws://localhost:8060/v1/graphql",
  {
    reconnect: true,
    lazy: true,
    connectionParams: () => {
      // fetch token
      const token = localStorage.getItem("access_token");
      let headers = {};
      if (token) {
        headers = {
          Authorization: `Bearer ${token}`,
          "x-hasura-role": getHasuraUserRole(token),
          "x-hasura-user-id": getHasuraUserId(token),
        };
      }
      return {
        headers,
      };
    },
  }
);

export const wsLink = new WebSocketLink(wsClient);
