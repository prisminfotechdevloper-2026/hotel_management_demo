export type HotelType = "heritage" | "boutique" | "resort" | "business";

export interface HotelPreset {
  id: HotelType;
  label: string;
  name: string;
  tagline: string;
  description: string;
  city: string;
  defaultAccent: string;
  heroImage: string;
  badgeText: string;
}

export const HOTEL_PRESETS: Record<HotelType, HotelPreset> = {
  heritage: {
    id: "heritage",
    label: "Heritage Palace",
    name: "Aurelia Heritage Palace",
    tagline: "Where Royal Rajput Grandeur Meets Timeless Luxury",
    description: "An authentic 18th-century palace restored with contemporary five-star indulgence, pristine courtyards, and royal pavilion dining in Jaipur.",
    city: "Jaipur, Rajasthan",
    defaultAccent: "#B8975A",
    heroImage: "/images/hero-palace.jpg",
    badgeText: "Heritage Property &bull; Est. 1782",
  },
  boutique: {
    id: "boutique",
    label: "Boutique Retreat",
    name: "Aurelia Forest Sanctuary",
    tagline: "Curated Luxury in an Intimate Mountain Sanctuary",
    description: "An exclusive 16-suite hideaway immersed in the serene Himalayan foothills, featuring artisanal culinary experiences and forest wellness.",
    city: "Rishikesh, Uttarakhand",
    defaultAccent: "#2E6F56",
    heroImage: "/images/hero-suite.jpg",
    badgeText: "Boutique Sanctuary &bull; 16 Private Suites",
  },
  resort: {
    id: "resort",
    label: "Beach Resort",
    name: "Aurelia Palms Bay & Spa",
    tagline: "Sun-Drenched Coastal Haven with Private Beach Pavilions",
    description: "An ultra-luxury coastal oasis with infinity lagoon pools, private beach dining, and world-class ayurvedic wellness pavilions.",
    city: "Goa, India",
    defaultAccent: "#1F4E79",
    heroImage: "/images/hero-palace.jpg",
    badgeText: "Coastal Resort &bull; Private Beach Access",
  },
  business: {
    id: "business",
    label: "Business Hotel",
    name: "Aurelia Grand Horizon",
    tagline: "High-Velocity Executive Luxury for Discerning Travelers",
    description: "Sophisticated urban sanctuary in the heart of the business district, engineered with intelligent workspace technology and skyline lounges.",
    city: "Mumbai, India",
    defaultAccent: "#8C3826",
    heroImage: "/images/video-poster.jpg",
    badgeText: "Executive Luxury &bull; Prime Financial Center",
  },
};

export const ACCENT_PRESETS = [
  { name: "Royal Gold", hex: "#B8975A", hoverHex: "#9A7B43" },
  { name: "Deep Emerald", hex: "#2E6F56", hoverHex: "#225340" },
  { name: "Imperial Navy", hex: "#1F4E79", hoverHex: "#163857" },
  { name: "Rich Terracotta", hex: "#8C3826", hoverHex: "#702C1E" },
];

export interface RoomOption {
  id: string;
  name: string;
  pricePerNight: number;
  size: string;
  maxGuests: number;
  bedType: string;
  image: string;
  amenities: string[];
  description: string;
}

export const ROOMS_DATA: RoomOption[] = [
  {
    id: "deluxe-heritage",
    name: "Deluxe Palace Room",
    pricePerNight: 14500,
    size: "480 sq.ft",
    maxGuests: 2,
    bedType: "King Bed",
    image: "/images/hero-suite.jpg",
    amenities: ["Palace Courtyard View", "Marble Bathroom", "Complimentary High-Tea", "High-speed Wi-Fi"],
    description: "Elegantly appointed room featuring traditional Rajasthani jharokha arches, carved marble detailing, and bespoke luxury bedding.",
  },
  {
    id: "royal-suite",
    name: "Royal Heritage Suite",
    pricePerNight: 24500,
    size: "850 sq.ft",
    maxGuests: 3,
    bedType: "Four-Poster King",
    image: "/images/hero-suite.jpg",
    amenities: ["Separate Living Lounge", "Private Butler Service", "Deep Soak Jacuzzi", "Garden Balcony"],
    description: "Expansive royal suite with handcrafted teakwood furnishings, regal silk drapes, and an intimate private sit-out overlooking Mughal fountains.",
  },
  {
    id: "maharaja-penthouse",
    name: "Maharaja Presidential Pavilion",
    pricePerNight: 48000,
    size: "1,600 sq.ft",
    maxGuests: 4,
    bedType: "2 Master King Bedrooms",
    image: "/images/hero-palace.jpg",
    amenities: ["Private Plunge Pool", "Dedicated Chauffeur", "In-Suite Royal Dining", "Panoramic Vista"],
    description: "The pinnacle of palace grandeur. Two master suites, private heated plunge pool, and dedicated round-the-clock royal hospitality team.",
  },
];

export interface AdminBooking {
  id: string;
  guestName: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  status: "Confirmed" | "Checked In" | "Arriving Today";
  totalAmount: string;
  directChannel: boolean;
}

export const ADMIN_MOCK_DATA = {
  todayArrivals: 14,
  occupancyPercent: 88,
  weekRevenue: "₹24,85,000",
  directShare: "74%",
  recentBookings: [
    {
      id: "BK-8902",
      guestName: "Vikram Rathore",
      roomName: "Royal Heritage Suite",
      checkIn: "Today",
      checkOut: "Oct 28",
      status: "Arriving Today" as const,
      totalAmount: "₹49,000",
      directChannel: true,
    },
    {
      id: "BK-8901",
      guestName: "Sunita Kapoor",
      roomName: "Deluxe Palace Room",
      checkIn: "Oct 24",
      checkOut: "Oct 27",
      status: "Checked In" as const,
      totalAmount: "₹43,500",
      directChannel: true,
    },
    {
      id: "BK-8898",
      guestName: "David Sterling",
      roomName: "Maharaja Presidential Pavilion",
      checkIn: "Oct 25",
      checkOut: "Oct 29",
      status: "Confirmed" as const,
      totalAmount: "₹1,92,000",
      directChannel: true,
    },
    {
      id: "BK-8895",
      guestName: "Arjun Singhal",
      roomName: "Deluxe Palace Room",
      checkIn: "Oct 26",
      checkOut: "Oct 28",
      status: "Confirmed" as const,
      totalAmount: "₹29,000",
      directChannel: true,
    },
  ],
};
