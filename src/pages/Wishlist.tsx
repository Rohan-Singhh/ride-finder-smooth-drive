
import { useEffect, useState } from "react";
import { Car } from "@/types/car";
import { getCarById } from "@/services/carService";
import { getWishlist } from "@/services/wishlistService";
import Header from "@/components/Header";
import CarCard from "@/components/CarCard";
import CarDetailModal from "@/components/CarDetailModal";
import LoadingState from "@/components/LoadingState";
import NoResults from "@/components/NoResults";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlistCars, setWishlistCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  useEffect(() => {
    const loadWishlistCars = async () => {
      setLoading(true);
      try {
        const wishlistIds = getWishlist();
        
        if (wishlistIds.length === 0) {
          setWishlistCars([]);
          setLoading(false);
          return;
        }
        
        // Fetch all cars in the wishlist
        const carPromises = wishlistIds.map(id => getCarById(id));
        const cars = await Promise.all(carPromises);
        
        // Filter out any null values (cars that weren't found)
        const validCars = cars.filter((car): car is Car => car !== null);
        setWishlistCars(validCars);
      } catch (error) {
        console.error("Failed to load wishlist cars:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadWishlistCars();
    
    // Set up storage event listener for cross-tab updates
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'car_finder_wishlist') {
        loadWishlistCars();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };
  
  const handleCloseModal = () => {
    setSelectedCar(null);
  };
  
  const handleWishlistChange = () => {
    // Re-fetch all cars in the wishlist
    const wishlistIds = getWishlist();
    
    // Update the current list by removing cars that are no longer in the wishlist
    setWishlistCars(prev => prev.filter(car => wishlistIds.includes(car.id)));
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header wishlistCount={wishlistCars.length} />
      
      <main className="page-container pb-16">
        <div className="mb-6">
          <Link 
            to="/"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Search
          </Link>
          
          <h1 className="text-3xl font-bold">Your Wishlist</h1>
          <p className="text-muted-foreground mt-2">
            Cars you've saved for later.
          </p>
        </div>
        
        {loading ? (
          <LoadingState message="Loading your wishlist..." />
        ) : wishlistCars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistCars.map(car => (
              <CarCard 
                key={car.id} 
                car={car} 
                onClick={handleCarClick}
                onWishlistChange={handleWishlistChange}
              />
            ))}
          </div>
        ) : (
          <NoResults 
            message="Your wishlist is empty" 
            subMessage="Find and save cars you love while browsing."
          />
        )}
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

export default Wishlist;
