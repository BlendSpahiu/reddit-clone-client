export type JWTHasuraClaims = {
  "x-hasura-allowed-roles": ["user" | "admin"];
  "x-hasura-default-role": "user";
  "x-hasura-user-id": string;
  "x-hasura-role": "user" | "admin";
};

export type JWTModel = {
  exp: number;
  "https://hasura.io/jwt/claims": JWTHasuraClaims;
};
