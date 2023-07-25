/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecommended_recommended_section_highlight_background | null;
  floatImage: QueryRecommended_recommended_section_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryRecommended_recommended_section_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryRecommended_recommended_section_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryRecommended_recommended_section_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: QueryRecommended_recommended_section_courses_cover | null;
  instructor: QueryRecommended_recommended_section_courses_instructor | null;
  category: QueryRecommended_recommended_section_courses_category | null;
  price: number;
}

export interface QueryRecommended_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecommended_recommended_section_highlight | null;
  courses: QueryRecommended_recommended_section_courses[];
}

export interface QueryRecommended_recommended {
  __typename: "Recommended";
  section: QueryRecommended_recommended_section | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}
