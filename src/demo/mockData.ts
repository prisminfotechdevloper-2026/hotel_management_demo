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
    defaultAccent: "#0F2744",
    heroImage: "/images/hero-palace.jpg",
    badgeText: "Historic Palace • Jaipur, Rajasthan",
    sampleRoomName: "Royal Heritage Suite",
    samplePricePerNight: 2600,
  },
  boutique: {
    id: "boutique",
    label: "Boutique Retreat",
    name: "Aurelia Forest Sanctuary",
    tagline: "Peaceful Forest Retreat Surrounded by Mountain Views",
    description: "A calm 16-suite mountain hideaway in Rishikesh. Breathe clean forest air, enjoy fresh home-style meals, relax on nature walks, and sleep peacefully in cozy wooden chalets.",
    city: "Rishikesh, Uttarakhand",
    defaultAccent: "#0F2744",
    heroImage: "/images/boutique-retreat.jpg",
    badgeText: "Quiet Nature Stay • Rishikesh Hills",
    sampleRoomName: "Mountain Pine Cottage",
    samplePricePerNight: 2800,
  },
  resort: {
    id: "resort",
    label: "Beach Resort",
    name: "Aurelia Palms Bay & Spa",
    tagline: "Your Beachside Paradise with Direct Ocean Access",
    description: "Relax by the sea with direct private beach access in Goa. Enjoy refreshing lagoon swimming pools, beachside sunset dinners, and comfortable sea-view rooms with guaranteed best direct rates.",
    city: "Goa, India",
    defaultAccent: "#0F2744",
    heroImage: "/images/resort-beach.jpg",
    badgeText: "Direct Beach Access • South Goa",
    sampleRoomName: "Coastal Breeze Suite",
    samplePricePerNight: 3500,
  },
  business: {
    id: "business",
    label: "Business Hotel",
    name: "Aurelia Grand Horizon",
    tagline: "Comfortable City Stay with Fast Wi-Fi & 24/7 Service",
    description: "Located right in the heart of Mumbai's prime commercial center. Enjoy quiet, soundproof rooms, comfortable beds, express check-in, 24/7 room service, and instant GST invoicing.",
    city: "Mumbai, India",
    defaultAccent: "#0F2744",
    heroImage: "/images/business-hotel.jpg",
    badgeText: "Prime City Location • Mumbai Central",
    sampleRoomName: "Executive King Room",
    samplePricePerNight: 2200,
  },
};

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

export const PROPERTY_ROOMS: Record<HotelType, RoomOption[]> = {
  heritage: [
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
  ],
  boutique: [
    {
      id: "boutique-studio",
      name: "Forest View Studio",
      pricePerNight: 2400,
      size: "420 sq.ft",
      maxGuests: 2,
      bedType: "King Bed",
      image: "/images/boutique-retreat.jpg",
      amenities: ["Forest View Balcony", "Heated Room", "Organic Breakfast", "High-Speed Wi-Fi"],
      description: "Cozy timber-finished room with panoramic forest canopy views, private balcony, warm wooden interiors, and artisanal tea station.",
    },
    {
      id: "boutique-cottage",
      name: "Mountain Pine Cottage",
      pricePerNight: 2800,
      size: "720 sq.ft",
      maxGuests: 3,
      bedType: "California King",
      image: "/images/boutique-retreat.jpg",
      amenities: ["Valley View Patio", "Stone Fireplace", "Deep Soaking Tub", "Complimentary Tea & Snacks"],
      description: "Private hillside cottage featuring an open-view sitout, rustic stone hearth, luxurious bathroom, and peaceful mountain silence.",
    },
    {
      id: "boutique-chalet",
      name: "Hillside Luxury Chalet",
      pricePerNight: 3400,
      size: "1,200 sq.ft",
      maxGuests: 4,
      bedType: "2 Queen Bedrooms",
      image: "/images/hero-suite.jpg",
      amenities: ["Private Sun Deck", "Kitchenette", "Living Lounge", "Stargazing Telescope"],
      description: "Two-bedroom mountain chalet with floor-to-ceiling glass windows, sun terrace, large living room, and curated hiking guides.",
    },
  ],
  resort: [
    {
      id: "resort-garden",
      name: "Oceanfront Garden Villa",
      pricePerNight: 3500,
      size: "650 sq.ft",
      maxGuests: 2,
      bedType: "King Bed",
      image: "/images/resort-beach.jpg",
      amenities: ["Private Lawn", "Direct Beach Walkway", "Outdoor Rain Shower", "Breakfast Buffet"],
      description: "Bright tropical villa steps from the sand with a private lawn garden, open-air shower, hammock, and direct beach access.",
    },
    {
      id: "resort-breeze",
      name: "Coastal Breeze Suite",
      pricePerNight: 4200,
      size: "950 sq.ft",
      maxGuests: 3,
      bedType: "King Bed + Daybed",
      image: "/images/resort-beach.jpg",
      amenities: ["Sea-Facing Balcony", "Pool Access", "Cocktail Hour Perks", "Free Airport Transfer"],
      description: "Expansive ocean-view suite with an expansive sun deck, direct lagoon pool access, and complimentary daily sunset beverages.",
    },
    {
      id: "resort-pavilion",
      name: "Sunset Lagoon Pavilion",
      pricePerNight: 4800,
      size: "1,500 sq.ft",
      maxGuests: 4,
      bedType: "2 King Bedrooms",
      image: "/images/resort-beach.jpg",
      amenities: ["Private Pool", "Beachside Butler", "Jacuzzi", "Chef Breakfast in Bed"],
      description: "Signature oceanfront pavilion with its own private infinity plunge pool, spacious cabana patio, and personalized guest host.",
    },
  ],
  business: [
    {
      id: "biz-deluxe",
      name: "Executive King Room",
      pricePerNight: 2200,
      size: "380 sq.ft",
      maxGuests: 2,
      bedType: "Ergonomic King Bed",
      image: "/images/business-hotel.jpg",
      amenities: ["Ergonomic Work Desk", "High-Speed 500Mbps Wi-Fi", "Express Laundry", "Buffet Breakfast"],
      description: "Modern soundproofed room with an ergonomic Herman Miller work chair, multi-pin international charging dock, and blackout curtains.",
    },
    {
      id: "biz-studio",
      name: "Corporate Studio Suite",
      pricePerNight: 2800,
      size: "620 sq.ft",
      maxGuests: 3,
      bedType: "King Bed + Work Lounge",
      image: "/images/business-hotel.jpg",
      amenities: ["Meeting Table (4 Pax)", "Espresso Machine", "Lounge Access", "Priority Early Check-in"],
      description: "Designed for business leaders with an integrated 4-person meeting space, Nespresso coffee machine, and Executive Lounge privileges.",
    },
    {
      id: "biz-boardroom",
      name: "Grand Boardroom Suite",
      pricePerNight: 3500,
      size: "1,100 sq.ft",
      maxGuests: 4,
      bedType: "Master King Suite",
      image: "/images/business-hotel.jpg",
      amenities: ["Conference Display Screen", "Private Bar", "Airport Limousine", "Dedicated Concierge"],
      description: "Top-floor corporate suite with private presentation screen, separate conference lounge, city skyline views, and airport transfer.",
    },
  ],
};

export const ROOMS_DATA: RoomOption[] = PROPERTY_ROOMS.heritage;

export function getRoomsForType(type: HotelType): RoomOption[] {
  return PROPERTY_ROOMS[type] || PROPERTY_ROOMS.heritage;
}

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
      id: "BK-8900",
      guestName: "Aman Sharma",
      roomName: "Garden Courtyard Room",
      checkIn: "Oct 23",
      checkOut: "Oct 26",
      status: "Confirmed" as const,
      totalAmount: "₹4,400",
      directChannel: true,
    },
    {
      id: "BK-8899",
      guestName: "Pooja Mehta",
      roomName: "Royal Heritage Suite",
      checkIn: "Oct 22",
      checkOut: "Oct 25",
      status: "Checked In" as const,
      totalAmount: "₹5,200",
      directChannel: true,
    },
  ],
};
