/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserHasCourse
// ====================================================

export interface UserHasCourse_orders_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
}

export interface UserHasCourse_orders_user {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface UserHasCourse_orders {
  __typename: "Order";
  courses: UserHasCourse_orders_courses[];
  user: UserHasCourse_orders_user | null;
}

export interface UserHasCourse {
  orders: UserHasCourse_orders[];
}

export interface UserHasCourseVariables {
  userId: string;
  slug: string;
}
