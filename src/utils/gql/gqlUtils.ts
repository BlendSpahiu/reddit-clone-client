/**
 *
 * *GraphQL data function
 * @param {T = unknown} data
 */

// gqlData return types
interface GqlDataTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: { data: any };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlData = <T = any>(data: T): GqlDataTypes => ({
  variables: { data },
});

/**
 *
 * *GraphQL object function
 * @param {T = unknown} object
 */

// gqlObject return types
interface GqlObjectTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: { object: any };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlObject = <T = any>(object: T): GqlObjectTypes => ({
  variables: { object },
});
interface GqlObjectsTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: { objects: any };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlObjects = <T = any>(objects: T): GqlObjectsTypes => ({
  variables: { objects },
});

/**
 *
 * *GraphQL set data function
 * @param {TId = any} id
 * @param {TData = any} data
 */

// gqlSet return types
interface GqlSetTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: { id: any; data: any };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlSet = <TData = any, TId = number>(
  id: TId,
  data: TData,
): GqlSetTypes => ({
  variables: { id, data },
});

/**
 *
 * *GraphQL variables function
 * @param {T = any} variables
 */

// gqlVar return types
interface GqlVarTypes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: any;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlVar = <T = any>(variables: T): GqlVarTypes => ({
  variables,
});

interface GqlVarGenTypes<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const gqlVarGen = <T>(variables: T): GqlVarGenTypes<T> => ({
  variables,
});
