/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LandingFragment
// ====================================================

export interface LandingFragment_banner {
  __typename: "UploadFile";
  url: string;
}

export interface LandingFragment_learnItem_icon {
  __typename: "UploadFile";
  url: string;
}

export interface LandingFragment_learnItem {
  __typename: "ComponentLandingLearnItem";
  icon: LandingFragment_learnItem_icon | null;
  title: string | null;
  description: string | null;
}

export interface LandingFragment_forYou_icon {
  __typename: "UploadFile";
  url: string;
}

export interface LandingFragment_forYou {
  __typename: "ComponentLandingForYou";
  description: string | null;
  highlight: string | null;
  icon: LandingFragment_forYou_icon | null;
}

export interface LandingFragment_installment {
  __typename: "ComponentLandingInstallment";
  max_installment: number | null;
  installment_price: number | null;
  fees: boolean | null;
}

export interface LandingFragment {
  __typename: "Landing";
  id: string;
  name: string | null;
  demo: string | null;
  price: number | null;
  promotional_price: number | null;
  slug: string | null;
  banner: LandingFragment_banner | null;
  heading: string | null;
  description: string | null;
  color: string | null;
  learnItem: (LandingFragment_learnItem | null)[] | null;
  forYou: (LandingFragment_forYou | null)[] | null;
  installment: LandingFragment_installment | null;
}
