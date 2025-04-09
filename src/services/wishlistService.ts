
import { Car } from "@/types/car";

const WISHLIST_KEY = 'car_finder_wishlist';

export const getWishlist = (): string[] => {
  const wishlist = localStorage.getItem(WISHLIST_KEY);
  return wishlist ? JSON.parse(wishlist) : [];
};

export const addToWishlist = (carId: string): void => {
  const wishlist = getWishlist();
  if (!wishlist.includes(carId)) {
    wishlist.push(carId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
};

export const removeFromWishlist = (carId: string): void => {
  const wishlist = getWishlist();
  const updatedWishlist = wishlist.filter(id => id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(updatedWishlist));
};

export const isInWishlist = (carId: string): boolean => {
  const wishlist = getWishlist();
  return wishlist.includes(carId);
};

export const toggleWishlist = (carId: string): boolean => {
  const inWishlist = isInWishlist(carId);
  
  if (inWishlist) {
    removeFromWishlist(carId);
    return false;
  } else {
    addToWishlist(carId);
    return true;
  }
};
