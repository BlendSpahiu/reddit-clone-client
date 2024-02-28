import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  date: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type LoginInput = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type LoginOutput = {
  __typename?: "LoginOutput";
  statusCode: Scalars["Int"]["output"];
  statusIsOk: Scalars["Boolean"]["output"];
  statusMessage: Scalars["String"]["output"];
  statusPath: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

export type RegisterInput = {
  date_of_birth: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type RegisterOutput = {
  __typename?: "RegisterOutput";
  statusCode: Scalars["Int"]["output"];
  statusIsOk: Scalars["Boolean"]["output"];
  statusMessage: Scalars["String"]["output"];
  statusPath: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: "comments";
  content: Scalars["String"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  post: Posts;
  post_id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: "comments_aggregate";
  aggregate?: Maybe<Comments_Aggregate_Fields>;
  nodes: Array<Comments>;
};

export type Comments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Comments_Aggregate_Bool_Exp_Count>;
};

export type Comments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Comments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: "comments_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Comments_Max_Fields>;
  min?: Maybe<Comments_Min_Fields>;
};

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comments_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Comments_Max_Order_By>;
  min?: InputMaybe<Comments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: InputMaybe<Array<Comments_Bool_Exp>>;
  _not?: InputMaybe<Comments_Bool_Exp>;
  _or?: InputMaybe<Array<Comments_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = "comments_pkey",
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: "comments_max_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: "comments_min_fields";
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: "comments_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** on_conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint;
  update_columns?: Array<Comments_Update_Column>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "comments". */
export type Comments_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comments */
export type Comments_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "comments" */
export type Comments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Comments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Comments_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Comments_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};

/** columns and relationships of "communities" */
export type Communities = {
  __typename?: "communities";
  category?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  draft_posts: Array<Draft_Posts>;
  /** An aggregate relationship */
  draft_posts_aggregate: Draft_Posts_Aggregate;
  /** An array relationship */
  flares: Array<Flares>;
  /** An aggregate relationship */
  flares_aggregate: Flares_Aggregate;
  id: Scalars["uuid"]["output"];
  isNSFW: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** An array relationship */
  test_many_to_manies: Array<Test_Many_To_Many>;
  /** An aggregate relationship */
  test_many_to_manies_aggregate: Test_Many_To_Many_Aggregate;
  type: Scalars["Int"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};

/** columns and relationships of "communities" */
export type CommunitiesDraft_PostsArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesDraft_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesFlaresArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesFlares_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesTest_Many_To_ManiesArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesTest_Many_To_Manies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "communities" */
export type CommunitiesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "communities" */
export type Communities_Aggregate = {
  __typename?: "communities_aggregate";
  aggregate?: Maybe<Communities_Aggregate_Fields>;
  nodes: Array<Communities>;
};

export type Communities_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Communities_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Communities_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Communities_Aggregate_Bool_Exp_Count>;
};

export type Communities_Aggregate_Bool_Exp_Bool_And = {
  arguments: Communities_Select_Column_Communities_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Communities_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Communities_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Communities_Select_Column_Communities_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Communities_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Communities_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Communities_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "communities" */
export type Communities_Aggregate_Fields = {
  __typename?: "communities_aggregate_fields";
  avg?: Maybe<Communities_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Communities_Max_Fields>;
  min?: Maybe<Communities_Min_Fields>;
  stddev?: Maybe<Communities_Stddev_Fields>;
  stddev_pop?: Maybe<Communities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Communities_Stddev_Samp_Fields>;
  sum?: Maybe<Communities_Sum_Fields>;
  var_pop?: Maybe<Communities_Var_Pop_Fields>;
  var_samp?: Maybe<Communities_Var_Samp_Fields>;
  variance?: Maybe<Communities_Variance_Fields>;
};

/** aggregate fields of "communities" */
export type Communities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Communities_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "communities" */
export type Communities_Aggregate_Order_By = {
  avg?: InputMaybe<Communities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Communities_Max_Order_By>;
  min?: InputMaybe<Communities_Min_Order_By>;
  stddev?: InputMaybe<Communities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Communities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Communities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Communities_Sum_Order_By>;
  var_pop?: InputMaybe<Communities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Communities_Var_Samp_Order_By>;
  variance?: InputMaybe<Communities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "communities" */
export type Communities_Arr_Rel_Insert_Input = {
  data: Array<Communities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Communities_On_Conflict>;
};

/** aggregate avg on columns */
export type Communities_Avg_Fields = {
  __typename?: "communities_avg_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "communities" */
export type Communities_Avg_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "communities". All fields are combined with a logical 'AND'. */
export type Communities_Bool_Exp = {
  _and?: InputMaybe<Array<Communities_Bool_Exp>>;
  _not?: InputMaybe<Communities_Bool_Exp>;
  _or?: InputMaybe<Array<Communities_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft_posts?: InputMaybe<Draft_Posts_Bool_Exp>;
  draft_posts_aggregate?: InputMaybe<Draft_Posts_Aggregate_Bool_Exp>;
  flares?: InputMaybe<Flares_Bool_Exp>;
  flares_aggregate?: InputMaybe<Flares_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isNSFW?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  test_many_to_manies?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
  test_many_to_manies_aggregate?: InputMaybe<Test_Many_To_Many_Aggregate_Bool_Exp>;
  type?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "communities" */
export enum Communities_Constraint {
  /** unique or primary key constraint on columns "id" */
  CommunitiesPkey = "communities_pkey",
}

/** input type for incrementing numeric columns in table "communities" */
export type Communities_Inc_Input = {
  type?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "communities" */
export type Communities_Insert_Input = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  draft_posts?: InputMaybe<Draft_Posts_Arr_Rel_Insert_Input>;
  flares?: InputMaybe<Flares_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  test_many_to_manies?: InputMaybe<Test_Many_To_Many_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Communities_Max_Fields = {
  __typename?: "communities_max_fields";
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "communities" */
export type Communities_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Communities_Min_Fields = {
  __typename?: "communities_min_fields";
  category?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  owner_id?: Maybe<Scalars["uuid"]["output"]>;
  type?: Maybe<Scalars["Int"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "communities" */
export type Communities_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "communities" */
export type Communities_Mutation_Response = {
  __typename?: "communities_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Communities>;
};

/** input type for inserting object relation for remote table "communities" */
export type Communities_Obj_Rel_Insert_Input = {
  data: Communities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Communities_On_Conflict>;
};

/** on_conflict condition type for table "communities" */
export type Communities_On_Conflict = {
  constraint: Communities_Constraint;
  update_columns?: Array<Communities_Update_Column>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

/** Ordering options when selecting data from "communities". */
export type Communities_Order_By = {
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft_posts_aggregate?: InputMaybe<Draft_Posts_Aggregate_Order_By>;
  flares_aggregate?: InputMaybe<Flares_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isNSFW?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  test_many_to_manies_aggregate?: InputMaybe<Test_Many_To_Many_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: communities */
export type Communities_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "communities" */
export enum Communities_Select_Column {
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** select "communities_aggregate_bool_exp_bool_and_arguments_columns" columns of table "communities" */
export enum Communities_Select_Column_Communities_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
}

/** select "communities_aggregate_bool_exp_bool_or_arguments_columns" columns of table "communities" */
export enum Communities_Select_Column_Communities_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
}

/** input type for updating data in table "communities" */
export type Communities_Set_Input = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  type?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Communities_Stddev_Fields = {
  __typename?: "communities_stddev_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "communities" */
export type Communities_Stddev_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Communities_Stddev_Pop_Fields = {
  __typename?: "communities_stddev_pop_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "communities" */
export type Communities_Stddev_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Communities_Stddev_Samp_Fields = {
  __typename?: "communities_stddev_samp_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "communities" */
export type Communities_Stddev_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "communities" */
export type Communities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Communities_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Communities_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  owner_id?: InputMaybe<Scalars["uuid"]["input"]>;
  type?: InputMaybe<Scalars["Int"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Communities_Sum_Fields = {
  __typename?: "communities_sum_fields";
  type?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "communities" */
export type Communities_Sum_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** update columns of table "communities" */
export enum Communities_Update_Column {
  /** column name */
  Category = "category",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  Name = "name",
  /** column name */
  OwnerId = "owner_id",
  /** column name */
  Type = "type",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Communities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Communities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Communities_Set_Input>;
  where: Communities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Communities_Var_Pop_Fields = {
  __typename?: "communities_var_pop_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "communities" */
export type Communities_Var_Pop_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Communities_Var_Samp_Fields = {
  __typename?: "communities_var_samp_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "communities" */
export type Communities_Var_Samp_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Communities_Variance_Fields = {
  __typename?: "communities_variance_fields";
  type?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "communities" */
export type Communities_Variance_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["date"]["input"]>;
  _gt?: InputMaybe<Scalars["date"]["input"]>;
  _gte?: InputMaybe<Scalars["date"]["input"]>;
  _in?: InputMaybe<Array<Scalars["date"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["date"]["input"]>;
  _lte?: InputMaybe<Scalars["date"]["input"]>;
  _neq?: InputMaybe<Scalars["date"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["date"]["input"]>>;
};

/** columns and relationships of "donwvoted_posts" */
export type Donwvoted_Posts = {
  __typename?: "donwvoted_posts";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  post: Posts;
  post_id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "donwvoted_posts" */
export type Donwvoted_Posts_Aggregate = {
  __typename?: "donwvoted_posts_aggregate";
  aggregate?: Maybe<Donwvoted_Posts_Aggregate_Fields>;
  nodes: Array<Donwvoted_Posts>;
};

export type Donwvoted_Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Donwvoted_Posts_Aggregate_Bool_Exp_Count>;
};

export type Donwvoted_Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "donwvoted_posts" */
export type Donwvoted_Posts_Aggregate_Fields = {
  __typename?: "donwvoted_posts_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Donwvoted_Posts_Max_Fields>;
  min?: Maybe<Donwvoted_Posts_Min_Fields>;
};

/** aggregate fields of "donwvoted_posts" */
export type Donwvoted_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "donwvoted_posts" */
export type Donwvoted_Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Donwvoted_Posts_Max_Order_By>;
  min?: InputMaybe<Donwvoted_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "donwvoted_posts" */
export type Donwvoted_Posts_Arr_Rel_Insert_Input = {
  data: Array<Donwvoted_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Donwvoted_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "donwvoted_posts". All fields are combined with a logical 'AND'. */
export type Donwvoted_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Donwvoted_Posts_Bool_Exp>>;
  _not?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Donwvoted_Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "donwvoted_posts" */
export enum Donwvoted_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  DonwvotedPostsPkey = "donwvoted_posts_pkey",
}

/** input type for inserting data into table "donwvoted_posts" */
export type Donwvoted_Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Donwvoted_Posts_Max_Fields = {
  __typename?: "donwvoted_posts_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "donwvoted_posts" */
export type Donwvoted_Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Donwvoted_Posts_Min_Fields = {
  __typename?: "donwvoted_posts_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "donwvoted_posts" */
export type Donwvoted_Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "donwvoted_posts" */
export type Donwvoted_Posts_Mutation_Response = {
  __typename?: "donwvoted_posts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Donwvoted_Posts>;
};

/** on_conflict condition type for table "donwvoted_posts" */
export type Donwvoted_Posts_On_Conflict = {
  constraint: Donwvoted_Posts_Constraint;
  update_columns?: Array<Donwvoted_Posts_Update_Column>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "donwvoted_posts". */
export type Donwvoted_Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: donwvoted_posts */
export type Donwvoted_Posts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "donwvoted_posts" */
export enum Donwvoted_Posts_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "donwvoted_posts" */
export type Donwvoted_Posts_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "donwvoted_posts" */
export type Donwvoted_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Donwvoted_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Donwvoted_Posts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "donwvoted_posts" */
export enum Donwvoted_Posts_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Donwvoted_Posts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Donwvoted_Posts_Set_Input>;
  where: Donwvoted_Posts_Bool_Exp;
};

/** columns and relationships of "draft_posts" */
export type Draft_Posts = {
  __typename?: "draft_posts";
  /** An object relationship */
  community?: Maybe<Communities>;
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  downvotes: Scalars["Int"]["output"];
  flair?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  isNSFW: Scalars["Boolean"]["output"];
  isOriginalContent: Scalars["Boolean"]["output"];
  isSpoiler: Scalars["Boolean"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  upvotes: Scalars["Int"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "draft_posts" */
export type Draft_Posts_Aggregate = {
  __typename?: "draft_posts_aggregate";
  aggregate?: Maybe<Draft_Posts_Aggregate_Fields>;
  nodes: Array<Draft_Posts>;
};

export type Draft_Posts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Draft_Posts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Draft_Posts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Draft_Posts_Aggregate_Bool_Exp_Count>;
};

export type Draft_Posts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Draft_Posts_Select_Column_Draft_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Draft_Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Draft_Posts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Draft_Posts_Select_Column_Draft_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Draft_Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Draft_Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Draft_Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "draft_posts" */
export type Draft_Posts_Aggregate_Fields = {
  __typename?: "draft_posts_aggregate_fields";
  avg?: Maybe<Draft_Posts_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Draft_Posts_Max_Fields>;
  min?: Maybe<Draft_Posts_Min_Fields>;
  stddev?: Maybe<Draft_Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Draft_Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Draft_Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Draft_Posts_Sum_Fields>;
  var_pop?: Maybe<Draft_Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Draft_Posts_Var_Samp_Fields>;
  variance?: Maybe<Draft_Posts_Variance_Fields>;
};

/** aggregate fields of "draft_posts" */
export type Draft_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "draft_posts" */
export type Draft_Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Draft_Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Draft_Posts_Max_Order_By>;
  min?: InputMaybe<Draft_Posts_Min_Order_By>;
  stddev?: InputMaybe<Draft_Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Draft_Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Draft_Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Draft_Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Draft_Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Draft_Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Draft_Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "draft_posts" */
export type Draft_Posts_Arr_Rel_Insert_Input = {
  data: Array<Draft_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Draft_Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Draft_Posts_Avg_Fields = {
  __typename?: "draft_posts_avg_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "draft_posts" */
export type Draft_Posts_Avg_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "draft_posts". All fields are combined with a logical 'AND'. */
export type Draft_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Draft_Posts_Bool_Exp>>;
  _not?: InputMaybe<Draft_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Draft_Posts_Bool_Exp>>;
  community?: InputMaybe<Communities_Bool_Exp>;
  community_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  downvotes?: InputMaybe<Int_Comparison_Exp>;
  flair?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  isNSFW?: InputMaybe<Boolean_Comparison_Exp>;
  isOriginalContent?: InputMaybe<Boolean_Comparison_Exp>;
  isSpoiler?: InputMaybe<Boolean_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  upvotes?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "draft_posts" */
export enum Draft_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  DraftPostsPkey = "draft_posts_pkey",
}

/** input type for incrementing numeric columns in table "draft_posts" */
export type Draft_Posts_Inc_Input = {
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "draft_posts" */
export type Draft_Posts_Insert_Input = {
  community?: InputMaybe<Communities_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Draft_Posts_Max_Fields = {
  __typename?: "draft_posts_max_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  flair?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "draft_posts" */
export type Draft_Posts_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Draft_Posts_Min_Fields = {
  __typename?: "draft_posts_min_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  flair?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "draft_posts" */
export type Draft_Posts_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "draft_posts" */
export type Draft_Posts_Mutation_Response = {
  __typename?: "draft_posts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Draft_Posts>;
};

/** on_conflict condition type for table "draft_posts" */
export type Draft_Posts_On_Conflict = {
  constraint: Draft_Posts_Constraint;
  update_columns?: Array<Draft_Posts_Update_Column>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "draft_posts". */
export type Draft_Posts_Order_By = {
  community?: InputMaybe<Communities_Order_By>;
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  isNSFW?: InputMaybe<Order_By>;
  isOriginalContent?: InputMaybe<Order_By>;
  isSpoiler?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: draft_posts */
export type Draft_Posts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "draft_posts" */
export enum Draft_Posts_Select_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Downvotes = "downvotes",
  /** column name */
  Flair = "flair",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
  /** column name */
  Link = "link",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Upvotes = "upvotes",
  /** column name */
  UserId = "user_id",
}

/** select "draft_posts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "draft_posts" */
export enum Draft_Posts_Select_Column_Draft_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
}

/** select "draft_posts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "draft_posts" */
export enum Draft_Posts_Select_Column_Draft_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
}

/** input type for updating data in table "draft_posts" */
export type Draft_Posts_Set_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Draft_Posts_Stddev_Fields = {
  __typename?: "draft_posts_stddev_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "draft_posts" */
export type Draft_Posts_Stddev_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Draft_Posts_Stddev_Pop_Fields = {
  __typename?: "draft_posts_stddev_pop_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "draft_posts" */
export type Draft_Posts_Stddev_Pop_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Draft_Posts_Stddev_Samp_Fields = {
  __typename?: "draft_posts_stddev_samp_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "draft_posts" */
export type Draft_Posts_Stddev_Samp_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "draft_posts" */
export type Draft_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Draft_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Draft_Posts_Stream_Cursor_Value_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Draft_Posts_Sum_Fields = {
  __typename?: "draft_posts_sum_fields";
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "draft_posts" */
export type Draft_Posts_Sum_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** update columns of table "draft_posts" */
export enum Draft_Posts_Update_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Downvotes = "downvotes",
  /** column name */
  Flair = "flair",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
  /** column name */
  Link = "link",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Upvotes = "upvotes",
  /** column name */
  UserId = "user_id",
}

export type Draft_Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Draft_Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Draft_Posts_Set_Input>;
  where: Draft_Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Draft_Posts_Var_Pop_Fields = {
  __typename?: "draft_posts_var_pop_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "draft_posts" */
export type Draft_Posts_Var_Pop_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Draft_Posts_Var_Samp_Fields = {
  __typename?: "draft_posts_var_samp_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "draft_posts" */
export type Draft_Posts_Var_Samp_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Draft_Posts_Variance_Fields = {
  __typename?: "draft_posts_variance_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "draft_posts" */
export type Draft_Posts_Variance_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** columns and relationships of "flares" */
export type Flares = {
  __typename?: "flares";
  /** An object relationship */
  community: Communities;
  community_id: Scalars["uuid"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  name: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "flares" */
export type Flares_Aggregate = {
  __typename?: "flares_aggregate";
  aggregate?: Maybe<Flares_Aggregate_Fields>;
  nodes: Array<Flares>;
};

export type Flares_Aggregate_Bool_Exp = {
  count?: InputMaybe<Flares_Aggregate_Bool_Exp_Count>;
};

export type Flares_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Flares_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Flares_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "flares" */
export type Flares_Aggregate_Fields = {
  __typename?: "flares_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Flares_Max_Fields>;
  min?: Maybe<Flares_Min_Fields>;
};

/** aggregate fields of "flares" */
export type Flares_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flares_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "flares" */
export type Flares_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flares_Max_Order_By>;
  min?: InputMaybe<Flares_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flares" */
export type Flares_Arr_Rel_Insert_Input = {
  data: Array<Flares_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flares_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flares". All fields are combined with a logical 'AND'. */
export type Flares_Bool_Exp = {
  _and?: InputMaybe<Array<Flares_Bool_Exp>>;
  _not?: InputMaybe<Flares_Bool_Exp>;
  _or?: InputMaybe<Array<Flares_Bool_Exp>>;
  community?: InputMaybe<Communities_Bool_Exp>;
  community_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flares" */
export enum Flares_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlaresPkey = "flares_pkey",
}

/** input type for inserting data into table "flares" */
export type Flares_Insert_Input = {
  community?: InputMaybe<Communities_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Flares_Max_Fields = {
  __typename?: "flares_max_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "flares" */
export type Flares_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flares_Min_Fields = {
  __typename?: "flares_min_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "flares" */
export type Flares_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flares" */
export type Flares_Mutation_Response = {
  __typename?: "flares_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Flares>;
};

/** on_conflict condition type for table "flares" */
export type Flares_On_Conflict = {
  constraint: Flares_Constraint;
  update_columns?: Array<Flares_Update_Column>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

/** Ordering options when selecting data from "flares". */
export type Flares_Order_By = {
  community?: InputMaybe<Communities_Order_By>;
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flares */
export type Flares_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "flares" */
export enum Flares_Select_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "flares" */
export type Flares_Set_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "flares" */
export type Flares_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Flares_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Flares_Stream_Cursor_Value_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "flares" */
export enum Flares_Update_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Flares_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Flares_Set_Input>;
  where: Flares_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>;
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>;
  /** delete data from the table: "communities" */
  delete_communities?: Maybe<Communities_Mutation_Response>;
  /** delete single row from the table: "communities" */
  delete_communities_by_pk?: Maybe<Communities>;
  /** delete data from the table: "donwvoted_posts" */
  delete_donwvoted_posts?: Maybe<Donwvoted_Posts_Mutation_Response>;
  /** delete single row from the table: "donwvoted_posts" */
  delete_donwvoted_posts_by_pk?: Maybe<Donwvoted_Posts>;
  /** delete data from the table: "draft_posts" */
  delete_draft_posts?: Maybe<Draft_Posts_Mutation_Response>;
  /** delete single row from the table: "draft_posts" */
  delete_draft_posts_by_pk?: Maybe<Draft_Posts>;
  /** delete data from the table: "flares" */
  delete_flares?: Maybe<Flares_Mutation_Response>;
  /** delete single row from the table: "flares" */
  delete_flares_by_pk?: Maybe<Flares>;
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>;
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>;
  /** delete data from the table: "test_many_to_many" */
  delete_test_many_to_many?: Maybe<Test_Many_To_Many_Mutation_Response>;
  /** delete single row from the table: "test_many_to_many" */
  delete_test_many_to_many_by_pk?: Maybe<Test_Many_To_Many>;
  /** delete data from the table: "upvoted_posts" */
  delete_upvoted_posts?: Maybe<Upvoted_Posts_Mutation_Response>;
  /** delete single row from the table: "upvoted_posts" */
  delete_upvoted_posts_by_pk?: Maybe<Upvoted_Posts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "voted_posts" */
  delete_voted_posts?: Maybe<Voted_Posts_Mutation_Response>;
  /** delete single row from the table: "voted_posts" */
  delete_voted_posts_by_pk?: Maybe<Voted_Posts>;
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>;
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>;
  /** insert data into the table: "communities" */
  insert_communities?: Maybe<Communities_Mutation_Response>;
  /** insert a single row into the table: "communities" */
  insert_communities_one?: Maybe<Communities>;
  /** insert data into the table: "donwvoted_posts" */
  insert_donwvoted_posts?: Maybe<Donwvoted_Posts_Mutation_Response>;
  /** insert a single row into the table: "donwvoted_posts" */
  insert_donwvoted_posts_one?: Maybe<Donwvoted_Posts>;
  /** insert data into the table: "draft_posts" */
  insert_draft_posts?: Maybe<Draft_Posts_Mutation_Response>;
  /** insert a single row into the table: "draft_posts" */
  insert_draft_posts_one?: Maybe<Draft_Posts>;
  /** insert data into the table: "flares" */
  insert_flares?: Maybe<Flares_Mutation_Response>;
  /** insert a single row into the table: "flares" */
  insert_flares_one?: Maybe<Flares>;
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>;
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>;
  /** insert data into the table: "test_many_to_many" */
  insert_test_many_to_many?: Maybe<Test_Many_To_Many_Mutation_Response>;
  /** insert a single row into the table: "test_many_to_many" */
  insert_test_many_to_many_one?: Maybe<Test_Many_To_Many>;
  /** insert data into the table: "upvoted_posts" */
  insert_upvoted_posts?: Maybe<Upvoted_Posts_Mutation_Response>;
  /** insert a single row into the table: "upvoted_posts" */
  insert_upvoted_posts_one?: Maybe<Upvoted_Posts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "voted_posts" */
  insert_voted_posts?: Maybe<Voted_Posts_Mutation_Response>;
  /** insert a single row into the table: "voted_posts" */
  insert_voted_posts_one?: Maybe<Voted_Posts>;
  login?: Maybe<LoginOutput>;
  register?: Maybe<RegisterOutput>;
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>;
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  update_comments_many?: Maybe<Array<Maybe<Comments_Mutation_Response>>>;
  /** update data of the table: "communities" */
  update_communities?: Maybe<Communities_Mutation_Response>;
  /** update single row of the table: "communities" */
  update_communities_by_pk?: Maybe<Communities>;
  /** update multiples rows of table: "communities" */
  update_communities_many?: Maybe<Array<Maybe<Communities_Mutation_Response>>>;
  /** update data of the table: "donwvoted_posts" */
  update_donwvoted_posts?: Maybe<Donwvoted_Posts_Mutation_Response>;
  /** update single row of the table: "donwvoted_posts" */
  update_donwvoted_posts_by_pk?: Maybe<Donwvoted_Posts>;
  /** update multiples rows of table: "donwvoted_posts" */
  update_donwvoted_posts_many?: Maybe<
    Array<Maybe<Donwvoted_Posts_Mutation_Response>>
  >;
  /** update data of the table: "draft_posts" */
  update_draft_posts?: Maybe<Draft_Posts_Mutation_Response>;
  /** update single row of the table: "draft_posts" */
  update_draft_posts_by_pk?: Maybe<Draft_Posts>;
  /** update multiples rows of table: "draft_posts" */
  update_draft_posts_many?: Maybe<Array<Maybe<Draft_Posts_Mutation_Response>>>;
  /** update data of the table: "flares" */
  update_flares?: Maybe<Flares_Mutation_Response>;
  /** update single row of the table: "flares" */
  update_flares_by_pk?: Maybe<Flares>;
  /** update multiples rows of table: "flares" */
  update_flares_many?: Maybe<Array<Maybe<Flares_Mutation_Response>>>;
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>;
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>;
  /** update data of the table: "test_many_to_many" */
  update_test_many_to_many?: Maybe<Test_Many_To_Many_Mutation_Response>;
  /** update single row of the table: "test_many_to_many" */
  update_test_many_to_many_by_pk?: Maybe<Test_Many_To_Many>;
  /** update multiples rows of table: "test_many_to_many" */
  update_test_many_to_many_many?: Maybe<
    Array<Maybe<Test_Many_To_Many_Mutation_Response>>
  >;
  /** update data of the table: "upvoted_posts" */
  update_upvoted_posts?: Maybe<Upvoted_Posts_Mutation_Response>;
  /** update single row of the table: "upvoted_posts" */
  update_upvoted_posts_by_pk?: Maybe<Upvoted_Posts>;
  /** update multiples rows of table: "upvoted_posts" */
  update_upvoted_posts_many?: Maybe<
    Array<Maybe<Upvoted_Posts_Mutation_Response>>
  >;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "voted_posts" */
  update_voted_posts?: Maybe<Voted_Posts_Mutation_Response>;
  /** update single row of the table: "voted_posts" */
  update_voted_posts_by_pk?: Maybe<Voted_Posts>;
  /** update multiples rows of table: "voted_posts" */
  update_voted_posts_many?: Maybe<Array<Maybe<Voted_Posts_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_CommunitiesArgs = {
  where: Communities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Communities_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Donwvoted_PostsArgs = {
  where: Donwvoted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Donwvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Draft_PostsArgs = {
  where: Draft_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Draft_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_FlaresArgs = {
  where: Flares_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Flares_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Test_Many_To_ManyArgs = {
  where: Test_Many_To_Many_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Test_Many_To_Many_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Upvoted_PostsArgs = {
  where: Upvoted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Upvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_Voted_PostsArgs = {
  where: Voted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Voted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input;
  on_conflict?: InputMaybe<Comments_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CommunitiesArgs = {
  objects: Array<Communities_Insert_Input>;
  on_conflict?: InputMaybe<Communities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Communities_OneArgs = {
  object: Communities_Insert_Input;
  on_conflict?: InputMaybe<Communities_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Donwvoted_PostsArgs = {
  objects: Array<Donwvoted_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Donwvoted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Donwvoted_Posts_OneArgs = {
  object: Donwvoted_Posts_Insert_Input;
  on_conflict?: InputMaybe<Donwvoted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_PostsArgs = {
  objects: Array<Draft_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Draft_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Draft_Posts_OneArgs = {
  object: Draft_Posts_Insert_Input;
  on_conflict?: InputMaybe<Draft_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_FlaresArgs = {
  objects: Array<Flares_Insert_Input>;
  on_conflict?: InputMaybe<Flares_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Flares_OneArgs = {
  object: Flares_Insert_Input;
  on_conflict?: InputMaybe<Flares_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input;
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Test_Many_To_ManyArgs = {
  objects: Array<Test_Many_To_Many_Insert_Input>;
  on_conflict?: InputMaybe<Test_Many_To_Many_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Test_Many_To_Many_OneArgs = {
  object: Test_Many_To_Many_Insert_Input;
  on_conflict?: InputMaybe<Test_Many_To_Many_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Upvoted_PostsArgs = {
  objects: Array<Upvoted_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Upvoted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Upvoted_Posts_OneArgs = {
  object: Upvoted_Posts_Insert_Input;
  on_conflict?: InputMaybe<Upvoted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Voted_PostsArgs = {
  objects: Array<Voted_Posts_Insert_Input>;
  on_conflict?: InputMaybe<Voted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Voted_Posts_OneArgs = {
  object: Voted_Posts_Insert_Input;
  on_conflict?: InputMaybe<Voted_Posts_On_Conflict>;
};

/** mutation root */
export type Mutation_RootLoginArgs = {
  payload: LoginInput;
};

/** mutation root */
export type Mutation_RootRegisterArgs = {
  payload: RegisterInput;
};

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  where: Comments_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: InputMaybe<Comments_Set_Input>;
  pk_columns: Comments_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Comments_ManyArgs = {
  updates: Array<Comments_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CommunitiesArgs = {
  _inc?: InputMaybe<Communities_Inc_Input>;
  _set?: InputMaybe<Communities_Set_Input>;
  where: Communities_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Communities_By_PkArgs = {
  _inc?: InputMaybe<Communities_Inc_Input>;
  _set?: InputMaybe<Communities_Set_Input>;
  pk_columns: Communities_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Communities_ManyArgs = {
  updates: Array<Communities_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Donwvoted_PostsArgs = {
  _set?: InputMaybe<Donwvoted_Posts_Set_Input>;
  where: Donwvoted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Donwvoted_Posts_By_PkArgs = {
  _set?: InputMaybe<Donwvoted_Posts_Set_Input>;
  pk_columns: Donwvoted_Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Donwvoted_Posts_ManyArgs = {
  updates: Array<Donwvoted_Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_PostsArgs = {
  _inc?: InputMaybe<Draft_Posts_Inc_Input>;
  _set?: InputMaybe<Draft_Posts_Set_Input>;
  where: Draft_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_Posts_By_PkArgs = {
  _inc?: InputMaybe<Draft_Posts_Inc_Input>;
  _set?: InputMaybe<Draft_Posts_Set_Input>;
  pk_columns: Draft_Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Draft_Posts_ManyArgs = {
  updates: Array<Draft_Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_FlaresArgs = {
  _set?: InputMaybe<Flares_Set_Input>;
  where: Flares_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Flares_By_PkArgs = {
  _set?: InputMaybe<Flares_Set_Input>;
  pk_columns: Flares_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Flares_ManyArgs = {
  updates: Array<Flares_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: InputMaybe<Posts_Inc_Input>;
  _set?: InputMaybe<Posts_Set_Input>;
  pk_columns: Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Test_Many_To_ManyArgs = {
  _set?: InputMaybe<Test_Many_To_Many_Set_Input>;
  where: Test_Many_To_Many_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Test_Many_To_Many_By_PkArgs = {
  _set?: InputMaybe<Test_Many_To_Many_Set_Input>;
  pk_columns: Test_Many_To_Many_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Test_Many_To_Many_ManyArgs = {
  updates: Array<Test_Many_To_Many_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Upvoted_PostsArgs = {
  _set?: InputMaybe<Upvoted_Posts_Set_Input>;
  where: Upvoted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Upvoted_Posts_By_PkArgs = {
  _set?: InputMaybe<Upvoted_Posts_Set_Input>;
  pk_columns: Upvoted_Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Upvoted_Posts_ManyArgs = {
  updates: Array<Upvoted_Posts_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Voted_PostsArgs = {
  _set?: InputMaybe<Voted_Posts_Set_Input>;
  where: Voted_Posts_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Voted_Posts_By_PkArgs = {
  _set?: InputMaybe<Voted_Posts_Set_Input>;
  pk_columns: Voted_Posts_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Voted_Posts_ManyArgs = {
  updates: Array<Voted_Posts_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: "posts";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** An object relationship */
  community: Communities;
  community_id: Scalars["uuid"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  creator_id: Scalars["uuid"]["output"];
  /** An array relationship */
  donwvoted_posts: Array<Donwvoted_Posts>;
  /** An aggregate relationship */
  donwvoted_posts_aggregate: Donwvoted_Posts_Aggregate;
  downvotes: Scalars["Int"]["output"];
  flair?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  isNSFW: Scalars["Boolean"]["output"];
  isOriginalContent: Scalars["Boolean"]["output"];
  isSpoiler: Scalars["Boolean"]["output"];
  link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  upvoted_posts: Array<Upvoted_Posts>;
  /** An aggregate relationship */
  upvoted_posts_aggregate: Upvoted_Posts_Aggregate;
  upvotes: Scalars["Int"]["output"];
  /** An object relationship */
  user: Users;
  /** An array relationship */
  voted_posts: Array<Voted_Posts>;
  /** An aggregate relationship */
  voted_posts_aggregate: Voted_Posts_Aggregate;
};

/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsDonwvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsDonwvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsUpvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsUpvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsVoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** columns and relationships of "posts" */
export type PostsVoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: "posts_aggregate";
  aggregate?: Maybe<Posts_Aggregate_Fields>;
  nodes: Array<Posts>;
};

export type Posts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Posts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Posts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Posts_Aggregate_Bool_Exp_Count>;
};

export type Posts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Posts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: "posts_aggregate_fields";
  avg?: Maybe<Posts_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Posts_Max_Fields>;
  min?: Maybe<Posts_Min_Fields>;
  stddev?: Maybe<Posts_Stddev_Fields>;
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>;
  sum?: Maybe<Posts_Sum_Fields>;
  var_pop?: Maybe<Posts_Var_Pop_Fields>;
  var_samp?: Maybe<Posts_Var_Samp_Fields>;
  variance?: Maybe<Posts_Variance_Fields>;
};

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: InputMaybe<Posts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Posts_Max_Order_By>;
  min?: InputMaybe<Posts_Min_Order_By>;
  stddev?: InputMaybe<Posts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Posts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Posts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Posts_Sum_Order_By>;
  var_pop?: InputMaybe<Posts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Posts_Var_Samp_Order_By>;
  variance?: InputMaybe<Posts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: "posts_avg_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Posts_Bool_Exp>>;
  _not?: InputMaybe<Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Posts_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  community?: InputMaybe<Communities_Bool_Exp>;
  community_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  creator_id?: InputMaybe<Uuid_Comparison_Exp>;
  donwvoted_posts?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
  donwvoted_posts_aggregate?: InputMaybe<Donwvoted_Posts_Aggregate_Bool_Exp>;
  downvotes?: InputMaybe<Int_Comparison_Exp>;
  flair?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  isNSFW?: InputMaybe<Boolean_Comparison_Exp>;
  isOriginalContent?: InputMaybe<Boolean_Comparison_Exp>;
  isSpoiler?: InputMaybe<Boolean_Comparison_Exp>;
  link?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  upvoted_posts?: InputMaybe<Upvoted_Posts_Bool_Exp>;
  upvoted_posts_aggregate?: InputMaybe<Upvoted_Posts_Aggregate_Bool_Exp>;
  upvotes?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  voted_posts?: InputMaybe<Voted_Posts_Bool_Exp>;
  voted_posts_aggregate?: InputMaybe<Voted_Posts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = "posts_pkey",
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  community?: InputMaybe<Communities_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creator_id?: InputMaybe<Scalars["uuid"]["input"]>;
  donwvoted_posts?: InputMaybe<Donwvoted_Posts_Arr_Rel_Insert_Input>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvoted_posts?: InputMaybe<Upvoted_Posts_Arr_Rel_Insert_Input>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  voted_posts?: InputMaybe<Voted_Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: "posts_max_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  creator_id?: Maybe<Scalars["uuid"]["output"]>;
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  flair?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
};

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: "posts_min_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  creator_id?: Maybe<Scalars["uuid"]["output"]>;
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  flair?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  image?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
};

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: "posts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Posts_On_Conflict>;
};

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint;
  update_columns?: Array<Posts_Update_Column>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  community?: InputMaybe<Communities_Order_By>;
  community_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  creator_id?: InputMaybe<Order_By>;
  donwvoted_posts_aggregate?: InputMaybe<Donwvoted_Posts_Aggregate_Order_By>;
  downvotes?: InputMaybe<Order_By>;
  flair?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  isNSFW?: InputMaybe<Order_By>;
  isOriginalContent?: InputMaybe<Order_By>;
  isSpoiler?: InputMaybe<Order_By>;
  link?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvoted_posts_aggregate?: InputMaybe<Upvoted_Posts_Aggregate_Order_By>;
  upvotes?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  voted_posts_aggregate?: InputMaybe<Voted_Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creator_id",
  /** column name */
  Downvotes = "downvotes",
  /** column name */
  Flair = "flair",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
  /** column name */
  Link = "link",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Upvotes = "upvotes",
}

/** select "posts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "posts" */
export enum Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
}

/** select "posts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "posts" */
export enum Posts_Select_Column_Posts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creator_id?: InputMaybe<Scalars["uuid"]["input"]>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: "posts_stddev_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: "posts_stddev_pop_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: "posts_stddev_samp_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  creator_id?: InputMaybe<Scalars["uuid"]["input"]>;
  downvotes?: InputMaybe<Scalars["Int"]["input"]>;
  flair?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  image?: InputMaybe<Scalars["String"]["input"]>;
  isNSFW?: InputMaybe<Scalars["Boolean"]["input"]>;
  isOriginalContent?: InputMaybe<Scalars["Boolean"]["input"]>;
  isSpoiler?: InputMaybe<Scalars["Boolean"]["input"]>;
  link?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvotes?: InputMaybe<Scalars["Int"]["input"]>;
};

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: "posts_sum_fields";
  downvotes?: Maybe<Scalars["Int"]["output"]>;
  upvotes?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  Content = "content",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  CreatorId = "creator_id",
  /** column name */
  Downvotes = "downvotes",
  /** column name */
  Flair = "flair",
  /** column name */
  Id = "id",
  /** column name */
  Image = "image",
  /** column name */
  IsNsfw = "isNSFW",
  /** column name */
  IsOriginalContent = "isOriginalContent",
  /** column name */
  IsSpoiler = "isSpoiler",
  /** column name */
  Link = "link",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Upvotes = "upvotes",
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Posts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Posts_Set_Input>;
  where: Posts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: "posts_var_pop_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: "posts_var_samp_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: "posts_variance_fields";
  downvotes?: Maybe<Scalars["Float"]["output"]>;
  upvotes?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  downvotes?: InputMaybe<Order_By>;
  upvotes?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** An array relationship */
  communities: Array<Communities>;
  /** An aggregate relationship */
  communities_aggregate: Communities_Aggregate;
  /** fetch data from the table: "communities" using primary key columns */
  communities_by_pk?: Maybe<Communities>;
  /** An array relationship */
  donwvoted_posts: Array<Donwvoted_Posts>;
  /** An aggregate relationship */
  donwvoted_posts_aggregate: Donwvoted_Posts_Aggregate;
  /** fetch data from the table: "donwvoted_posts" using primary key columns */
  donwvoted_posts_by_pk?: Maybe<Donwvoted_Posts>;
  /** An array relationship */
  draft_posts: Array<Draft_Posts>;
  /** An aggregate relationship */
  draft_posts_aggregate: Draft_Posts_Aggregate;
  /** fetch data from the table: "draft_posts" using primary key columns */
  draft_posts_by_pk?: Maybe<Draft_Posts>;
  /** An array relationship */
  flares: Array<Flares>;
  /** An aggregate relationship */
  flares_aggregate: Flares_Aggregate;
  /** fetch data from the table: "flares" using primary key columns */
  flares_by_pk?: Maybe<Flares>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table: "test_many_to_many" */
  test_many_to_many: Array<Test_Many_To_Many>;
  /** fetch aggregated fields from the table: "test_many_to_many" */
  test_many_to_many_aggregate: Test_Many_To_Many_Aggregate;
  /** fetch data from the table: "test_many_to_many" using primary key columns */
  test_many_to_many_by_pk?: Maybe<Test_Many_To_Many>;
  /** An array relationship */
  upvoted_posts: Array<Upvoted_Posts>;
  /** An aggregate relationship */
  upvoted_posts_aggregate: Upvoted_Posts_Aggregate;
  /** fetch data from the table: "upvoted_posts" using primary key columns */
  upvoted_posts_by_pk?: Maybe<Upvoted_Posts>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  voted_posts: Array<Voted_Posts>;
  /** An aggregate relationship */
  voted_posts_aggregate: Voted_Posts_Aggregate;
  /** fetch data from the table: "voted_posts" using primary key columns */
  voted_posts_by_pk?: Maybe<Voted_Posts>;
};

export type Query_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Query_RootComments_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootCommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

export type Query_RootCommunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

export type Query_RootCommunities_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDonwvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

export type Query_RootDonwvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

export type Query_RootDonwvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootDraft_PostsArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

export type Query_RootDraft_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

export type Query_RootDraft_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootFlaresArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

export type Query_RootFlares_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

export type Query_RootFlares_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Query_RootPosts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootTest_Many_To_ManyArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

export type Query_RootTest_Many_To_Many_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

export type Query_RootTest_Many_To_Many_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUpvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

export type Query_RootUpvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

export type Query_RootUpvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootVoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

export type Query_RootVoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

export type Query_RootVoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  comments_stream: Array<Comments>;
  /** An array relationship */
  communities: Array<Communities>;
  /** An aggregate relationship */
  communities_aggregate: Communities_Aggregate;
  /** fetch data from the table: "communities" using primary key columns */
  communities_by_pk?: Maybe<Communities>;
  /** fetch data from the table in a streaming manner: "communities" */
  communities_stream: Array<Communities>;
  /** An array relationship */
  donwvoted_posts: Array<Donwvoted_Posts>;
  /** An aggregate relationship */
  donwvoted_posts_aggregate: Donwvoted_Posts_Aggregate;
  /** fetch data from the table: "donwvoted_posts" using primary key columns */
  donwvoted_posts_by_pk?: Maybe<Donwvoted_Posts>;
  /** fetch data from the table in a streaming manner: "donwvoted_posts" */
  donwvoted_posts_stream: Array<Donwvoted_Posts>;
  /** An array relationship */
  draft_posts: Array<Draft_Posts>;
  /** An aggregate relationship */
  draft_posts_aggregate: Draft_Posts_Aggregate;
  /** fetch data from the table: "draft_posts" using primary key columns */
  draft_posts_by_pk?: Maybe<Draft_Posts>;
  /** fetch data from the table in a streaming manner: "draft_posts" */
  draft_posts_stream: Array<Draft_Posts>;
  /** An array relationship */
  flares: Array<Flares>;
  /** An aggregate relationship */
  flares_aggregate: Flares_Aggregate;
  /** fetch data from the table: "flares" using primary key columns */
  flares_by_pk?: Maybe<Flares>;
  /** fetch data from the table in a streaming manner: "flares" */
  flares_stream: Array<Flares>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  posts_stream: Array<Posts>;
  /** fetch data from the table: "test_many_to_many" */
  test_many_to_many: Array<Test_Many_To_Many>;
  /** fetch aggregated fields from the table: "test_many_to_many" */
  test_many_to_many_aggregate: Test_Many_To_Many_Aggregate;
  /** fetch data from the table: "test_many_to_many" using primary key columns */
  test_many_to_many_by_pk?: Maybe<Test_Many_To_Many>;
  /** fetch data from the table in a streaming manner: "test_many_to_many" */
  test_many_to_many_stream: Array<Test_Many_To_Many>;
  /** An array relationship */
  upvoted_posts: Array<Upvoted_Posts>;
  /** An aggregate relationship */
  upvoted_posts_aggregate: Upvoted_Posts_Aggregate;
  /** fetch data from the table: "upvoted_posts" using primary key columns */
  upvoted_posts_by_pk?: Maybe<Upvoted_Posts>;
  /** fetch data from the table in a streaming manner: "upvoted_posts" */
  upvoted_posts_stream: Array<Upvoted_Posts>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** An array relationship */
  voted_posts: Array<Voted_Posts>;
  /** An aggregate relationship */
  voted_posts_aggregate: Voted_Posts_Aggregate;
  /** fetch data from the table: "voted_posts" using primary key columns */
  voted_posts_by_pk?: Maybe<Voted_Posts>;
  /** fetch data from the table in a streaming manner: "voted_posts" */
  voted_posts_stream: Array<Voted_Posts>;
};

export type Subscription_RootCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootComments_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootComments_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Comments_Stream_Cursor_Input>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

export type Subscription_RootCommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

export type Subscription_RootCommunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

export type Subscription_RootCommunities_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootCommunities_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Communities_Stream_Cursor_Input>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

export type Subscription_RootDonwvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

export type Subscription_RootDonwvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

export type Subscription_RootDonwvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDonwvoted_Posts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Donwvoted_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

export type Subscription_RootDraft_PostsArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

export type Subscription_RootDraft_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

export type Subscription_RootDraft_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootDraft_Posts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Draft_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

export type Subscription_RootFlaresArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

export type Subscription_RootFlares_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

export type Subscription_RootFlares_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootFlares_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Flares_Stream_Cursor_Input>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

export type Subscription_RootPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

export type Subscription_RootTest_Many_To_ManyArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

export type Subscription_RootTest_Many_To_Many_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

export type Subscription_RootTest_Many_To_Many_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootTest_Many_To_Many_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Test_Many_To_Many_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

export type Subscription_RootUpvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

export type Subscription_RootUpvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

export type Subscription_RootUpvoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUpvoted_Posts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Upvoted_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

export type Subscription_RootVoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

export type Subscription_RootVoted_Posts_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootVoted_Posts_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Voted_Posts_Stream_Cursor_Input>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** columns and relationships of "test_many_to_many" */
export type Test_Many_To_Many = {
  __typename?: "test_many_to_many";
  /** An object relationship */
  community: Communities;
  community_id: Scalars["uuid"]["output"];
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "test_many_to_many" */
export type Test_Many_To_Many_Aggregate = {
  __typename?: "test_many_to_many_aggregate";
  aggregate?: Maybe<Test_Many_To_Many_Aggregate_Fields>;
  nodes: Array<Test_Many_To_Many>;
};

export type Test_Many_To_Many_Aggregate_Bool_Exp = {
  count?: InputMaybe<Test_Many_To_Many_Aggregate_Bool_Exp_Count>;
};

export type Test_Many_To_Many_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "test_many_to_many" */
export type Test_Many_To_Many_Aggregate_Fields = {
  __typename?: "test_many_to_many_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Test_Many_To_Many_Max_Fields>;
  min?: Maybe<Test_Many_To_Many_Min_Fields>;
};

/** aggregate fields of "test_many_to_many" */
export type Test_Many_To_Many_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "test_many_to_many" */
export type Test_Many_To_Many_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Test_Many_To_Many_Max_Order_By>;
  min?: InputMaybe<Test_Many_To_Many_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test_many_to_many" */
export type Test_Many_To_Many_Arr_Rel_Insert_Input = {
  data: Array<Test_Many_To_Many_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Test_Many_To_Many_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test_many_to_many". All fields are combined with a logical 'AND'. */
export type Test_Many_To_Many_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Many_To_Many_Bool_Exp>>;
  _not?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Many_To_Many_Bool_Exp>>;
  community?: InputMaybe<Communities_Bool_Exp>;
  community_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_many_to_many" */
export enum Test_Many_To_Many_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestManyToManyPkey = "test_many_to_many_pkey",
}

/** input type for inserting data into table "test_many_to_many" */
export type Test_Many_To_Many_Insert_Input = {
  community?: InputMaybe<Communities_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Test_Many_To_Many_Max_Fields = {
  __typename?: "test_many_to_many_max_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "test_many_to_many" */
export type Test_Many_To_Many_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Test_Many_To_Many_Min_Fields = {
  __typename?: "test_many_to_many_min_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "test_many_to_many" */
export type Test_Many_To_Many_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test_many_to_many" */
export type Test_Many_To_Many_Mutation_Response = {
  __typename?: "test_many_to_many_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Many_To_Many>;
};

/** on_conflict condition type for table "test_many_to_many" */
export type Test_Many_To_Many_On_Conflict = {
  constraint: Test_Many_To_Many_Constraint;
  update_columns?: Array<Test_Many_To_Many_Update_Column>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

/** Ordering options when selecting data from "test_many_to_many". */
export type Test_Many_To_Many_Order_By = {
  community?: InputMaybe<Communities_Order_By>;
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_many_to_many */
export type Test_Many_To_Many_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "test_many_to_many" */
export enum Test_Many_To_Many_Select_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "test_many_to_many" */
export type Test_Many_To_Many_Set_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "test_many_to_many" */
export type Test_Many_To_Many_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_Many_To_Many_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_Many_To_Many_Stream_Cursor_Value_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "test_many_to_many" */
export enum Test_Many_To_Many_Update_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Test_Many_To_Many_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_Many_To_Many_Set_Input>;
  where: Test_Many_To_Many_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** columns and relationships of "upvoted_posts" */
export type Upvoted_Posts = {
  __typename?: "upvoted_posts";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  post: Posts;
  post_id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "upvoted_posts" */
export type Upvoted_Posts_Aggregate = {
  __typename?: "upvoted_posts_aggregate";
  aggregate?: Maybe<Upvoted_Posts_Aggregate_Fields>;
  nodes: Array<Upvoted_Posts>;
};

export type Upvoted_Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Upvoted_Posts_Aggregate_Bool_Exp_Count>;
};

export type Upvoted_Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Upvoted_Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "upvoted_posts" */
export type Upvoted_Posts_Aggregate_Fields = {
  __typename?: "upvoted_posts_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Upvoted_Posts_Max_Fields>;
  min?: Maybe<Upvoted_Posts_Min_Fields>;
};

/** aggregate fields of "upvoted_posts" */
export type Upvoted_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "upvoted_posts" */
export type Upvoted_Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Upvoted_Posts_Max_Order_By>;
  min?: InputMaybe<Upvoted_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "upvoted_posts" */
export type Upvoted_Posts_Arr_Rel_Insert_Input = {
  data: Array<Upvoted_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Upvoted_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "upvoted_posts". All fields are combined with a logical 'AND'. */
export type Upvoted_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Upvoted_Posts_Bool_Exp>>;
  _not?: InputMaybe<Upvoted_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Upvoted_Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "upvoted_posts" */
export enum Upvoted_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  UpvotedPostsPkey = "upvoted_posts_pkey",
}

/** input type for inserting data into table "upvoted_posts" */
export type Upvoted_Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Upvoted_Posts_Max_Fields = {
  __typename?: "upvoted_posts_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "upvoted_posts" */
export type Upvoted_Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Upvoted_Posts_Min_Fields = {
  __typename?: "upvoted_posts_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "upvoted_posts" */
export type Upvoted_Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "upvoted_posts" */
export type Upvoted_Posts_Mutation_Response = {
  __typename?: "upvoted_posts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Upvoted_Posts>;
};

/** on_conflict condition type for table "upvoted_posts" */
export type Upvoted_Posts_On_Conflict = {
  constraint: Upvoted_Posts_Constraint;
  update_columns?: Array<Upvoted_Posts_Update_Column>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "upvoted_posts". */
export type Upvoted_Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: upvoted_posts */
export type Upvoted_Posts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "upvoted_posts" */
export enum Upvoted_Posts_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "upvoted_posts" */
export type Upvoted_Posts_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "upvoted_posts" */
export type Upvoted_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Upvoted_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Upvoted_Posts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "upvoted_posts" */
export enum Upvoted_Posts_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Upvoted_Posts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Upvoted_Posts_Set_Input>;
  where: Upvoted_Posts_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users";
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  comments_aggregate: Comments_Aggregate;
  /** An array relationship */
  communities: Array<Communities>;
  /** An aggregate relationship */
  communities_aggregate: Communities_Aggregate;
  /** An object relationship */
  community?: Maybe<Communities>;
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at: Scalars["timestamptz"]["output"];
  date_of_birth?: Maybe<Scalars["date"]["output"]>;
  /** An array relationship */
  donwvoted_posts: Array<Donwvoted_Posts>;
  /** An aggregate relationship */
  donwvoted_posts_aggregate: Donwvoted_Posts_Aggregate;
  /** An array relationship */
  draft_posts: Array<Draft_Posts>;
  /** An aggregate relationship */
  draft_posts_aggregate: Draft_Posts_Aggregate;
  email: Scalars["String"]["output"];
  /** An array relationship */
  flares: Array<Flares>;
  /** An aggregate relationship */
  flares_aggregate: Flares_Aggregate;
  id: Scalars["uuid"]["output"];
  password: Scalars["String"]["output"];
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate;
  role: Scalars["String"]["output"];
  /** An array relationship */
  test_many_to_manies: Array<Test_Many_To_Many>;
  /** An aggregate relationship */
  test_many_to_manies_aggregate: Test_Many_To_Many_Aggregate;
  updated_at: Scalars["timestamptz"]["output"];
  /** An array relationship */
  upvoted_posts: Array<Upvoted_Posts>;
  /** An aggregate relationship */
  upvoted_posts_aggregate: Upvoted_Posts_Aggregate;
  username: Scalars["String"]["output"];
  /** An array relationship */
  voted_posts: Array<Voted_Posts>;
  /** An aggregate relationship */
  voted_posts_aggregate: Voted_Posts_Aggregate;
};

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comments_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Comments_Order_By>>;
  where?: InputMaybe<Comments_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCommunitiesArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersCommunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Communities_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Communities_Order_By>>;
  where?: InputMaybe<Communities_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDonwvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDonwvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Donwvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Donwvoted_Posts_Order_By>>;
  where?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDraft_PostsArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDraft_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Draft_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Draft_Posts_Order_By>>;
  where?: InputMaybe<Draft_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFlaresArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersFlares_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flares_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Flares_Order_By>>;
  where?: InputMaybe<Flares_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Posts_Order_By>>;
  where?: InputMaybe<Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersTest_Many_To_ManiesArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersTest_Many_To_Manies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Many_To_Many_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Test_Many_To_Many_Order_By>>;
  where?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUpvoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersUpvoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Upvoted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Upvoted_Posts_Order_By>>;
  where?: InputMaybe<Upvoted_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVoted_PostsArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersVoted_Posts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Voted_Posts_Order_By>>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  comments?: InputMaybe<Comments_Bool_Exp>;
  comments_aggregate?: InputMaybe<Comments_Aggregate_Bool_Exp>;
  communities?: InputMaybe<Communities_Bool_Exp>;
  communities_aggregate?: InputMaybe<Communities_Aggregate_Bool_Exp>;
  community?: InputMaybe<Communities_Bool_Exp>;
  community_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  date_of_birth?: InputMaybe<Date_Comparison_Exp>;
  donwvoted_posts?: InputMaybe<Donwvoted_Posts_Bool_Exp>;
  donwvoted_posts_aggregate?: InputMaybe<Donwvoted_Posts_Aggregate_Bool_Exp>;
  draft_posts?: InputMaybe<Draft_Posts_Bool_Exp>;
  draft_posts_aggregate?: InputMaybe<Draft_Posts_Aggregate_Bool_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  flares?: InputMaybe<Flares_Bool_Exp>;
  flares_aggregate?: InputMaybe<Flares_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  posts?: InputMaybe<Posts_Bool_Exp>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  test_many_to_manies?: InputMaybe<Test_Many_To_Many_Bool_Exp>;
  test_many_to_manies_aggregate?: InputMaybe<Test_Many_To_Many_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  upvoted_posts?: InputMaybe<Upvoted_Posts_Bool_Exp>;
  upvoted_posts_aggregate?: InputMaybe<Upvoted_Posts_Aggregate_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
  voted_posts?: InputMaybe<Voted_Posts_Bool_Exp>;
  voted_posts_aggregate?: InputMaybe<Voted_Posts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  comments?: InputMaybe<Comments_Arr_Rel_Insert_Input>;
  communities?: InputMaybe<Communities_Arr_Rel_Insert_Input>;
  community?: InputMaybe<Communities_Obj_Rel_Insert_Input>;
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  date_of_birth?: InputMaybe<Scalars["date"]["input"]>;
  donwvoted_posts?: InputMaybe<Donwvoted_Posts_Arr_Rel_Insert_Input>;
  draft_posts?: InputMaybe<Draft_Posts_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  flares?: InputMaybe<Flares_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  posts?: InputMaybe<Posts_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  test_many_to_manies?: InputMaybe<Test_Many_To_Many_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  upvoted_posts?: InputMaybe<Upvoted_Posts_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars["String"]["input"]>;
  voted_posts?: InputMaybe<Voted_Posts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  date_of_birth?: Maybe<Scalars["date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  community_id?: Maybe<Scalars["uuid"]["output"]>;
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  date_of_birth?: Maybe<Scalars["date"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  comments_aggregate?: InputMaybe<Comments_Aggregate_Order_By>;
  communities_aggregate?: InputMaybe<Communities_Aggregate_Order_By>;
  community?: InputMaybe<Communities_Order_By>;
  community_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  date_of_birth?: InputMaybe<Order_By>;
  donwvoted_posts_aggregate?: InputMaybe<Donwvoted_Posts_Aggregate_Order_By>;
  draft_posts_aggregate?: InputMaybe<Draft_Posts_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  flares_aggregate?: InputMaybe<Flares_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  posts_aggregate?: InputMaybe<Posts_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  test_many_to_manies_aggregate?: InputMaybe<Test_Many_To_Many_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  upvoted_posts_aggregate?: InputMaybe<Upvoted_Posts_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
  voted_posts_aggregate?: InputMaybe<Voted_Posts_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DateOfBirth = "date_of_birth",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  date_of_birth?: InputMaybe<Scalars["date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  community_id?: InputMaybe<Scalars["uuid"]["input"]>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  date_of_birth?: InputMaybe<Scalars["date"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CommunityId = "community_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DateOfBirth = "date_of_birth",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Password = "password",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** columns and relationships of "voted_posts" */
export type Voted_Posts = {
  __typename?: "voted_posts";
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  /** An object relationship */
  post: Posts;
  post_id: Scalars["uuid"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
  /** An object relationship */
  user: Users;
  user_id: Scalars["uuid"]["output"];
};

/** aggregated selection of "voted_posts" */
export type Voted_Posts_Aggregate = {
  __typename?: "voted_posts_aggregate";
  aggregate?: Maybe<Voted_Posts_Aggregate_Fields>;
  nodes: Array<Voted_Posts>;
};

export type Voted_Posts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Voted_Posts_Aggregate_Bool_Exp_Count>;
};

export type Voted_Posts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Voted_Posts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "voted_posts" */
export type Voted_Posts_Aggregate_Fields = {
  __typename?: "voted_posts_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Voted_Posts_Max_Fields>;
  min?: Maybe<Voted_Posts_Min_Fields>;
};

/** aggregate fields of "voted_posts" */
export type Voted_Posts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Voted_Posts_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "voted_posts" */
export type Voted_Posts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Voted_Posts_Max_Order_By>;
  min?: InputMaybe<Voted_Posts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "voted_posts" */
export type Voted_Posts_Arr_Rel_Insert_Input = {
  data: Array<Voted_Posts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Voted_Posts_On_Conflict>;
};

/** Boolean expression to filter rows from the table "voted_posts". All fields are combined with a logical 'AND'. */
export type Voted_Posts_Bool_Exp = {
  _and?: InputMaybe<Array<Voted_Posts_Bool_Exp>>;
  _not?: InputMaybe<Voted_Posts_Bool_Exp>;
  _or?: InputMaybe<Array<Voted_Posts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  post?: InputMaybe<Posts_Bool_Exp>;
  post_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "voted_posts" */
export enum Voted_Posts_Constraint {
  /** unique or primary key constraint on columns "id" */
  VotedPostsPkey = "voted_posts_pkey",
}

/** input type for inserting data into table "voted_posts" */
export type Voted_Posts_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post?: InputMaybe<Posts_Obj_Rel_Insert_Input>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Voted_Posts_Max_Fields = {
  __typename?: "voted_posts_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "voted_posts" */
export type Voted_Posts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Voted_Posts_Min_Fields = {
  __typename?: "voted_posts_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  post_id?: Maybe<Scalars["uuid"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
  user_id?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "voted_posts" */
export type Voted_Posts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "voted_posts" */
export type Voted_Posts_Mutation_Response = {
  __typename?: "voted_posts_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Voted_Posts>;
};

/** on_conflict condition type for table "voted_posts" */
export type Voted_Posts_On_Conflict = {
  constraint: Voted_Posts_Constraint;
  update_columns?: Array<Voted_Posts_Update_Column>;
  where?: InputMaybe<Voted_Posts_Bool_Exp>;
};

/** Ordering options when selecting data from "voted_posts". */
export type Voted_Posts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  post?: InputMaybe<Posts_Order_By>;
  post_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: voted_posts */
export type Voted_Posts_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "voted_posts" */
export enum Voted_Posts_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "voted_posts" */
export type Voted_Posts_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "voted_posts" */
export type Voted_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Voted_Posts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Voted_Posts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  post_id?: InputMaybe<Scalars["uuid"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  user_id?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "voted_posts" */
export enum Voted_Posts_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  PostId = "post_id",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Voted_Posts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Voted_Posts_Set_Input>;
  where: Voted_Posts_Bool_Exp;
};

export type CommentFragment = {
  __typename?: "comments";
  id: any;
  content: string;
  created_at: any;
  updated_at: any;
};

export type CommunityFragment = {
  __typename?: "communities";
  id: any;
  category?: string | null;
  name: string;
  updated_at: any;
  created_at: any;
};

export type DraftPostFragment = {
  __typename?: "draft_posts";
  id: any;
  content?: string | null;
  title: string;
  downvotes: number;
  upvotes: number;
  link?: string | null;
  image?: string | null;
  isNSFW: boolean;
  isOriginalContent: boolean;
  isSpoiler: boolean;
  flair?: string | null;
  created_at: any;
  updated_at: any;
};

export type FlairFragment = {
  __typename?: "flares";
  id: any;
  name: string;
  user_id: any;
  community_id: any;
  created_at: any;
  updated_at: any;
};

export type PostFragment = {
  __typename?: "posts";
  id: any;
  content?: string | null;
  title: string;
  downvotes: number;
  upvotes: number;
  link?: string | null;
  image?: string | null;
  isNSFW: boolean;
  isOriginalContent: boolean;
  isSpoiler: boolean;
  flair?: string | null;
  created_at: any;
  updated_at: any;
};

export type UserFragment = {
  __typename?: "users";
  id: any;
  username: string;
  email: string;
  date_of_birth?: any | null;
  role: string;
  created_at: any;
  updated_at: any;
  communities: Array<{
    __typename?: "communities";
    id: any;
    category?: string | null;
    name: string;
    updated_at: any;
    created_at: any;
  }>;
  comments: Array<{
    __typename?: "comments";
    id: any;
    content: string;
    created_at: any;
    updated_at: any;
  }>;
};

export type RegisterMutationVariables = Exact<{
  payload: RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: "mutation_root";
  register?: {
    __typename?: "RegisterOutput";
    token: string;
    statusIsOk: boolean;
    statusCode: number;
    statusMessage: string;
    statusPath: string;
  } | null;
};

export type LoginMutationVariables = Exact<{
  payload: LoginInput;
}>;

export type LoginMutation = {
  __typename?: "mutation_root";
  login?: {
    __typename?: "LoginOutput";
    token: string;
    statusIsOk: boolean;
    statusCode: number;
    statusMessage: string;
    statusPath: string;
  } | null;
};

export type CreateCommunityMutationVariables = Exact<{
  object: Communities_Insert_Input;
}>;

export type CreateCommunityMutation = {
  __typename?: "mutation_root";
  insert_communities_one?: {
    __typename?: "communities";
    id: any;
    category?: string | null;
    name: string;
    updated_at: any;
    created_at: any;
  } | null;
};

export type SaveDraftMutationVariables = Exact<{
  obj: Draft_Posts_Insert_Input;
}>;

export type SaveDraftMutation = {
  __typename?: "mutation_root";
  insert_draft_posts_one?: {
    __typename?: "draft_posts";
    id: any;
    content?: string | null;
    title: string;
    downvotes: number;
    upvotes: number;
    link?: string | null;
    image?: string | null;
    isNSFW: boolean;
    isOriginalContent: boolean;
    isSpoiler: boolean;
    flair?: string | null;
    created_at: any;
    updated_at: any;
  } | null;
};

export type InsertFlairMutationVariables = Exact<{
  obj: Array<Flares_Insert_Input> | Flares_Insert_Input;
}>;

export type InsertFlairMutation = {
  __typename?: "mutation_root";
  insert_flares?: {
    __typename?: "flares_mutation_response";
    affected_rows: number;
    returning: Array<{
      __typename?: "flares";
      id: any;
      name: string;
      user_id: any;
      community_id: any;
      created_at: any;
      updated_at: any;
    }>;
  } | null;
};

export type UpvotePostMutationVariables = Exact<{
  postId: Scalars["uuid"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type UpvotePostMutation = {
  __typename?: "mutation_root";
  insert_upvoted_posts_one?: {
    __typename?: "upvoted_posts";
    id: any;
    post_id: any;
    user_id: any;
  } | null;
};

export type DownvotePostMutationVariables = Exact<{
  postId: Scalars["uuid"]["input"];
}>;

export type DownvotePostMutation = {
  __typename?: "mutation_root";
  update_posts_by_pk?: { __typename?: "posts"; id: any } | null;
};

export type DeleteUpvotedPostMutationVariables = Exact<{
  postId: Scalars["uuid"]["input"];
}>;

export type DeleteUpvotedPostMutation = {
  __typename?: "mutation_root";
  delete_upvoted_posts?: {
    __typename?: "upvoted_posts_mutation_response";
    affected_rows: number;
    returning: Array<{ __typename?: "upvoted_posts"; id: any }>;
  } | null;
};

export type CreatePostMutationVariables = Exact<{
  object: Posts_Insert_Input;
}>;

export type CreatePostMutation = {
  __typename?: "mutation_root";
  insert_posts_one?: {
    __typename?: "posts";
    id: any;
    content?: string | null;
    title: string;
    downvotes: number;
    upvotes: number;
    link?: string | null;
    image?: string | null;
    isNSFW: boolean;
    isOriginalContent: boolean;
    isSpoiler: boolean;
    flair?: string | null;
    created_at: any;
    updated_at: any;
  } | null;
};

export type InsertUserMutationVariables = Exact<{
  payload: Users_Insert_Input;
}>;

export type InsertUserMutation = {
  __typename?: "mutation_root";
  insert_users_one?: { __typename?: "users"; id: any } | null;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetUserByIdQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "users";
    id: any;
    username: string;
    email: string;
    date_of_birth?: any | null;
    role: string;
    created_at: any;
    updated_at: any;
    communities: Array<{
      __typename?: "communities";
      id: any;
      category?: string | null;
      name: string;
      updated_at: any;
      created_at: any;
    }>;
    comments: Array<{
      __typename?: "comments";
      id: any;
      content: string;
      created_at: any;
      updated_at: any;
    }>;
  }>;
};

export type GetCommunityByUserIdQueryVariables = Exact<{
  userId: Scalars["uuid"]["input"];
}>;

export type GetCommunityByUserIdQuery = {
  __typename?: "query_root";
  communities: Array<{
    __typename?: "communities";
    id: any;
    category?: string | null;
    name: string;
    updated_at: any;
    created_at: any;
  }>;
};

export type GetFlaresByCommunityIdQueryVariables = Exact<{
  communityId: Scalars["uuid"]["input"];
  userId: Scalars["uuid"]["input"];
}>;

export type GetFlaresByCommunityIdQuery = {
  __typename?: "query_root";
  flares: Array<{
    __typename?: "flares";
    id: any;
    name: string;
    user_id: any;
    community_id: any;
    created_at: any;
    updated_at: any;
  }>;
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPostsQuery = {
  __typename?: "query_root";
  posts: Array<{
    __typename?: "posts";
    id: any;
    content?: string | null;
    title: string;
    downvotes: number;
    upvotes: number;
    link?: string | null;
    image?: string | null;
    isNSFW: boolean;
    isOriginalContent: boolean;
    isSpoiler: boolean;
    flair?: string | null;
    created_at: any;
    updated_at: any;
    comments_aggregate: {
      __typename?: "comments_aggregate";
      aggregate?: {
        __typename?: "comments_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
  users: Array<{
    __typename?: "users";
    id: any;
    username: string;
    email: string;
    date_of_birth?: any | null;
    role: string;
    created_at: any;
    updated_at: any;
    communities: Array<{
      __typename?: "communities";
      id: any;
      category?: string | null;
      name: string;
      updated_at: any;
      created_at: any;
    }>;
    comments: Array<{
      __typename?: "comments";
      id: any;
      content: string;
      created_at: any;
      updated_at: any;
    }>;
  }>;
  communities: Array<{
    __typename?: "communities";
    id: any;
    category?: string | null;
    name: string;
    updated_at: any;
    created_at: any;
  }>;
};

export type GetUpvotedPostsQueryVariables = Exact<{
  userId: Scalars["uuid"]["input"];
}>;

export type GetUpvotedPostsQuery = {
  __typename?: "query_root";
  upvoted_posts: Array<{ __typename?: "upvoted_posts"; user_id: any }>;
};

export type GetDraftPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDraftPostsQuery = {
  __typename?: "query_root";
  draft_posts: Array<{
    __typename?: "draft_posts";
    id: any;
    content?: string | null;
    title: string;
    downvotes: number;
    upvotes: number;
    link?: string | null;
    image?: string | null;
    isNSFW: boolean;
    isOriginalContent: boolean;
    isSpoiler: boolean;
    flair?: string | null;
    created_at: any;
    updated_at: any;
  }>;
  draft_posts_aggregate: {
    __typename?: "draft_posts_aggregate";
    aggregate?: {
      __typename?: "draft_posts_aggregate_fields";
      count: number;
    } | null;
  };
};

export type GetPostsSubscriptionVariables = Exact<{ [key: string]: never }>;

export type GetPostsSubscription = {
  __typename?: "subscription_root";
  posts: Array<{
    __typename?: "posts";
    id: any;
    content?: string | null;
    title: string;
    downvotes: number;
    upvotes: number;
    link?: string | null;
    image?: string | null;
    isNSFW: boolean;
    isOriginalContent: boolean;
    isSpoiler: boolean;
    flair?: string | null;
    created_at: any;
    updated_at: any;
    community: {
      __typename?: "communities";
      id: any;
      category?: string | null;
      name: string;
      updated_at: any;
      created_at: any;
    };
    comments_aggregate: {
      __typename?: "comments_aggregate";
      aggregate?: {
        __typename?: "comments_aggregate_fields";
        count: number;
      } | null;
    };
  }>;
};

export const DraftPostFragmentDoc = gql`
  fragment DraftPost on draft_posts {
    id
    content
    title
    downvotes
    upvotes
    link
    image
    isNSFW
    isOriginalContent
    isSpoiler
    flair
    created_at
    updated_at
  }
`;
export const FlairFragmentDoc = gql`
  fragment Flair on flares {
    id
    name
    user_id
    community_id
    created_at
    updated_at
  }
`;
export const PostFragmentDoc = gql`
  fragment Post on posts {
    id
    content
    title
    downvotes
    upvotes
    link
    image
    isNSFW
    isOriginalContent
    isSpoiler
    flair
    created_at
    updated_at
  }
`;
export const CommunityFragmentDoc = gql`
  fragment Community on communities {
    id
    category
    name
    updated_at
    created_at
  }
`;
export const CommentFragmentDoc = gql`
  fragment Comment on comments {
    id
    content
    created_at
    updated_at
  }
`;
export const UserFragmentDoc = gql`
  fragment User on users {
    id
    username
    email
    date_of_birth
    role
    communities {
      ...Community
    }
    comments {
      ...Comment
    }
    created_at
    updated_at
  }
  ${CommunityFragmentDoc}
  ${CommentFragmentDoc}
`;
export const RegisterDocument = gql`
  mutation register($payload: RegisterInput!) {
    register(payload: $payload) {
      token
      statusIsOk
      statusCode
      statusMessage
      statusPath
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options,
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const LoginDocument = gql`
  mutation login($payload: LoginInput!) {
    login(payload: $payload) {
      token
      statusIsOk
      statusCode
      statusMessage
      statusPath
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const CreateCommunityDocument = gql`
  mutation createCommunity($object: communities_insert_input!) {
    insert_communities_one(object: $object) {
      ...Community
    }
  }
  ${CommunityFragmentDoc}
`;
export type CreateCommunityMutationFn = Apollo.MutationFunction<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;

/**
 * __useCreateCommunityMutation__
 *
 * To run a mutation, you first call `useCreateCommunityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommunityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommunityMutation, { data, loading, error }] = useCreateCommunityMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreateCommunityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCommunityMutation,
    CreateCommunityMutationVariables
  >(CreateCommunityDocument, options);
}
export type CreateCommunityMutationHookResult = ReturnType<
  typeof useCreateCommunityMutation
>;
export type CreateCommunityMutationResult =
  Apollo.MutationResult<CreateCommunityMutation>;
export type CreateCommunityMutationOptions = Apollo.BaseMutationOptions<
  CreateCommunityMutation,
  CreateCommunityMutationVariables
>;
export const SaveDraftDocument = gql`
  mutation saveDraft($obj: draft_posts_insert_input!) {
    insert_draft_posts_one(object: $obj) {
      ...DraftPost
    }
  }
  ${DraftPostFragmentDoc}
`;
export type SaveDraftMutationFn = Apollo.MutationFunction<
  SaveDraftMutation,
  SaveDraftMutationVariables
>;

/**
 * __useSaveDraftMutation__
 *
 * To run a mutation, you first call `useSaveDraftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveDraftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveDraftMutation, { data, loading, error }] = useSaveDraftMutation({
 *   variables: {
 *      obj: // value for 'obj'
 *   },
 * });
 */
export function useSaveDraftMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SaveDraftMutation,
    SaveDraftMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SaveDraftMutation, SaveDraftMutationVariables>(
    SaveDraftDocument,
    options,
  );
}
export type SaveDraftMutationHookResult = ReturnType<
  typeof useSaveDraftMutation
>;
export type SaveDraftMutationResult = Apollo.MutationResult<SaveDraftMutation>;
export type SaveDraftMutationOptions = Apollo.BaseMutationOptions<
  SaveDraftMutation,
  SaveDraftMutationVariables
>;
export const InsertFlairDocument = gql`
  mutation insertFlair($obj: [flares_insert_input!]!) {
    insert_flares(objects: $obj) {
      affected_rows
      returning {
        ...Flair
      }
    }
  }
  ${FlairFragmentDoc}
`;
export type InsertFlairMutationFn = Apollo.MutationFunction<
  InsertFlairMutation,
  InsertFlairMutationVariables
>;

/**
 * __useInsertFlairMutation__
 *
 * To run a mutation, you first call `useInsertFlairMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFlairMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFlairMutation, { data, loading, error }] = useInsertFlairMutation({
 *   variables: {
 *      obj: // value for 'obj'
 *   },
 * });
 */
export function useInsertFlairMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertFlairMutation,
    InsertFlairMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertFlairMutation, InsertFlairMutationVariables>(
    InsertFlairDocument,
    options,
  );
}
export type InsertFlairMutationHookResult = ReturnType<
  typeof useInsertFlairMutation
>;
export type InsertFlairMutationResult =
  Apollo.MutationResult<InsertFlairMutation>;
export type InsertFlairMutationOptions = Apollo.BaseMutationOptions<
  InsertFlairMutation,
  InsertFlairMutationVariables
>;
export const UpvotePostDocument = gql`
  mutation upvotePost($postId: uuid!, $userId: uuid!) {
    insert_upvoted_posts_one(object: { post_id: $postId, user_id: $userId }) {
      id
      post_id
      user_id
    }
  }
`;
export type UpvotePostMutationFn = Apollo.MutationFunction<
  UpvotePostMutation,
  UpvotePostMutationVariables
>;

/**
 * __useUpvotePostMutation__
 *
 * To run a mutation, you first call `useUpvotePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpvotePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upvotePostMutation, { data, loading, error }] = useUpvotePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpvotePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpvotePostMutation,
    UpvotePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpvotePostMutation, UpvotePostMutationVariables>(
    UpvotePostDocument,
    options,
  );
}
export type UpvotePostMutationHookResult = ReturnType<
  typeof useUpvotePostMutation
>;
export type UpvotePostMutationResult =
  Apollo.MutationResult<UpvotePostMutation>;
export type UpvotePostMutationOptions = Apollo.BaseMutationOptions<
  UpvotePostMutation,
  UpvotePostMutationVariables
>;
export const DownvotePostDocument = gql`
  mutation downvotePost($postId: uuid!) {
    update_posts_by_pk(pk_columns: { id: $postId }, _inc: { upvotes: -1 }) {
      id
    }
  }
`;
export type DownvotePostMutationFn = Apollo.MutationFunction<
  DownvotePostMutation,
  DownvotePostMutationVariables
>;

/**
 * __useDownvotePostMutation__
 *
 * To run a mutation, you first call `useDownvotePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDownvotePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [downvotePostMutation, { data, loading, error }] = useDownvotePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDownvotePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DownvotePostMutation,
    DownvotePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DownvotePostMutation,
    DownvotePostMutationVariables
  >(DownvotePostDocument, options);
}
export type DownvotePostMutationHookResult = ReturnType<
  typeof useDownvotePostMutation
>;
export type DownvotePostMutationResult =
  Apollo.MutationResult<DownvotePostMutation>;
export type DownvotePostMutationOptions = Apollo.BaseMutationOptions<
  DownvotePostMutation,
  DownvotePostMutationVariables
>;
export const DeleteUpvotedPostDocument = gql`
  mutation deleteUpvotedPost($postId: uuid!) {
    delete_upvoted_posts(where: { post_id: { _eq: $postId } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
export type DeleteUpvotedPostMutationFn = Apollo.MutationFunction<
  DeleteUpvotedPostMutation,
  DeleteUpvotedPostMutationVariables
>;

/**
 * __useDeleteUpvotedPostMutation__
 *
 * To run a mutation, you first call `useDeleteUpvotedPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUpvotedPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUpvotedPostMutation, { data, loading, error }] = useDeleteUpvotedPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeleteUpvotedPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUpvotedPostMutation,
    DeleteUpvotedPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteUpvotedPostMutation,
    DeleteUpvotedPostMutationVariables
  >(DeleteUpvotedPostDocument, options);
}
export type DeleteUpvotedPostMutationHookResult = ReturnType<
  typeof useDeleteUpvotedPostMutation
>;
export type DeleteUpvotedPostMutationResult =
  Apollo.MutationResult<DeleteUpvotedPostMutation>;
export type DeleteUpvotedPostMutationOptions = Apollo.BaseMutationOptions<
  DeleteUpvotedPostMutation,
  DeleteUpvotedPostMutationVariables
>;
export const CreatePostDocument = gql`
  mutation createPost($object: posts_insert_input!) {
    insert_posts_one(object: $object) {
      ...Post
    }
  }
  ${PostFragmentDoc}
`;
export type CreatePostMutationFn = Apollo.MutationFunction<
  CreatePostMutation,
  CreatePostMutationVariables
>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useCreatePostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(
    CreatePostDocument,
    options,
  );
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export type CreatePostMutationResult =
  Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export const InsertUserDocument = gql`
  mutation insertUser($payload: users_insert_input!) {
    insert_users_one(object: $payload) {
      id
    }
  }
`;
export type InsertUserMutationFn = Apollo.MutationFunction<
  InsertUserMutation,
  InsertUserMutationVariables
>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useInsertUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserMutation,
    InsertUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<InsertUserMutation, InsertUserMutationVariables>(
    InsertUserDocument,
    options,
  );
}
export type InsertUserMutationHookResult = ReturnType<
  typeof useInsertUserMutation
>;
export type InsertUserMutationResult =
  Apollo.MutationResult<InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<
  InsertUserMutation,
  InsertUserMutationVariables
>;
export const GetUserByIdDocument = gql`
  query getUserById($id: uuid!) {
    users(where: { id: { _eq: $id } }) {
      ...User
    }
  }
  ${UserFragmentDoc}
`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options,
  );
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>;
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>;
export const GetCommunityByUserIdDocument = gql`
  query getCommunityByUserId($userId: uuid!) {
    communities(where: { user_id: { _eq: $userId } }) {
      ...Community
    }
  }
  ${CommunityFragmentDoc}
`;

/**
 * __useGetCommunityByUserIdQuery__
 *
 * To run a query within a React component, call `useGetCommunityByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommunityByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommunityByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCommunityByUserIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCommunityByUserIdQuery,
    GetCommunityByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCommunityByUserIdQuery,
    GetCommunityByUserIdQueryVariables
  >(GetCommunityByUserIdDocument, options);
}
export function useGetCommunityByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCommunityByUserIdQuery,
    GetCommunityByUserIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCommunityByUserIdQuery,
    GetCommunityByUserIdQueryVariables
  >(GetCommunityByUserIdDocument, options);
}
export type GetCommunityByUserIdQueryHookResult = ReturnType<
  typeof useGetCommunityByUserIdQuery
>;
export type GetCommunityByUserIdLazyQueryHookResult = ReturnType<
  typeof useGetCommunityByUserIdLazyQuery
>;
export type GetCommunityByUserIdQueryResult = Apollo.QueryResult<
  GetCommunityByUserIdQuery,
  GetCommunityByUserIdQueryVariables
>;
export const GetFlaresByCommunityIdDocument = gql`
  query getFlaresByCommunityId($communityId: uuid!, $userId: uuid!) {
    flares(
      where: {
        user_id: { _eq: $userId }
        _and: { community_id: { _eq: $communityId } }
      }
    ) {
      ...Flair
    }
  }
  ${FlairFragmentDoc}
`;

/**
 * __useGetFlaresByCommunityIdQuery__
 *
 * To run a query within a React component, call `useGetFlaresByCommunityIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFlaresByCommunityIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFlaresByCommunityIdQuery({
 *   variables: {
 *      communityId: // value for 'communityId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetFlaresByCommunityIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFlaresByCommunityIdQuery,
    GetFlaresByCommunityIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetFlaresByCommunityIdQuery,
    GetFlaresByCommunityIdQueryVariables
  >(GetFlaresByCommunityIdDocument, options);
}
export function useGetFlaresByCommunityIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFlaresByCommunityIdQuery,
    GetFlaresByCommunityIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetFlaresByCommunityIdQuery,
    GetFlaresByCommunityIdQueryVariables
  >(GetFlaresByCommunityIdDocument, options);
}
export type GetFlaresByCommunityIdQueryHookResult = ReturnType<
  typeof useGetFlaresByCommunityIdQuery
>;
export type GetFlaresByCommunityIdLazyQueryHookResult = ReturnType<
  typeof useGetFlaresByCommunityIdLazyQuery
>;
export type GetFlaresByCommunityIdQueryResult = Apollo.QueryResult<
  GetFlaresByCommunityIdQuery,
  GetFlaresByCommunityIdQueryVariables
>;
export const GetAllPostsDocument = gql`
  query getAllPosts {
    posts {
      id
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
    posts {
      ...Post
    }
    users {
      ...User
    }
    communities {
      ...Community
    }
  }
  ${PostFragmentDoc}
  ${UserFragmentDoc}
  ${CommunityFragmentDoc}
`;

/**
 * __useGetAllPostsQuery__
 *
 * To run a query within a React component, call `useGetAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options,
  );
}
export function useGetAllPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllPostsQuery,
    GetAllPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllPostsQuery, GetAllPostsQueryVariables>(
    GetAllPostsDocument,
    options,
  );
}
export type GetAllPostsQueryHookResult = ReturnType<typeof useGetAllPostsQuery>;
export type GetAllPostsLazyQueryHookResult = ReturnType<
  typeof useGetAllPostsLazyQuery
>;
export type GetAllPostsQueryResult = Apollo.QueryResult<
  GetAllPostsQuery,
  GetAllPostsQueryVariables
>;
export const GetUpvotedPostsDocument = gql`
  query getUpvotedPosts($userId: uuid!) {
    upvoted_posts(where: { user_id: { _eq: $userId } }) {
      user_id
    }
  }
`;

/**
 * __useGetUpvotedPostsQuery__
 *
 * To run a query within a React component, call `useGetUpvotedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUpvotedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUpvotedPostsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUpvotedPostsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUpvotedPostsQuery,
    GetUpvotedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUpvotedPostsQuery, GetUpvotedPostsQueryVariables>(
    GetUpvotedPostsDocument,
    options,
  );
}
export function useGetUpvotedPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUpvotedPostsQuery,
    GetUpvotedPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUpvotedPostsQuery,
    GetUpvotedPostsQueryVariables
  >(GetUpvotedPostsDocument, options);
}
export type GetUpvotedPostsQueryHookResult = ReturnType<
  typeof useGetUpvotedPostsQuery
>;
export type GetUpvotedPostsLazyQueryHookResult = ReturnType<
  typeof useGetUpvotedPostsLazyQuery
>;
export type GetUpvotedPostsQueryResult = Apollo.QueryResult<
  GetUpvotedPostsQuery,
  GetUpvotedPostsQueryVariables
>;
export const GetDraftPostsDocument = gql`
  query getDraftPosts {
    draft_posts {
      ...DraftPost
    }
    draft_posts_aggregate {
      aggregate {
        count
      }
    }
  }
  ${DraftPostFragmentDoc}
`;

/**
 * __useGetDraftPostsQuery__
 *
 * To run a query within a React component, call `useGetDraftPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDraftPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDraftPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDraftPostsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDraftPostsQuery,
    GetDraftPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetDraftPostsQuery, GetDraftPostsQueryVariables>(
    GetDraftPostsDocument,
    options,
  );
}
export function useGetDraftPostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDraftPostsQuery,
    GetDraftPostsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetDraftPostsQuery, GetDraftPostsQueryVariables>(
    GetDraftPostsDocument,
    options,
  );
}
export type GetDraftPostsQueryHookResult = ReturnType<
  typeof useGetDraftPostsQuery
>;
export type GetDraftPostsLazyQueryHookResult = ReturnType<
  typeof useGetDraftPostsLazyQuery
>;
export type GetDraftPostsQueryResult = Apollo.QueryResult<
  GetDraftPostsQuery,
  GetDraftPostsQueryVariables
>;
export const GetPostsDocument = gql`
  subscription getPosts {
    posts {
      ...Post
      community {
        ...Community
      }
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
  ${PostFragmentDoc}
  ${CommunityFragmentDoc}
`;

/**
 * __useGetPostsSubscription__
 *
 * To run a query within a React component, call `useGetPostsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetPostsSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetPostsSubscription,
    GetPostsSubscriptionVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    GetPostsSubscription,
    GetPostsSubscriptionVariables
  >(GetPostsDocument, options);
}
export type GetPostsSubscriptionHookResult = ReturnType<
  typeof useGetPostsSubscription
>;
export type GetPostsSubscriptionResult =
  Apollo.SubscriptionResult<GetPostsSubscription>;
