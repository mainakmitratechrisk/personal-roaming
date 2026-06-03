export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

export const servicesData: ServiceCard[] = [
  {
    icon: "/images/discovers/flights.svg",
    title: "Flights",
    description: "Global inventory with competitive rates on 500+ airlines.",
  },
  {
    icon: "/images/discovers/hotels.svg",
    title: "Hotels",
    description: "Access 1M+ hotels worldwide with real-time availability.",
  },
  {
    icon: "/images/discovers/holidays.svg",
    title: "Holidays",
    description: "Curated holiday packages to top destinations.",
  },
  {
    icon: "/images/discovers/visa.svg",
    title: "Visa Services",
    description: "Hassle-free visa processing for multiple destinations.",
  },
  {
    icon: "/images/discovers/insurance.svg",
    title: "Insurance",
    description: "Comprehensive travel insurance solutions for your customers.",
  },
  {
    icon: "/images/discovers/transfers.svg",
    title: "Transfers",
    description: "Airport transfers and ground transportation worldwide.",
  },
];

export interface FeatureItem {
  id: string;
  text_1: string;
  text_2: string;
  image: string;
}

export const featuresData: FeatureItem[] = [
  {
    id: "rates",
    text_1: "Best Rates & ",
    text_2: "Exclusive Deals",
    image: "/images/travel/rates.svg",
  },
  {
    id: "inventory",
    text_1: "Real-time Inventory ",
    text_2: "& Instant Confirmation",
    image: "/images/travel/invantory.svg",
  },
  {
    id: "platform",
    text_1: "Easy-to-use Platform ",
    text_2: "& API Integration",
    image: "/images/travel/plateform.svg",
  },
  {
    id: "credit",
    text_1: "Flexible Credit ",
    text_2: "& Payment Options",
    image: "/images/travel/credit.svg",
  },
  {
    id: "manager",
    text_1: "Dedicated Relationship ",
    text_2: "Manager",
    image: "/images/travel/user.svg",
  },
];

export interface StatItem {
  id: string;
  number: string;
  label: string;
  subLabel: string;
  image: string;
}

export const statsData: StatItem[] = [
  {
    id: "partners",
    number: "500+",
    label: "Travel Partners",
    subLabel: "Worldwide",
    image: "/images/travel/travel.svg",
  },
  {
    id: "airlines",
    number: "500+",
    label: "Airlines",
    subLabel: "Connected",
    image: "/images/travel/airline.svg",
  },
  {
    id: "hotels",
    number: "1M+",
    label: "Hotels",
    subLabel: "Worldwide",
    image: "/images/travel/hotel.svg",
  },
  {
    id: "countries",
    number: "100+",
    label: "Countries",
    subLabel: "Served",
    image: "/images/travel/country.svg",
  },
  {
    id: "support",
    number: "24/7",
    label: "Support",
    subLabel: "Always",
    image: "/images/travel/support.svg",
  },
];

export const HOTEL_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury Hotel Resort Pool",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    alt: "Modern Sailboat Hotel",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80",
    alt: "Beachfront Premium Resort",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    alt: "Hillside Mediterranean Hotel",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80",
    alt: "Tropical Villa Stay",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80",
    alt: "Boutique Exotic Hotel",
  },
];

export const testimonialData = [
  {
    id: 1,
    rating: 5,
    description:
      "Roaming has simplified our operations and increased our profits with their competitive fares and excellent support.",
    image: "/images/testimonal/testimonial_1.png",
    name: "Md. Tanvir Hossain",
    position: "CEO, Travel Point BD",
  },
  {
    id: 2,
    rating: 5,
    description:
      "The platform is highly user-friendly, and the 24/7 support team is always available to assist whenever needed.",
    image: "/images/testimonal/testimonial_2.png",
    name: "Sharmin Akter",
    position: "Manager, Holiday Experts",
  },
  {
    id: 3,
    rating: 5,
    description:
      "Visa processing is so easy and fast with Roaming. Highly Recommended for travel agents.",
    image: "/images/testimonal/testimonial_3.png",
    name: "Arif Rahman",
    position: "Director, Air Travel Solutions",
  },
  {
    id: 4,
    rating: 5,
    description:
      "A true business partner! Their inventory and rates are unmatched in the market.",
    image: "/images/testimonal/testimonial_4.png",
    name: "Nusrat Jahan",
    position: "Operations Head, Fly Smart BD",
  },

  {
    id: 5,
    rating: 5,
    description:
      "A true business partner! Their inventory and rates are unmatched in the market.",
    image: "/images/testimonal/testimonial_4.png",
    name: "Nusrat Jahan",
    position: "Operations Head, Fly Smart BD",
  },
];
