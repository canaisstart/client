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
  __typename: 'Course'
  id: string
  name: string
  slug: string
  cover: QueryWishlist_wishlists_courses_cover
  instructor: QueryWishlist_wishlists_courses_instructor
  category: QueryWishlist_wishlists_courses_category
  price: number
  available: boolean
  date_course: any
}

export interface QueryWishlist_wishlists {
  __typename: 'Wishlist'
  id: string
  courses: QueryWishlist_wishlists_courses[]
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[]
}

export interface QueryWishlistVariables {
  identifier: string;
}
