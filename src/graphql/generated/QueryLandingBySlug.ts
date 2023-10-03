/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryLandingBySlug
// ====================================================

export interface QueryLandingBySlug_landings_banner {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandingBySlug_landings_learnItem_icon {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandingBySlug_landings_learnItem {
  __typename: "ComponentPageLearnItem";
  icon: QueryLandingBySlug_landings_learnItem_icon | null;
  title: string | null;
  description: string | null;
}

export interface QueryLandingBySlug_landings_forYou_icon {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandingBySlug_landings_forYou {
  __typename: "ComponentPageForYou";
  description: string | null;
  highlight: string | null;
  icon: QueryLandingBySlug_landings_forYou_icon | null;
}

export interface QueryLandingBySlug_landings {
  __typename: "Landing";
  id: string;
  slug: string | null;
  banner: QueryLandingBySlug_landings_banner | null;
  heading: string | null;
  description: string | null;
  color: string | null;
  learnItem: (QueryLandingBySlug_landings_learnItem | null)[] | null;
  forYou: (QueryLandingBySlug_landings_forYou | null)[] | null;
}

export interface QueryLandingBySlug {
  landings: QueryLandingBySlug_landings[];
}

export interface QueryLandingBySlugVariables {
  slug: string;
}
