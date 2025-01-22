export type FeatureType = {
  name: string;
  value: boolean;
};

export type CardPriceType = {
  id: number;
  created_at: string;
  plan_type: string;
  price_per_month: number;
  price_per_year: number;
  available_features: FeatureType[];
};

export type OurPricingType = {
  title: string;
  description: string;
  data: CardPriceType[];
};
