export type BenefitType = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export type BenefitsType = {
  title: string;
  description: string;
  data: BenefitType[];
};
