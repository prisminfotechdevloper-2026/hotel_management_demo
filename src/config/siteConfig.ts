export const siteConfig = {
  name: "Prism Hotel Management",
  tagline: "Digital growth agency for hotels",
  headline: "We build websites and booking software that fill your hotel rooms.",
  subheadline:
    "Get more direct bookings and stop paying high 18-25% commissions to booking apps. From boutique retreats and luxury beach resorts to city business hotels and heritage havelis, we build your custom hotel website and online booking system in 14 days.",
  trustLine: "Trusted by independent hotels, luxury resorts, boutique stays, business hotels & heritage properties across India",
  
  contact: {
    email: "contact.prisminfotech@gmail.com",
    phone: "+91 82392 39249",
    whatsappNumber: "918239239249",
    city: "Kota, Rajasthan, India",
    address: "Jagpura, Ramganj Mandi, Kota, Rajasthan, India - 326519",
    whatsappPrefill: "Hello Prism team, I would like to enquire about getting direct booking software for my hotel.",
    social: {
      linkedin: "https://www.linkedin.com/company/prism-infotech-solution/",
      instagram: "https://www.instagram.com/prisminfotechsolution/",
      telegram: "https://t.me/Software84747",
      website: "https://prisminfotechsolution.com",
    },
  },

  navLinks: [
    { label: "Services", href: "/#services" },
    { label: "Demo", href: "/#demo-preview" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],

  video: {
    type: "file" as const,
    src: "/videos/overview.mp4",
    poster: "/images/video-poster.jpg",
    duration: "2 min",
    title: "Prism Hotel Management - Overview",
    eyebrow: "2-Minute Video Tour",
    heading: "Watch How Guests Book Directly On Your Website",
    subtext: "A quick 2-minute walkthrough showing how your guests search dates, choose rooms, and pay online on your own website without third-party commission fees.",
  },

  stats: [
    { value: "+38%", label: "More Direct Bookings in 60 Days", note: "Average increase" },
    { value: "14 Days", label: "Quick Delivery (Start to Live)", note: "Turnkey rollout" },
    { value: "0%", label: "Commission Fee on Your Bookings", note: "Keep 100% revenue" },
    { value: "24/7", label: "Friendly Support for Your Staff", note: "Dedicated team" },
  ],

  testimonials: [
    {
      quote:
        "Switching to Prism saved our coastal resort over ₹8.5 Lakhs in OTA commissions in our very first season. Guests love booking their sea-facing villas and beach dining packages directly with us.",
      author: "Rajeshwar Shenoy",
      role: "Managing Director",
      hotel: "Bayview Palms Luxury Beach Resort, South Goa",
      category: "Beach & Leisure Resort",
    },
    {
      quote:
        "For our business hotel, automated GST invoice generation and express 2-tap corporate re-booking were game-changers. Our direct booking share jumped from 22% to 64% in 90 days.",
      author: "Rohan K. Varma",
      role: "General Manager",
      hotel: "The Grand Horizon Executive Suites, Bengaluru",
      category: "Corporate Business Hotel",
    },
    {
      quote:
        "Our website loads super fast on phones and reflects our boutique aesthetic perfectly. Guests praise how effortless it is to browse our mountain chalets and reserve via UPI.",
      author: "Ananya Sen",
      role: "Founder & General Manager",
      hotel: "The Terraces Forest Retreat & Spa, Rishikesh",
      category: "Boutique Mountain Stay",
    },
  ],

  services: [
    {
      id: "hotel-website",
      title: "Custom Hotel Website",
      desc: "A fast, beautiful website that showcases your rooms, dining, and property photos so visitors feel excited to stay with you.",
      icon: "Globe",
    },
    {
      id: "booking-engine",
      title: "Direct Booking Engine",
      desc: "Guests can check room availability, select dates, and pay online instantly with zero middleman commission fees.",
      icon: "CalendarCheck",
    },
    {
      id: "management-software",
      title: "Easy Front-Desk Dashboard",
      desc: "A clean, simple screen for your staff to manage room check-ins, guest details, and daily payments without confusion.",
      icon: "LayoutDashboard",
    },
    {
      id: "marketing-seo",
      title: "WhatsApp & Google Growth",
      desc: "Help travelers find your hotel easily on Google Search and let them message or book with your front desk on WhatsApp in one tap.",
      icon: "TrendingUp",
    },
  ],

  steps: [
    {
      number: "01",
      title: "Tell Us About Your Hotel",
      desc: "We discuss your rooms, rates, photos, and current booking challenges so we can customize the software for your property.",
    },
    {
      number: "02",
      title: "We Design Your Website",
      desc: "Our team designs your luxury website and custom booking engine made specially for your hotel brand.",
    },
    {
      number: "03",
      title: "Setup & Payment Testing",
      desc: "We connect your bank payment gateway and thoroughly test every booking step so payments arrive safely in your account.",
    },
    {
      number: "04",
      title: "Go Live & Receive Bookings",
      desc: "Your website goes live. Guests start booking directly, and you keep 100% of your room earnings.",
    },
  ],
};
