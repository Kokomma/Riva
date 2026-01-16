export type UserRole = "couple" | "vendor" | "guest" | "admin";

export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  status: "draft" | "published" | "completed";
}

export interface VendorCategory {
  id: string;
  name: string;
  description: string;
}

export interface BookingRequest {
  id: string;
  vendorName: string;
  category: string;
  status: "pending" | "accepted" | "declined";
  budget: string;
}

export interface MessageThread {
  id: string;
  participant: string;
  lastMessage: string;
  updatedAt: string;
}
