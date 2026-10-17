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
  sampleRoomName: string;
  samplePricePerNight: number;
}

export const HOTEL_PRESETS: Record<HotelType, HotelPreset> = {
  heritage: {
    id: "heritage",
    label: "Heritage Palace",
    name: "Aurelia Heritage Palace",
    tagline: "Authentic Royal Palace Stay with Warm Indian Hospitality",
    description: "Experience royal living in a restored 18th-century palace in Jaipur. Walk through peaceful courtyards, enjoy traditional dining under the stars, and relax in spacious heritage suites with modern comfort.",
    city: "Jaipur, Rajasthan",
    defaultAccent: "#B8975A",
    heroImage: "/images/hero-palace.jpg",
    badgeText: "Historic Palace • Jaipur, Rajasthan",
    sampleRoomName: "Royal Heritage Suite",
    samplePricePerNight: 3200,
  },
  boutique: {
    id: "boutique",
    label: "Boutique Retreat",
    name: "Aurelia Forest Sanctuary",
    tagline: "Peaceful Forest Retreat Surrounded by Mountain Views",
    description: "A calm 16-suite mountain hideaway in Rishikesh. Breathe clean forest air, enjoy fresh home-style meals, relax on nature walks, and sleep peacefully in cozy wooden chalets.",
    city: "Rishikesh, Uttarakhand",
    defaultAccent: "#2E6F56",
    heroImage: "/images/boutique-retreat.jpg",
    badgeText: "Quiet Nature Stay • Rishikesh Hills",
    sampleRoomName: "Forest Pine Chalet",
    samplePricePerNight: 2800,
  },
  resort: {
    id: "resort",
    label: "Beach Resort",
    name: "Aurelia Palms Bay & Spa",
    tagline: "Your Beachside Paradise with Direct Ocean Access",
    description: "Relax by the sea with direct private beach access in Goa. Enjoy refreshing lagoon swimming pools, beachside sunset dinners, and comfortable sea-view rooms with guaranteed best direct rates.",
    city: "Goa, India",
    defaultAccent: "#1F4E79",
    heroImage: "/images/resort-beach.jpg",
    badgeText: "Direct Beach Access • South Goa",
    sampleRoomName: "Oceanfront Cabana Villa",
    samplePricePerNight: 4500,
  },
  business: {
    id: "business",
    label: "Business Hotel",
    name: "Aurelia Grand Horizon",
    tagline: "Comfortable City Stay with Fast Wi-Fi & 24/7 Service",
    description: "Located right in the heart of Mumbai's prime commercial center. Enjoy quiet, soundproof rooms, comfortable beds, express check-in, 24/7 room service, and instant GST invoicing.",
    city: "Mumbai, India",
    defaultAccent: "#8C3826",
    heroImage: "/images/business-hotel.jpg",
    badgeText: "Prime City Location • Mumbai Central",
    sampleRoomName: "Executive Club Studio",
    samplePricePerNight: 2400,
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
    name: "Deluxe Heritage Room",
    pricePerNight: 2200,
    size: "480 sq.ft",
    maxGuests: 2,
    bedType: "King Bed",
    image: "/images/hero-suite.jpg",
    amenities: ["Garden & Courtyard View", "Air Conditioning", "Free Breakfast", "High-Speed Wi-Fi"],
    description: "Spacious and comfortable room with a plush king bed, private marble bathroom, traditional decor, and pleasant garden views.",
  },
  {
    id: "royal-suite",
    name: "Royal Heritage Suite",
    pricePerNight: 2600,
    size: "850 sq.ft",
    maxGuests: 3,
    bedType: "Four-Poster King",
    image: "/images/hero-suite.jpg",
    amenities: ["Separate Sitting Lounge", "Private Balcony", "Bathtub & Rain Shower", "Tea & Coffee Maker"],
    description: "Generous luxury suite featuring a private living room, balcony with fountain views, large bathtub, and personalized guest assistance.",
  },
  {
    id: "maharaja-penthouse",
    name: "Maharaja Family Pavilion",
    pricePerNight: 3000,
    size: "1,600 sq.ft",
    maxGuests: 4,
    bedType: "2 Master King Bedrooms",
    image: "/images/hero-palace.jpg",
    amenities: ["Private Plunge Pool", "2 Master Bedrooms", "Private Dining Space", "Panoramic Scenic Views"],
    description: "Our premier family suite with two private master bedrooms, spacious living area, private plunge pool, and dedicated staff support.",
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
  weekRevenue: "₹2,85,000",
  directShare: "74%",
  recentBookings: [
    {
      id: "BK-8902",
      guestName: "Vikram Rathore",
      roomName: "Royal Heritage Suite",
      checkIn: "Today",
      checkOut: "Oct 28",
      status: "Arriving Today" as const,
      totalAmount: "₹5,200",
      directChannel: true,
    },
    {
      id: "BK-8901",
      guestName: "Sunita Kapoor",
      roomName: "Deluxe Palace Room",
      checkIn: "Oct 24",
      checkOut: "Oct 27",
      status: "Checked In" as const,
      totalAmount: "₹6,600",
      directChannel: true,
    },
    {
      id: "BK-8898",
      guestName: "David Sterling",
      roomName: "Maharaja Presidential Pavilion",
      checkIn: "Oct 25",
      checkOut: "Oct 29",
      status: "Confirmed" as const,
      totalAmount: "₹12,000",
      directChannel: true,
    },
    {
      id: "BK-8895",
      guestName: "Arjun Singhal",
      roomName: "Deluxe Palace Room",
      checkIn: "Oct 26",
      checkOut: "Oct 28",
      status: "Confirmed" as const,
      totalAmount: "₹4,400",
      directChannel: true,
    },
  ],
};
