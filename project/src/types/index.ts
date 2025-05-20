export interface Venue {
  id: string;
  name: string;
  description: string;
  address: string;
  sport: string;
  price: number;
  rating: number;
  imageUrl: string;
  facilities: string[];
  availableSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface Booking {
  id: string;
  venueId: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
}