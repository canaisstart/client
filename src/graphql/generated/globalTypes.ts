/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT {
  left = 'left',
  right = 'right'
}

export enum ENUM_COMPONENTPAGERIBBON_COLOR {
  primary = 'primary',
  secondary = 'secondary'
}

export enum ENUM_COMPONENTPAGERIBBON_SIZE {
  normal = 'normal',
  small = 'small'
}

export interface InputID {
  id: string
}

export interface UsersPermissionsRegisterInput {
  username: string
  email: string
  password: string
}

export interface WishlistInput {
  user?: string
  courses?: (string | null)[]
  created_by?: string
  updated_by?: string
}

export interface createWishlistInput {
  data?: WishlistInput
}

export interface editWishlistInput {
  user?: string
  courses?: (string | null)[]
  created_by?: string
  updated_by?: string
}

export interface updateWishlistInput {
  where?: InputID
  data?: editWishlistInput
}

//==============================================================
// END Enums and Input Objects
//==============================================================
