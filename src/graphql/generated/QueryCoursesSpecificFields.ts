/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCoursesSpecificFields
// ====================================================

export interface QueryCoursesSpecificFields_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryCoursesSpecificFields_courses_course_type {
  __typename: "CourseType";
  name: string;
}

export interface QueryCoursesSpecificFields_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryCoursesSpecificFields_courses_curriculum_content_users_permissions_users {
  __typename: "UsersPermissionsUser";
  id: string;
}

export interface QueryCoursesSpecificFields_courses_curriculum_content_video {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCoursesSpecificFields_courses_curriculum_content_file {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCoursesSpecificFields_courses_curriculum_content {
  __typename: "ComponentCourseVideos";
  link: string | null;
  classtime: string | null;
  id: string;
  name: string;
  description: string | null;
  users_permissions_users: QueryCoursesSpecificFields_courses_curriculum_content_users_permissions_users[];
  video: QueryCoursesSpecificFields_courses_curriculum_content_video[];
  file: QueryCoursesSpecificFields_courses_curriculum_content_file | null;
}

export interface QueryCoursesSpecificFields_courses_curriculum {
  __typename: "ComponentCourseCurriculum";
  id: string;
  module: string;
  content: (QueryCoursesSpecificFields_courses_curriculum_content | null)[] | null;
}

export interface QueryCoursesSpecificFields_courses {
  __typename: "Course";
  slug: string | null;
  id: string;
  name: string;
  short_description: string;
  description: string;
  duration: string;
  lesson: number;
  updated_at: any;
  category: QueryCoursesSpecificFields_courses_category | null;
  course_type: QueryCoursesSpecificFields_courses_course_type | null;
  instructor: QueryCoursesSpecificFields_courses_instructor | null;
  curriculum: (QueryCoursesSpecificFields_courses_curriculum | null)[] | null;
}

export interface QueryCoursesSpecificFields {
  courses: QueryCoursesSpecificFields_courses[];
}

export interface QueryCoursesSpecificFieldsVariables {
  slug: string;
}
