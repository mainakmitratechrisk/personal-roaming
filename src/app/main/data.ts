// Navigation Links structured exactly from your layout columns
export const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Careers", href: "/#careers" },
      { label: "News & Media", href: "/#news" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Travel Agencies", href: "/#solutions/travel-agencies" },
      { label: "For Corporate", href: "/#solutions/corporate" },
      { label: "API Integration", href: "/#solutions/api-integration" },
      { label: "White Label Solutions", href: "/#solutions/white-label" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Flights", href: "/#products/flights" },
      { label: "Hotels", href: "/#products/hotels" },
      { label: "Holidays", href: "/#products/holidays" },
      { label: "Visa & Insurance", href: "/#products/visa-insurance" },
      { label: "Transfers", href: "/#products/transfers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/#blog" },
      { label: "Help Center", href: "/#help" },
      { label: "Terms & Conditions", href: "/#terms" },
      { label: "Privacy Policy", href: "/#privacy" },
    ],
  },
];

// Ordered mapping of all 5 accreditation partners precisely scanned from the image
export const accreditationData = [
  {
    id: 1,
    image: "/images/footer/footer_1.png", // IATA Logo
    alt: "IATA - International Air Transport Association",
    hasText: false,
  },
  {
    id: 2,
    image: "/images/footer/footer_2.png", // PATA Logo
    alt: "PATA - Pacific Asia Travel Association",
    hasText: false,
  },
  {
    id: 3,
    image: "/images/footer/footer_3.png", // CAAB Logo
    alt: "Civil Aviation Authority of Bangladesh Emblem",
    hasText: true,
    text_1: "Civil Aviation Authority ",
    text_2: "of Bangladesh",
  },
  {
    id: 4,
    image: "/images/footer/footer_4.png", // DNCC Logo
    alt: "Dhaka North City Corporation Emblem",
    hasText: true,
    text_1: "Dhaka",
    text_2: "North City",
    text_3: "Corporation",
  },
  {
    id: 5,
    image: "/images/footer/footer_5.png", // ATAB Logo
    alt: "ATAB Logo",
    hasText: true,
    text_1: "Association of Travel ",
    text_2: "Agents of Bangladesh",
  },
];
