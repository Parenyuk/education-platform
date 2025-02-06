export type NavigationLinksType = {
  header: NavigationLink[];
  footer: NavigationLink[];
};

export type NavigationLink = {
  id: number;
  name: string;
  href: string;
  items:
    | {
        id: number;
        title: string;
        href: string;
      }[]
    | null;
};
