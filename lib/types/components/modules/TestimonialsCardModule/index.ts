export type CardContentType = {
  id: number;
  short_content: string;
  content: string;
  author: string;
  author_image: string;
};

export type TestimonialsType = {
  title: string;
  description: string;
  data: CardContentType[];
};
