/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_courses_category {
  __typename: "Category";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string;
  cover: MutationUpdateWishlist_updateWishlist_wishlist_courses_cover;
  instructor: MutationUpdateWishlist_updateWishlist_wishlist_courses_instructor ;
  category: MutationUpdateWishlist_updateWishlist_wishlist_courses_category;
  price: number;
  available: boolean;
  date_course: any;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  courses: MutationUpdateWishlist_updateWishlist_wishlist_courses[];
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist ;
}

export interface MutationUpdateWishlistVariables {
  input?: updateWishlistInput;
}
