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

export interface QueryOrders_orders_courses_curriculum_content_users_permissions_users {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface QueryOrders_orders_courses_curriculum_content {
  __typename: "ComponentCourseVideos";
  id: string;
  users_permissions_users: QueryOrders_orders_courses_curriculum_content_users_permissions_users[];
}

export interface QueryOrders_orders_courses_curriculum {
  __typename: "ComponentCourseCurriculum";
  content: (QueryOrders_orders_courses_curriculum_content)[];
}

export interface QueryOrders_orders_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: QueryOrders_orders_courses_cover;
  instructor: QueryOrders_orders_courses_instructor;
  category: QueryOrders_orders_courses_category;
  price: number;
  available: boolean;
  date_course: any ;
  curriculum: (QueryOrders_orders_courses_curriculum)[];
}

export interface QueryOrders_orders {
  __typename: "Order";
  id: string;
  created_at: any;
  status: string | null;
  checkout_url: string | null;
  courses: QueryOrders_orders_courses[];
}

export interface QueryOrders {
  orders: QueryOrders_orders[];
}

export interface QueryOrdersVariables {
  identifier: string;
}
