// Hotels
export const hotels = [
  {
    id: 1,
    name: "Grand Hyatt Istanbul",
    location: "Istanbul, Turkey",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    rating: 4.8
  },
  {
    id: 2,
    name: "Hyatt Regency Paris",
    location: "Paris, France",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    rating: 4.9
  },
  {
    id: 3,
    name: "Park Hyatt London",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    rating: 4.7
  },
  {
    id: 4,
    name: "Hyatt Centric Madrid",
    location: "Madrid, Spain",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    rating: 4.6
  }
];

// Available Shifts
export const shifts = [
  {
    id: 1,
    hotelId: 1,
    hotel: "Grand Hyatt Istanbul",
    location: "Istanbul, Turkey",
    role: "Waiter",
    date: "Dec 20, 2025",
    time: "18:00 - 23:00",
    duration: "5 hours",
    rate: 18,
    currency: "€",
    slotsTotal: 5,
    slotsLeft: 3,
    description: "Evening dinner service in the main restaurant. Experience with fine dining preferred.",
    requirements: ["English fluency", "Previous restaurant experience", "Professional attire"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
  },
  {
    id: 2,
    hotelId: 2,
    hotel: "Hyatt Regency Paris",
    location: "Paris, France",
    role: "Front Desk",
    date: "Dec 21, 2025",
    time: "08:00 - 14:00",
    duration: "6 hours",
    rate: 20,
    currency: "€",
    slotsTotal: 2,
    slotsLeft: 1,
    description: "Morning shift at reception. Guest check-out assistance and concierge services.",
    requirements: ["French & English fluency", "Customer service skills", "Computer literate"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
  },
  {
    id: 3,
    hotelId: 3,
    hotel: "Park Hyatt London",
    location: "London, UK",
    role: "Kitchen Helper",
    date: "Dec 22, 2025",
    time: "10:00 - 16:00",
    duration: "6 hours",
    rate: 15,
    currency: "£",
    slotsTotal: 8,
    slotsLeft: 5,
    description: "Assist head chef with prep work and kitchen maintenance.",
    requirements: ["Food safety certificate", "Physical stamina", "Team player"],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
  },
  {
    id: 4,
    hotelId: 1,
    hotel: "Grand Hyatt Istanbul",
    location: "Istanbul, Turkey",
    role: "Event Staff",
    date: "Dec 23, 2025",
    time: "19:00 - 01:00",
    duration: "6 hours",
    rate: 22,
    currency: "€",
    slotsTotal: 10,
    slotsLeft: 6,
    description: "Wedding reception service. Premium event with high-end guests.",
    requirements: ["Formal service experience", "Professional appearance", "Flexible schedule"],
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    badge: "Wedding Event"
  },
  {
    id: 5,
    hotelId: 2,
    hotel: "Hyatt Regency Paris",
    location: "Paris, France",
    role: "Housekeeping",
    date: "Dec 24, 2025",
    time: "07:00 - 15:00",
    duration: "8 hours",
    rate: 16,
    currency: "€",
    slotsTotal: 4,
    slotsLeft: 2,
    description: "Room cleaning and turndown service for VIP floors.",
    requirements: ["Attention to detail", "Physical fitness", "Discretion"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
  },
  {
    id: 6,
    hotelId: 4,
    hotel: "Hyatt Centric Madrid",
    location: "Madrid, Spain",
    role: "Bartender",
    date: "Dec 25, 2025",
    time: "20:00 - 03:00",
    duration: "7 hours",
    rate: 19,
    currency: "€",
    slotsTotal: 3,
    slotsLeft: 2,
    description: "Rooftop bar service. Cocktail knowledge required.",
    requirements: ["Mixology skills", "Spanish & English", "Night shift availability"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    badge: "Holiday Premium"
  },
  {
    id: 7,
    hotelId: 3,
    hotel: "Park Hyatt London",
    location: "London, UK",
    role: "Concierge",
    date: "Dec 26, 2025",
    time: "14:00 - 22:00",
    duration: "8 hours",
    rate: 21,
    currency: "£",
    slotsTotal: 2,
    slotsLeft: 1,
    description: "Guest services and local recommendations.",
    requirements: ["London knowledge", "Excellent English", "Problem-solving skills"],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
  },
  {
    id: 8,
    hotelId: 1,
    hotel: "Grand Hyatt Istanbul",
    location: "Istanbul, Turkey",
    role: "Spa Attendant",
    date: "Dec 27, 2025",
    time: "09:00 - 17:00",
    duration: "8 hours",
    rate: 17,
    currency: "€",
    slotsTotal: 3,
    slotsLeft: 3,
    description: "Spa reception and guest assistance.",
    requirements: ["Wellness knowledge", "Calm demeanor", "Multi-tasking"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
  }
];

// Current Worker Profile (demo user)
export const currentWorker = {
  id: 1,
  name: "Maria Gonzalez",
  email: "maria.gonzalez@email.com",
  phone: "+34 612 345 678",
  location: "Madrid, Spain",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  rating: 4.8,
  reviewCount: 23,
  verified: false,  // Set to false for demo - shows verification flow
  memberSince: "March 2024",
  skills: ["Waiter", "Front Desk", "Events", "Bartender"],
  availability: "20 hrs/week",
  languages: ["Spanish", "English", "French"],
  stats: {
    totalEarnings: 2340,
    shiftsCompleted: 47,
    onTimeRate: 98,
    repeatBookings: 85
  },
  bio: "Hospitality professional with 5+ years of experience in luxury hotels. Passionate about creating memorable guest experiences."
};

// Worker's shifts
export const myShifts = {
  upcoming: [
    {
      id: 101,
      hotel: "Hyatt Regency Paris",
      role: "Front Desk",
      date: "Dec 21, 2025",
      time: "08:00 - 14:00",
      rate: 20,
      currency: "€",
      status: "confirmed"
    },
    {
      id: 102,
      hotel: "Grand Hyatt Istanbul",
      role: "Event Staff",
      date: "Dec 23, 2025",
      time: "19:00 - 01:00",
      rate: 22,
      currency: "€",
      status: "confirmed"
    }
  ],
  pending: [
    {
      id: 201,
      hotel: "Park Hyatt London",
      role: "Concierge",
      date: "Dec 26, 2025",
      time: "14:00 - 22:00",
      rate: 21,
      currency: "£",
      status: "pending",
      appliedAt: "Dec 15, 2025"
    },
    {
      id: 202,
      hotel: "Hyatt Centric Madrid",
      role: "Bartender",
      date: "Dec 25, 2025",
      time: "20:00 - 03:00",
      rate: 19,
      currency: "€",
      status: "pending",
      appliedAt: "Dec 14, 2025"
    }
  ],
  completed: [
    {
      id: 301,
      hotel: "Grand Hyatt Istanbul",
      role: "Waiter",
      date: "Dec 10, 2025",
      time: "18:00 - 23:00",
      earnings: 90,
      currency: "€",
      rating: 5,
      review: "Excellent service, very professional!"
    },
    {
      id: 302,
      hotel: "Hyatt Regency Paris",
      role: "Front Desk",
      date: "Dec 8, 2025",
      time: "08:00 - 14:00",
      earnings: 120,
      currency: "€",
      rating: 5,
      review: "Great with guests, would book again."
    },
    {
      id: 303,
      hotel: "Park Hyatt London",
      role: "Event Staff",
      date: "Dec 5, 2025",
      time: "19:00 - 00:00",
      earnings: 105,
      currency: "£",
      rating: 4,
      review: "Good work, punctual arrival."
    }
  ]
};

// Reviews for worker profile
export const workerReviews = [
  {
    id: 1,
    hotel: "Grand Hyatt Istanbul",
    manager: "Ahmed K.",
    rating: 5,
    date: "Dec 10, 2025",
    comment: "Maria was exceptional! Handled VIP guests with grace and professionalism. Highly recommended."
  },
  {
    id: 2,
    hotel: "Hyatt Regency Paris",
    manager: "Sophie M.",
    rating: 5,
    date: "Dec 8, 2025",
    comment: "Perfect front desk coverage. Guests complimented her friendly attitude."
  },
  {
    id: 3,
    hotel: "Park Hyatt London",
    manager: "James W.",
    rating: 4,
    date: "Dec 5, 2025",
    comment: "Reliable and hardworking. Good team player during the corporate event."
  }
];

// Admin Dashboard Data
export const adminStats = {
  activeShifts: 12,
  totalApplications: 28,
  workersInPool: 156,
  fillRate: 87,
  avgRating: 4.6
};

export const adminApplications = [
  {
    id: 1,
    worker: {
      name: "Carlos Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 4.7,
      shiftsCompleted: 32
    },
    shift: {
      role: "Waiter",
      date: "Dec 20, 2025",
      time: "18:00 - 23:00"
    },
    appliedAt: "2 hours ago",
    status: "pending"
  },
  {
    id: 2,
    worker: {
      name: "Anna Schmidt",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 4.9,
      shiftsCompleted: 58
    },
    shift: {
      role: "Front Desk",
      date: "Dec 21, 2025",
      time: "08:00 - 14:00"
    },
    appliedAt: "5 hours ago",
    status: "pending"
  },
  {
    id: 3,
    worker: {
      name: "Mohamed Ali",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      rating: 4.5,
      shiftsCompleted: 21
    },
    shift: {
      role: "Kitchen Helper",
      date: "Dec 22, 2025",
      time: "10:00 - 16:00"
    },
    appliedAt: "1 day ago",
    status: "pending"
  },
  {
    id: 4,
    worker: {
      name: "Elena Petrova",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      rating: 4.8,
      shiftsCompleted: 45
    },
    shift: {
      role: "Event Staff",
      date: "Dec 23, 2025",
      time: "19:00 - 01:00"
    },
    appliedAt: "1 day ago",
    status: "pending"
  }
];

// Role categories for filters
export const roleCategories = [
  "All Roles",
  "Waiter",
  "Front Desk",
  "Kitchen Helper",
  "Event Staff",
  "Housekeeping",
  "Bartender",
  "Concierge",
  "Spa Attendant"
];

// Location filters
export const locations = [
  "All Locations",
  "Istanbul, Turkey",
  "Paris, France",
  "London, UK",
  "Madrid, Spain"
];
