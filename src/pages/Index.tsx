
import { useEffect, useState } from "react";
import { Car, FilterParams } from "@/types/car";
import { fetchCars } from "@/services/carService";
import { getWishlist } from "@/services/wishlistService";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import Filters from "@/components/Filters";
import CarCard from "@/components/CarCard";
import CarDetailModal from "@/components/CarDetailModal";
import Pagination from "@/components/Pagination";
import LoadingState from "@/components/LoadingState";
import NoResults from "@/components/NoResults";

const Index = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCars, setTotalCars] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [filters, setFilters] = useState<FilterParams>({});
  
  const carsPerPage = 10;
  
  // Load cars
  useEffect(() => {
    const loadCars = async () => {
      setLoading(true);
      try {
        const results = await fetchCars(currentPage, carsPerPage, filters);
        setCars(results.cars);
        setTotalCars(results.total);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadCars();
  }, [currentPage, filters]);
  
  // Update wishlist count
  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = getWishlist();
      setWishlistCount(wishlist.length);
    };
    
    // Initial load
    updateWishlistCount();
    
    // Set up storage event listener for cross-tab updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'car_finder_wishlist') {
        updateWishlistCount();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleSearch = (query: string) => {
    setFilters({...filters, searchQuery: query});
    setCurrentPage(1); // Reset to first page on new search
  };
  
  const handleFilterChange = (newFilters: FilterParams) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter change
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };
  
  const handleCloseModal = () => {
    setSelectedCar(null);
  };
  
  const handleWishlistChange = () => {
    const wishlist = getWishlist();
    setWishlistCount(wishlist.length);
  };
  
  const totalPages = Math.ceil(totalCars / carsPerPage);
  
  return (
    <div className="min-h-screen bg-background">
      <Header wishlistCount={wishlistCount} />
      
      <main className="page-container pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Car</h1>
          <p className="text-muted-foreground">
            Browse our selection of quality vehicles to find your dream ride.
          </p>
        </div>
        
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} initialValue={filters.searchQuery} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6">
          <aside>
            <Filters 
              onFilterChange={handleFilterChange} 
              initialFilters={filters}
            />
          </aside>
          
          <div>
            {loading ? (
              <LoadingState />
            ) : cars.length > 0 ? (
              <>
                <div className="mb-4 flex justify-between items-center">
                  <p className="text-muted-foreground">
                    Showing {cars.length} of {totalCars} results
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map(car => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      onClick={handleCarClick} 
                      onWishlistChange={handleWishlistChange}
                    />
                  ))}
                </div>
                
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <NoResults />
            )}
          </div>
        </div>
      </main>
      
      {selectedCar && (
        <CarDetailModal 
          car={selectedCar} 
          onClose={handleCloseModal}
          onWishlistChange={handleWishlistChange}
        />
      )}
    </div>
  );
};

export default Index;
