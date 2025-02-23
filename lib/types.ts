export type Darkmode = {
  darkmode: boolean;
};

export type NavbarLink = {
  title: string;
  id: number;
  href: string;
  url: string;
  key: string;
  items: NavbarLink[];
};

export type PageNode = {
  id: string;
  title: string;
  body: string;
}

export type PagesData = {
  edges: { node: PageNode }[];
}