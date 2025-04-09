
import { Car } from "@/types/car";
import { Heart, Info } from "lucide-react";
import { isInWishlist, toggleWishlist } from "@/services/wishlistService";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
  onWishlistChange: () => void;
}

const CarCard = ({ car, onClick, onWishlistChange }: CarCardProps) => {
  const [inWishlist, setInWishlist] = useState(false);
  
  useEffect(() => {
    setInWishlist(isInWishlist(car.id));
  }, [car.id]);
  
  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isNowInWishlist = toggleWishlist(car.id);
    setInWishlist(isNowInWishlist);
    onWishlistChange();
    
    toast({
      title: isNowInWishlist ? "Added to Wishlist" : "Removed from Wishlist",
      description: `${car.brand} ${car.model} has been ${isNowInWishlist ? "added to" : "removed from"} your wishlist.`,
      duration: 2000,
    });
  };
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };
  
  return (
    <div 
      className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 card-hover cursor-pointer"
      onClick={() => onClick(car)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            inWishlist 
              ? 'bg-destructive text-destructive-foreground' 
              : 'bg-secondary text-secondary-foreground'
          } hover:opacity-90 transition-all`}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart size={18} fill={inWishlist ? "currentColor" : "none"} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg">{car.brand} {car.model}</h3>
          <span className="text-sm bg-secondary px-2 py-1 rounded-full text-secondary-foreground">{car.year}</span>
        </div>
        
        <p className="font-bold text-xl mt-2 text-primary">{formatPrice(car.price)}</p>
        
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <span className="font-medium">Fuel:</span> {car.fuelType}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Trans:</span> {car.transmission}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Seats:</span> {car.seatingCapacity}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Mileage:</span> {car.mileage.toLocaleString()}
          </div>
        </div>
        
        <div className="mt-4 text-primary flex items-center justify-center p-2 bg-primary/5 rounded-md hover:bg-primary/10 transition-colors">
          <Info size={16} className="mr-1" />
          <span className="font-medium">View Details</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
