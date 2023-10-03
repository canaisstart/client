/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { createWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationCreateWishlist
// ====================================================

export interface MutationCreateWishlist_createWishlist_wishlist_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_courses_category {
  __typename: "Category";
  name: string;
}

export interface MutationCreateWishlist_createWishlist_wishlist_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: MutationCreateWishlist_createWishlist_wishlist_courses_cover;
  instructor: MutationCreateWishlist_createWishlist_wishlist_courses_instructor;
  category: MutationCreateWishlist_createWishlist_wishlist_courses_category;
  price: number;
  available: boolean;
  date_course: any;
}

export interface MutationCreateWishlist_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  courses: MutationCreateWishlist_createWishlist_wishlist_courses[];
}

export interface MutationCreateWishlist_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutationCreateWishlist_createWishlist_wishlist;
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist;
}

export interface MutationCreateWishlistVariables {
  input: createWishlistInput;
}
