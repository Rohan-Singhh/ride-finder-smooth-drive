
import { useEffect, useState } from "react";
import { FilterParams } from "@/types/car";
import { getCarBrands, getFuelTypes, getPriceRange, getSeatingCapacities } from "@/services/carService";
import { Filter, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

interface FiltersProps {
  onFilterChange: (filters: FilterParams) => void;
  initialFilters?: FilterParams;
}

const Filters = ({ onFilterChange, initialFilters }: FiltersProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
  const [seatingCapacities, setSeatingCapacities] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const [filters, setFilters] = useState<FilterParams>(initialFilters || {});
  
  // Load filter options
  useEffect(() => {
    const loadFilterOptions = async () => {
      const [brandsData, fuelTypesData, priceRangeData, seatingData] = await Promise.all([
        getCarBrands(),
        getFuelTypes(),
        getPriceRange(),
        getSeatingCapacities()
      ]);
      
      setBrands(brandsData);
      setFuelTypes(fuelTypesData);
      setPriceRange(priceRangeData);
      setSeatingCapacities(seatingData);
    };
    
    loadFilterOptions();
  }, []);
  
  // Initialize filters from props
  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);
  
  const handleFilterChange = (filterKey: keyof FilterParams, value: any) => {
    const newFilters = { ...filters, [filterKey]: value };
    
    // Special case for min/max price to ensure they make sense
    if (filterKey === 'minPrice' && filters.maxPrice && value > filters.maxPrice) {
      newFilters.maxPrice = value;
    } else if (filterKey === 'maxPrice' && filters.minPrice && value < filters.minPrice) {
      newFilters.minPrice = value;
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };
  
  const clearFilters = () => {
    const clearedFilters = {
      ...filters,
      brand: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      fuelType: undefined,
      seatingCapacity: undefined,
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };
  
  return (
    <div className="bg-card rounded-lg shadow-sm border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-primary" />
          <h2 className="font-medium text-lg">Filters</h2>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      <div className={`space-y-4 ${isOpen || 'hidden md:block'}`}>
        {/* Brand Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Brand</label>
          <select
            value={filters.brand || ''}
            onChange={(e) => handleFilterChange('brand', e.target.value || undefined)}
            className="w-full p-2 rounded-md border border-input bg-background"
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
        
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Price Range: ${filters.minPrice || priceRange.min} - ${filters.maxPrice || priceRange.max}
          </label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="w-full p-2 rounded-md border border-input bg-background"
              min={priceRange.min}
              max={priceRange.max}
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
              className="w-full p-2 rounded-md border border-input bg-background"
              min={priceRange.min}
              max={priceRange.max}
            />
          </div>
        </div>
        
        {/* Fuel Type Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Fuel Type</label>
          <select
            value={filters.fuelType || ''}
            onChange={(e) => handleFilterChange('fuelType', e.target.value || undefined)}
            className="w-full p-2 rounded-md border border-input bg-background"
          >
            <option value="">All Fuel Types</option>
            {fuelTypes.map((fuelType) => (
              <option key={fuelType} value={fuelType}>{fuelType}</option>
            ))}
          </select>
        </div>
        
        {/* Seating Capacity Filter */}
        <div>
          <label className="block text-sm font-medium mb-1">Seating Capacity</label>
          <select
            value={filters.seatingCapacity || ''}
            onChange={(e) => handleFilterChange('seatingCapacity', e.target.value ? Number(e.target.value) : undefined)}
            className="w-full p-2 rounded-md border border-input bg-background"
          >
            <option value="">Any Seating Capacity</option>
            {seatingCapacities.map((capacity) => (
              <option key={capacity} value={capacity}>{capacity}+ seats</option>
            ))}
          </select>
        </div>
        
        {/* Sorting */}
        <div>
          <label className="block text-sm font-medium mb-1">Sort By</label>
          <select
            value={filters.sortBy || ''}
            onChange={(e) => handleFilterChange('sortBy', e.target.value || undefined)}
            className="w-full p-2 rounded-md border border-input bg-background"
          >
            <option value="">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
        
        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="w-full py-2 px-4 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors mt-2"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
