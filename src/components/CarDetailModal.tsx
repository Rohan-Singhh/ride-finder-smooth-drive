
import { Car } from "@/types/car";
import { X, Heart, Check, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { isInWishlist, toggleWishlist } from "@/services/wishlistService";
import { toast } from "@/hooks/use-toast";

interface CarDetailModalProps {
  car: Car | null;
  onClose: () => void;
  onWishlistChange: () => void;
}

const CarDetailModal = ({ car, onClose, onWishlistChange }: CarDetailModalProps) => {
  const [inWishlist, setInWishlist] = useState(false);
  
  useEffect(() => {
    if (car) {
      setInWishlist(isInWishlist(car.id));
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [car]);
  
  if (!car) return null;
  
  const handleWishlistToggle = () => {
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
  
  // Close modal when clicking outside or pressing escape
  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);
  
  return (
    <div 
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleModalClick}
    >
      <div className="bg-card w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg animate-fade-in">
        <div className="relative">
          <img 
            src={car.image} 
            alt={`${car.brand} ${car.model}`} 
            className="w-full h-64 md:h-80 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-background/80 p-2 rounded-full hover:bg-background transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
            <div>
              <h2 className="text-2xl font-bold">{car.brand} {car.model}</h2>
              <p className="text-muted-foreground">{car.year} • {car.mileage.toLocaleString()} miles</p>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-3xl font-bold text-primary">{formatPrice(car.price)}</span>
              <button
                onClick={handleWishlistToggle}
                className={`mt-2 flex items-center gap-1 py-2 px-4 rounded-md ${
                  inWishlist 
                    ? 'bg-destructive text-destructive-foreground' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                } transition-colors`}
              >
                {inWishlist ? (
                  <>
                    <Heart size={18} fill="currentColor" /> 
                    <span>In Wishlist</span>
                  </>
                ) : (
                  <>
                    <Heart size={18} /> 
                    <span>Add to Wishlist</span>
                  </>
                )}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Overview</h3>
              <p className="text-muted-foreground mb-6">{car.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 p-3 rounded-md">
                  <span className="block text-sm text-muted-foreground">Fuel Type</span>
                  <span className="font-medium">{car.fuelType}</span>
                </div>
                <div className="bg-secondary/50 p-3 rounded-md">
                  <span className="block text-sm text-muted-foreground">Transmission</span>
                  <span className="font-medium">{car.transmission}</span>
                </div>
                <div className="bg-secondary/50 p-3 rounded-md">
                  <span className="block text-sm text-muted-foreground">Seating</span>
                  <span className="font-medium">{car.seatingCapacity} seats</span>
                </div>
                <div className="bg-secondary/50 p-3 rounded-md">
                  <span className="block text-sm text-muted-foreground">Color</span>
                  <span className="font-medium">{car.color}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {car.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mt-0.5 mr-2 bg-primary/10 rounded-full p-1">
                      <Check size={14} className="text-primary" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border pt-4">
            <button
              onClick={onClose}
              className="w-full py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailModal;
