type SliderT = {
  id: number;
  description: string;
  authorIcon: string;
  authorName: string;
};

export type SliderComponentProps = {
  data: SliderT[];
};
