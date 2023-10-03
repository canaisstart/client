/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCourses
// ====================================================

export interface QueryCourses_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCourses_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryCourses_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryCourses_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: QueryCourses_courses_cover | null;
  instructor: QueryCourses_courses_instructor | null;
  category: QueryCourses_courses_category | null;
  price: number | null;
  available: boolean;
}

export interface QueryCourses_coursesConnection_values {
  __typename: "Course";
  id: string;
}

export interface QueryCourses_coursesConnection {
  __typename: "CourseConnection";
  values: (QueryCourses_coursesConnection_values | null)[] | null;
}

export interface QueryCourses {
  courses: QueryCourses_courses[];
  coursesConnection: QueryCourses_coursesConnection | null;
}

export interface QueryCoursesVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
