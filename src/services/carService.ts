
import { Car, FilterParams } from "@/types/car";
import mockCars from "@/data/mockCars";

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchCars = async (
  page: number = 1,
  limit: number = 10,
  filters: FilterParams = {}
): Promise<{ cars: Car[], total: number }> => {
  // Simulate API delay
  await delay(500);

  let filteredCars = [...mockCars];

  // Apply filters
  if (filters.brand) {
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase() === filters.brand?.toLowerCase()
    );
  }

  if (filters.minPrice) {
    filteredCars = filteredCars.filter(car => car.price >= (filters.minPrice || 0));
  }

  if (filters.maxPrice) {
    filteredCars = filteredCars.filter(car => car.price <= (filters.maxPrice || Infinity));
  }

  if (filters.fuelType) {
    filteredCars = filteredCars.filter(car => 
      car.fuelType.toLowerCase() === filters.fuelType?.toLowerCase()
    );
  }

  if (filters.seatingCapacity) {
    filteredCars = filteredCars.filter(car => 
      car.seatingCapacity >= (filters.seatingCapacity || 0)
    );
  }

  if (filters.searchQuery) {
    const query = filters.searchQuery.toLowerCase();
    filteredCars = filteredCars.filter(car => 
      car.brand.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query) ||
      car.fuelType.toLowerCase().includes(query) ||
      car.description.toLowerCase().includes(query)
    );
  }

  // Apply sorting
  if (filters.sortBy) {
    if (filters.sortBy === 'price-asc') {
      filteredCars.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-desc') {
      filteredCars.sort((a, b) => b.price - a.price);
    }
  }

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + limit);

  return {
    cars: paginatedCars,
    total: filteredCars.length
  };
};

export const getCarById = async (id: string): Promise<Car | null> => {
  // Simulate API delay
  await delay(300);
  
  const car = mockCars.find(car => car.id === id);
  return car || null;
};

// Get unique brands for filter options
export const getCarBrands = async (): Promise<string[]> => {
  await delay(200);
  
  const brands = Array.from(new Set(mockCars.map(car => car.brand)));
  return brands.sort();
};

// Get unique fuel types for filter options
export const getFuelTypes = async (): Promise<string[]> => {
  await delay(200);
  
  const fuelTypes = Array.from(new Set(mockCars.map(car => car.fuelType)));
  return fuelTypes.sort();
};

// Get min and max price range
export const getPriceRange = async (): Promise<{min: number, max: number}> => {
  await delay(200);
  
  const prices = mockCars.map(car => car.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

// Get unique seating capacities
export const getSeatingCapacities = async (): Promise<number[]> => {
  await delay(200);
  
  const seatingCapacities = Array.from(new Set(mockCars.map(car => car.seatingCapacity)));
  return seatingCapacities.sort((a, b) => a - b);
};
