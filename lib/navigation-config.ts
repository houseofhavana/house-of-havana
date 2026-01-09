export type NavItemData = {
  label: string;
  href: string;
  children?: NavItemData[];
  isMegaMenu?: boolean; // Flag to indicate if this item should trigger a mega menu
};

export type MegaMenuColumn = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type MegaMenuData = {
  label: string;
  href: string;
  isMegaMenu: true;
  children: MegaMenuColumn[];
};

export const navigationData: (NavItemData | MegaMenuData)[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    // isMegaMenu: true,
    // children: [
    //   {
    //     title: 'Strategy Consulting',
    //     links: [
    //       { label: 'Feasibility Study', href: '/services/strategy/feasibility-study' },
    //       { label: 'Business Plan', href: '/services/strategy/business-plan' },
    //       { label: 'Growth Strategy', href: '/services/strategy/growth-strategy' },
    //       // { label: 'Brand Strategy', href: '/services/strategy/brand-strategy' },
    //       { label: 'Real Estate Strategy', href: '/services/strategy/real-estate-strategy' },
    //     ],
    //   },
    //   {
    //     title: 'Corporate Finance Consulting',
    //     links: [
    //       { label: 'Business Valuation', href: '/services/finance/business-valuation' },
    //       { label: 'Transaction Support', href: '/services/finance/transaction-support' },
    //       { label: 'M&A Consulting', href: '/services/finance/ma-consulting' },
    //     ],
    //   },
    //   {
    //     title: 'Private Capital Consulting',
    //     links: [
    //       { label: 'Commercial Due Diligence', href: '/services/capital/due-diligence' },
    //       { label: 'Portfolio Valuation', href: '/services/capital/portfolio-valuation' },
    //       { label: 'Value Creation', href: '/services/capital/value-creation' },
    //     ],
    //   },
    //   {
    //     title: 'Turnaround & Restructuring',
    //     links: [
    //       { label: 'Turnaround Advisory', href: '/services/restructuring/turnaround-advisory' },
    //       { label: 'Restructuring Consulting', href: '/services/restructuring/consulting' },
    //     ],
    //   },
    // ],
  },
  {
    label: "Barbers",
    href: "/barbers",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Reviews",
    href: "/reviews",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
