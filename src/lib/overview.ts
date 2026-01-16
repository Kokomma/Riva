import type { BookingRequest, MessageThread, VendorCategory, WeddingEvent } from "./models";

export const weddingEvents: WeddingEvent[] = [
  {
    id: "evt-001",
    title: "Traditional Ceremony",
    date: "Aug 12, 2025",
    location: "Ikoyi, Lagos",
    status: "published",
  },
  {
    id: "evt-002",
    title: "White Wedding",
    date: "Aug 16, 2025",
    location: "Lekki, Lagos",
    status: "draft",
  },
  {
    id: "evt-003",
    title: "Reception",
    date: "Aug 16, 2025",
    location: "Eko Atlantic",
    status: "draft",
  },
];

export const vendorCategories: VendorCategory[] = [
  {
    id: "cat-venue",
    name: "Venues",
    description: "Curated halls, gardens, and private estates.",
  },
  {
    id: "cat-catering",
    name: "Catering",
    description: "Local and continental menus with tasting slots.",
  },
  {
    id: "cat-media",
    name: "Photo & Video",
    description: "Story-driven coverage and highlight reels.",
  },
  {
    id: "cat-style",
    name: "Style & Beauty",
    description: "Aso-ebi coordination, glam, and tailoring.",
  },
];

export const bookingRequests: BookingRequest[] = [
  {
    id: "br-001",
    vendorName: "Kora Events Hall",
    category: "Venue",
    status: "pending",
    budget: "₦3,500,000",
  },
  {
    id: "br-002",
    vendorName: "Lush Catering Co.",
    category: "Catering",
    status: "accepted",
    budget: "₦2,400,000",
  },
  {
    id: "br-003",
    vendorName: "Blaq Stories",
    category: "Photo & Video",
    status: "pending",
    budget: "₦1,200,000",
  },
];

export const messageThreads: MessageThread[] = [
  {
    id: "msg-001",
    participant: "Lush Catering Co.",
    lastMessage: "Menu tasting confirmed for next Thursday.",
    updatedAt: "2h ago",
  },
  {
    id: "msg-002",
    participant: "Kora Events Hall",
    lastMessage: "Sharing updated seating layout options.",
    updatedAt: "1d ago",
  },
  {
    id: "msg-003",
    participant: "Blaq Stories",
    lastMessage: "Contract ready for review.",
    updatedAt: "3d ago",
  },
];
