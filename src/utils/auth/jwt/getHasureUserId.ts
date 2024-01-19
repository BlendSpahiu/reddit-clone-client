import { jwtDecode } from "jwt-decode";
import { UserRoles } from "../../../enums/UserRoles.enums";
import {
  JWTHasuraClaims,
  JWTModel,
} from "../../../interfaces/models/JwtModel.model";

interface HasuraClaims {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": [UserRoles.USER];
    "x-hasura-user-id": string;
    "x-hasura-role": UserRoles;
  };
  iat: number;
  exp: number;
}

export const getHasuraUserId = (token: string) => {
  const decoded = jwtDecode(token);

  console.log(decoded);

  return (decoded as HasuraClaims)["https://hasura.io/jwt/claims"][
    "x-hasura-user-id"
  ];
};

// interfaces

/**
 * getSingleJWTField decode token and return JWTHasuraClaims or null
 * @param {string} token
 */
export const getSingleJWTField = (token: string): JWTHasuraClaims | null => {
  try {
    const decoded = jwtDecode<JWTModel>(token);

    return decoded["https://hasura.io/jwt/claims"];
  } catch (error) {
    console.error("👾 Invalid token format", error);
    return null;
  }
};

/**
 * getHasuraUserRole return x-hasura-role or default user role
 * @param {string} token
 */
export const getHasuraUserRole = (
  token: string
): JWTHasuraClaims["x-hasura-role"] | string =>
  getSingleJWTField(token)?.["x-hasura-role"] || "user";
