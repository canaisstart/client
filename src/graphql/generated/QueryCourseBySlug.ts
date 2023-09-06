/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryCourseBySlug
// ====================================================

export interface QueryCourseBySlug_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCourseBySlug_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryCourseBySlug_courses_course_type {
  __typename: "CourseType";
  name: string;
  slug: string | null;
}

export interface QueryCourseBySlug_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryCourseBySlug_courses_curriculum_content_video {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCourseBySlug_courses_curriculum_content_file {
  __typename: "UploadFile";
  url: string;
}

export interface QueryCourseBySlug_courses_curriculum_content {
  __typename: "ComponentCourseVideos";
  id: string,
  name: string;
  description: string | null;
  video: QueryCourseBySlug_courses_curriculum_content_video[];
  file: QueryCourseBySlug_courses_curriculum_content_file | null;
  link: string;
  classtime: string;
}

export interface QueryCourseBySlug_courses_curriculum {
  __typename: "ComponentCourseCurriculum";
  id: string,
  module: string;
  content: (QueryCourseBySlug_courses_curriculum_content | null)[] | null;
}

export interface QueryCourseBySlug_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  short_description: string;
  description: string;
  price: number;
  duration: string;
  lesson: number;
  cover: QueryCourseBySlug_courses_cover;
  category: QueryCourseBySlug_courses_category;
  course_type: QueryCourseBySlug_courses_course_type;
  instructor: QueryCourseBySlug_courses_instructor;
  curriculum: (QueryCourseBySlug_courses_curriculum | null)[] | null;
  updated_at: any;
  date_course: any | null;
}

export interface QueryCourseBySlug {
  courses: QueryCourseBySlug_courses[];
}

export interface QueryCourseBySlugVariables {
  slug: string;
}
