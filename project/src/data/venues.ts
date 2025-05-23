import { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: '1',
    name: 'Blue Court Arena',
    description: 'Premium indoor basketball court with high-quality flooring and professional lighting.',
    address: '123 Sports Ave, Downtown',
    sport: 'Basketball',
    price: 35,
    rating: 4.7,
    imageUrl: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg',
    facilities: ['Changing rooms', 'Shower', 'Parking', 'Drinking water'],
    availableSlots: [
      { id: '1-1', date: '2025-01-15', startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: '1-2', date: '2025-01-15', startTime: '10:00', endTime: '11:00', isBooked: true },
      { id: '1-3', date: '2025-01-15', startTime: '11:00', endTime: '12:00', isBooked: false },
      { id: '1-4', date: '2025-01-15', startTime: '14:00', endTime: '15:00', isBooked: false },
      { id: '1-5', date: '2025-01-15', startTime: '15:00', endTime: '16:00', isBooked: true },
    ],
  },
  {
    id: '2',
    name: 'Greenfield Football Ground',
    description: 'Spacious outdoor football field with well-maintained grass and proper markings.',
    address: '456 Field Road, Sportsville',
    sport: 'Football',
    price: 50,
    rating: 4.5,
    imageUrl: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
    facilities: ['Changing rooms', 'Shower', 'Floodlights', 'Parking'],
    availableSlots: [
      { id: '2-1', date: '2025-01-15', startTime: '08:00', endTime: '09:00', isBooked: false },
      { id: '2-2', date: '2025-01-15', startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: '2-3', date: '2025-01-15', startTime: '16:00', endTime: '17:00', isBooked: false },
      { id: '2-4', date: '2025-01-15', startTime: '17:00', endTime: '18:00', isBooked: true },
    ],
  },
  {
    id: '3',
    name: 'Ace Tennis Club',
    description: 'Professional clay tennis courts with coaching facilities available.',
    address: '789 Racket Lane, Heights',
    sport: 'Tennis',
    price: 30,
    rating: 4.8,
    imageUrl: 'https://images.pexels.com/photos/2996254/pexels-photo-2996254.jpeg',
    facilities: ['Pro shop', 'Changing rooms', 'Coaching', 'Cafeteria'],
    availableSlots: [
      { id: '3-1', date: '2025-01-15', startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: '3-2', date: '2025-01-15', startTime: '11:00', endTime: '12:00', isBooked: false },
      { id: '3-3', date: '2025-01-15', startTime: '15:00', endTime: '16:00', isBooked: true },
      { id: '3-4', date: '2025-01-15', startTime: '16:00', endTime: '17:00', isBooked: false },
    ],
  },
  {
    id: '4',
    name: 'Olympic Swimming Center',
    description: 'State-of-the-art swimming facility with multiple pools and trained lifeguards.',
    address: '101 Splash Street, Riverside',
    sport: 'Swimming',
    price: 25,
    rating: 4.6,
    imageUrl: 'https://images.pexels.com/photos/260598/pexels-photo-260598.jpeg',
    facilities: ['Changing rooms', 'Lockers', 'Shower', 'Lifeguard'],
    availableSlots: [
      { id: '4-1', date: '2025-01-15', startTime: '08:00', endTime: '09:00', isBooked: true },
      { id: '4-2', date: '2025-01-15', startTime: '09:00', endTime: '10:00', isBooked: false },
      { id: '4-3', date: '2025-01-15', startTime: '10:00', endTime: '11:00', isBooked: false },
      { id: '4-4', date: '2025-01-15', startTime: '18:00', endTime: '19:00', isBooked: false },
    ],
  },
  {
    id: '5',
    name: 'Badminton Hub',
    description: 'Indoor courts with professional-grade flooring and equipment rental available.',
    address: '202 Shuttle Drive, East End',
    sport: 'Badminton',
    price: 20,
    rating: 4.4,
    imageUrl: 'https://images.pexels.com/photos/5730747/pexels-photo-5730747.jpeg',
    facilities: ['Equipment rental', 'Coaching', 'Changing rooms', 'Water dispenser'],
    availableSlots: [
      { id: '5-1', date: '2025-01-15', startTime: '11:00', endTime: '12:00', isBooked: false },
      { id: '5-2', date: '2025-01-15', startTime: '12:00', endTime: '13:00', isBooked: false },
      { id: '5-3', date: '2025-01-15', startTime: '17:00', endTime: '18:00', isBooked: true },
      { id: '5-4', date: '2025-01-15', startTime: '19:00', endTime: '20:00', isBooked: false },
    ],
  }
];