
import { useState } from "react";
import { Car } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

interface HeaderProps {
  wishlistCount: number;
}

const Header = ({ wishlistCount }: HeaderProps) => {
  return (
    <header className="bg-card sticky top-0 z-10 border-b border-border shadow-sm">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Car size={28} className="text-primary" />
          <h1 className="text-xl font-bold text-foreground">
            Car<span className="text-primary">Finder</span>
          </h1>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/wishlist" 
            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
          >
            <span>Wishlist</span>
            {wishlistCount > 0 && (
              <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlistCount}
              </span>
            )}
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
