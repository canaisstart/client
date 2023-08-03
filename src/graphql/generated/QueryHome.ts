/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR, ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
}

export interface QueryHome_banners {
  __typename: "Banner";
  image: QueryHome_banners_image | null;
  title: string;
  subtitle: string;
  button: QueryHome_banners_button | null;
  ribbon: QueryHome_banners_ribbon | null;
}

export interface QueryHome_freeCourses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeCourses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryHome_freeCourses_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_freeCourses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: QueryHome_freeCourses_cover | null;
  instructor: QueryHome_freeCourses_instructor | null;
  category: QueryHome_freeCourses_category | null;
  price: number;
  available: boolean;
}

export interface QueryHome_sections_popularCourses_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularCourses_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularCourses_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_popularCourses_highlight_background | null;
  floatImage: QueryHome_sections_popularCourses_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_popularCourses_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_popularCourses_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryHome_sections_popularCourses_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryHome_sections_popularCourses_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: QueryHome_sections_popularCourses_courses_cover | null;
  instructor: QueryHome_sections_popularCourses_courses_instructor | null;
  category: QueryHome_sections_popularCourses_courses_category | null;
  price: number;
  available: boolean;
}

export interface QueryHome_sections_popularCourses {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_popularCourses_highlight | null;
  courses: QueryHome_sections_popularCourses_courses[];
}

export interface QueryHome_sections_freeCourses_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeCourses_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeCourses_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_freeCourses_highlight_background | null;
  floatImage: QueryHome_sections_freeCourses_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryHome_sections_freeCourses {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryHome_sections_freeCourses_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  popularCourses: QueryHome_sections_popularCourses | null;
  freeCourses: QueryHome_sections_freeCourses | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  freeCourses: QueryHome_freeCourses[];
  sections: QueryHome_sections | null;
}
