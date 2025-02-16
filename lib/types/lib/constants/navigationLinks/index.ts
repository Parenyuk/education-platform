export type NavigationLinksT = {
  header: NavigationLinkT[];
  footer: NavigationLinkT[];
};

type NavigationLinkItemT = {
  id: number;
  title: string;
  href: string;
};

export type NavigationLinkT = {
  id: number;
  name: string;
  href: string;
  items: NavigationLinkItemT[] | null;
};
