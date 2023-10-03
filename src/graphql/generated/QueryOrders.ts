/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryOrders
// ====================================================

export interface QueryOrders_orders_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryOrders_orders_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryOrders_orders_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryOrders_orders_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: QueryOrders_orders_courses_cover ;
  instructor: QueryOrders_orders_courses_instructor;
  category: QueryOrders_orders_courses_category;
  price: number;
  available: boolean;
  date_course: any;
}

export interface QueryOrders_orders {
  __typename: "Order";
  id: string;
  created_at: any;
  status: string;
  checkout_url: string;
  courses: QueryOrders_orders_courses[];
}

export interface QueryOrders {
  orders: QueryOrders_orders[];
}

export interface QueryOrdersVariables {
  identifier: string;
}
