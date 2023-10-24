/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CourseFragment
// ====================================================

export interface CourseFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface CourseFragment_instructor {
  __typename: "Instructor";
  name: string;
}

export interface CourseFragment_category {
  __typename: "Category";
  name: string;
}

export interface CourseFragment {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: CourseFragment_cover;
  instructor: CourseFragment_instructor;
  category: CourseFragment_category;
  price: number;
  available: boolean;
  date_course: any;
}
