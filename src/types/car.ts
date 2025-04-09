
export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  seatingCapacity: number;
  mileage: number;
  color: string;
  image: string;
  description: string;
  features: string[];
}

export interface FilterParams {
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  seatingCapacity?: number;
  searchQuery?: string;
  sortBy?: 'price-asc' | 'price-desc';
}
