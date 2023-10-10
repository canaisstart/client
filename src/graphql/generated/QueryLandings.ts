/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryLandings
// ====================================================

export interface QueryLandings_landings_banner {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandings_landings_learnItem_icon {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandings_landings_learnItem {
  __typename: "ComponentLandingLearnItem";
  icon: QueryLandings_landings_learnItem_icon | null;
  title: string | null;
  description: string | null;
}

export interface QueryLandings_landings_forYou_icon {
  __typename: "UploadFile";
  url: string;
}

export interface QueryLandings_landings_forYou {
  __typename: "ComponentLandingForYou";
  description: string | null;
  highlight: string | null;
  icon: QueryLandings_landings_forYou_icon | null;
}

export interface QueryLandings_landings_installment {
  __typename: "ComponentLandingInstallment";
  max_installment: number | null;
  installment_price: number | null;
  fees: boolean | null;
}

export interface QueryLandings_landings {
  __typename: "Landing";
  id: string;
  name: string | null;
  demo: string | null;
  price: number | null;
  promotional_price: number | null;
  slug: string | null;
  banner: QueryLandings_landings_banner | null;
  heading: string | null;
  description: string | null;
  color: string | null;
  learnItem: (QueryLandings_landings_learnItem | null)[] | null;
  forYou: (QueryLandings_landings_forYou | null)[] | null;
  installment: QueryLandings_landings_installment | null;
}

export interface QueryLandings {
  landings: QueryLandings_landings[];
}

export interface QueryLandingsVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
