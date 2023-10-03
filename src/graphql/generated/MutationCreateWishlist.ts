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
  slug: string | null;
  cover: MutationCreateWishlist_createWishlist_wishlist_courses_cover | null;
  instructor: MutationCreateWishlist_createWishlist_wishlist_courses_instructor | null;
  category: MutationCreateWishlist_createWishlist_wishlist_courses_category | null;
  price: number | null;
  available: boolean;
}

export interface MutationCreateWishlist_createWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  courses: MutationCreateWishlist_createWishlist_wishlist_courses[];
}

export interface MutationCreateWishlist_createWishlist {
  __typename: "createWishlistPayload";
  wishlist: MutationCreateWishlist_createWishlist_wishlist | null;
}

export interface MutationCreateWishlist {
  createWishlist: MutationCreateWishlist_createWishlist | null;
}

export interface MutationCreateWishlistVariables {
  input: createWishlistInput;
}
