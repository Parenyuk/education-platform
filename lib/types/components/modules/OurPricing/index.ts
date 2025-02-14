export type PricingModeT = 'center' | 'right';

export type FeatureType = {
  name: string;
  value: boolean;
};

export type OurPricingProps = {
  mode?: PricingModeT;
};
