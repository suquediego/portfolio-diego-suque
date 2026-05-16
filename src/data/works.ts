export type Work = {
  title: string;
  category: string;
  image: string;
  href: string;
};

export const works: Work[] = [
  {
    title: "RivusPay",
    category: "Product Design",
    image: "/images/rivuspay-preview.png",
    href: "/portfolio/rivuspay",
  },
  {
    title: "Jobs.bet",
    category: "Front-end",
    image: "/images/jobsbet-preview.png",
    href: "/portfolio/jobsbet",
  },
  {
    title: "Whooks Docs",
    category: "Developer Experience",
    image: "/images/whooks-preview.png",
    href: "/portfolio/whooks-docs",
  },
];