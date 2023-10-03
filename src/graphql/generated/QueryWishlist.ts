/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_courses_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlist_wishlists_courses_instructor {
  __typename: "Instructor";
  name: string;
}

export interface QueryWishlist_wishlists_courses_category {
  __typename: "Category";
  name: string;
}

export interface QueryWishlist_wishlists_courses {
  __typename: "Course";
  id: string;
  name: string;
  slug: string | null;
  cover: QueryWishlist_wishlists_courses_cover | null;
  instructor: QueryWishlist_wishlists_courses_instructor | null;
  category: QueryWishlist_wishlists_courses_category | null;
  price: number | null;
  available: boolean;
}

export interface QueryWishlist_wishlists {
  __typename: "Wishlist";
  id: string;
  courses: QueryWishlist_wishlists_courses[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[];
}

export interface QueryWishlistVariables {
  identifier: string;
}
