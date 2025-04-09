
import { Car } from "@/types/car";

const mockCars: Car[] = [
  {
    id: "car-1",
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    price: 25999,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 12000,
    color: "Silver",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1936&auto=format&fit=crop",
    description: "The Toyota Camry offers a comfortable ride with excellent fuel economy and reliability. Perfect for daily commutes and family trips.",
    features: [
      "Bluetooth Connectivity",
      "Backup Camera",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "Apple CarPlay & Android Auto"
    ]
  },
  {
    id: "car-2",
    brand: "Honda",
    model: "Civic",
    year: 2022,
    price: 22500,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 15000,
    color: "Blue",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1770&auto=format&fit=crop",
    description: "The Honda Civic is known for its sporty handling, fuel efficiency, and versatile interior space. A reliable choice for everyday use.",
    features: [
      "Touchscreen Infotainment",
      "Honda Sensing Safety Suite",
      "Remote Start",
      "Heated Seats",
      "Multi-Angle Rearview Camera"
    ]
  },
  {
    id: "car-3",
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: 42990,
    fuelType: "Electric",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 8000,
    color: "White",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1771&auto=format&fit=crop",
    description: "The Tesla Model 3 delivers impressive range, acceleration, and cutting-edge technology. Experience electric driving at its finest.",
    features: [
      "Autopilot",
      "15-inch Touchscreen",
      "Over-the-air Updates",
      "Glass Roof",
      "Minimalist Interior Design"
    ]
  },
  {
    id: "car-4",
    brand: "Ford",
    model: "F-150",
    year: 2022,
    price: 39950,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 6,
    mileage: 18000,
    color: "Red",
    image: "https://images.unsplash.com/photo-1543134036-b092e7e556e3?q=80&w=1770&auto=format&fit=crop",
    description: "The Ford F-150 provides outstanding towing capacity with a comfortable interior and advanced tech features. Built tough for any job.",
    features: [
      "Pro Power Onboard Generator",
      "SYNC 4 with 12-inch Screen",
      "Trailer Backup Assist",
      "Zone Lighting System",
      "Tailgate Work Surface"
    ]
  },
  {
    id: "car-5",
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 62500,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 9000,
    color: "Black",
    image: "https://images.unsplash.com/photo-1523983302622-2e4cf153c905?q=80&w=1770&auto=format&fit=crop",
    description: "The BMW X5 combines luxury, performance, and versatility. With hybrid technology, enjoy power without compromising efficiency.",
    features: [
      "Panoramic Sunroof",
      "Harman Kardon Surround Sound",
      "Gesture Control",
      "Heads-up Display",
      "Heated & Ventilated Seats"
    ]
  },
  {
    id: "car-6",
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: 39800,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 12500,
    color: "Gray",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1769&auto=format&fit=crop",
    description: "The Audi A4 delivers refined performance and handling with a luxurious interior and state-of-the-art technology.",
    features: [
      "Audi Virtual Cockpit",
      "MMI Touch Display",
      "Bang & Olufsen Sound System",
      "Audi Pre Sense Safety",
      "Wireless Apple CarPlay"
    ]
  },
  {
    id: "car-7",
    brand: "Hyundai",
    model: "Tucson",
    year: 2023,
    price: 27750,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 10500,
    color: "Green",
    image: "https://images.unsplash.com/photo-1651598335167-a77d6473e7aa?q=80&w=1770&auto=format&fit=crop",
    description: "The Hyundai Tucson offers a striking design with impressive fuel economy. The hybrid powertrain provides ample power for daily driving.",
    features: [
      "10.25-inch Touchscreen",
      "Digital Key",
      "Blind-spot View Monitor",
      "Remote Smart Parking Assist",
      "Wireless Phone Charging"
    ]
  },
  {
    id: "car-8",
    brand: "Chevrolet",
    model: "Malibu",
    year: 2022,
    price: 24400,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 15800,
    color: "Blue",
    image: "https://images.unsplash.com/photo-1604101789880-35bd39b4cdce?q=80&w=1771&auto=format&fit=crop",
    description: "The Chevrolet Malibu provides a spacious interior with a smooth ride quality. An excellent choice for comfort-focused drivers.",
    features: [
      "8-inch Infotainment System",
      "Teen Driver Technology",
      "Rear Vision Camera",
      "Automatic Climate Control",
      "4G LTE Wi-Fi Hotspot"
    ]
  },
  {
    id: "car-9",
    brand: "Volkswagen",
    model: "Golf",
    year: 2023,
    price: 29500,
    fuelType: "Petrol",
    transmission: "Manual",
    seatingCapacity: 5,
    mileage: 8500,
    color: "Red",
    image: "https://images.unsplash.com/photo-1624452704588-d9ddaf775036?q=80&w=1770&auto=format&fit=crop",
    description: "The Volkswagen Golf combines European design with practical functionality. Enjoy responsive handling and premium interior quality.",
    features: [
      "Digital Cockpit Pro",
      "Interior Ambient Lighting",
      "Dynamic Road Sign Display",
      "Travel Assist",
      "Harman Kardon Premium Audio"
    ]
  },
  {
    id: "car-10",
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: 46000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 9200,
    color: "Silver",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1771&auto=format&fit=crop",
    description: "The Mercedes-Benz C-Class exemplifies luxury with cutting-edge technology. Experience refined comfort with hybrid efficiency.",
    features: [
      "MBUX Infotainment System",
      "Burmester 3D Surround Sound",
      "64-color Ambient Lighting",
      "Wireless Charging",
      "Augmented Reality Navigation"
    ]
  },
  {
    id: "car-11",
    brand: "Subaru",
    model: "Outback",
    year: 2022,
    price: 28395,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 16700,
    color: "Green",
    image: "https://images.unsplash.com/photo-1669546628282-e00ee8ca39a6?q=80&w=1770&auto=format&fit=crop",
    description: "The Subaru Outback offers versatility with standard all-wheel drive. Perfect for adventure-seekers who need reliability and space.",
    features: [
      "11.6-inch Vertical Touchscreen",
      "EyeSight Driver Assist",
      "X-MODE with Hill Descent Control",
      "StarTex Water-repellent Upholstery",
      "Power Liftgate"
    ]
  },
  {
    id: "car-12",
    brand: "Kia",
    model: "Telluride",
    year: 2023,
    price: 35890,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 8,
    mileage: 11900,
    color: "Black",
    image: "https://images.unsplash.com/photo-1626072778346-0ab6604d39c4?q=80&w=1771&auto=format&fit=crop",
    description: "The Kia Telluride offers impressive space for up to eight passengers. Enjoy premium features at a value-oriented price point.",
    features: [
      "10.25-inch Touchscreen Navigation",
      "Dual Sunroof",
      "Harman Kardon Audio System",
      "Safe Exit Assist",
      "Smart Power Liftgate"
    ]
  },
  {
    id: "car-13",
    brand: "Mazda",
    model: "CX-5",
    year: 2022,
    price: 27500,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 14300,
    color: "Red",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1887&auto=format&fit=crop",
    description: "The Mazda CX-5 delivers engaging driving dynamics with an upscale interior. Experience premium feel at a mainstream price.",
    features: [
      "10.25-inch Infotainment Display",
      "Bose 10-Speaker Audio",
      "Active Driving Display",
      "Caturra Brown Nappa Leather",
      "360° View Monitor"
    ]
  },
  {
    id: "car-14",
    brand: "Nissan",
    model: "Rogue",
    year: 2023,
    price: 28900,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 12100,
    color: "White",
    image: "https://images.unsplash.com/photo-1609712726217-1ff485bae326?q=80&w=1770&auto=format&fit=crop",
    description: "The Nissan Rogue offers a comfortable ride with ample cargo space. Enjoy advanced safety features and efficient performance.",
    features: [
      "ProPILOT Assist",
      "Intelligent Around View Monitor",
      "Motion Activated Liftgate",
      "Tri-Zone Climate Control",
      "Quilted Semi-aniline Leather Seats"
    ]
  },
  {
    id: "car-15",
    brand: "Jeep",
    model: "Wrangler",
    year: 2022,
    price: 31995,
    fuelType: "Petrol",
    transmission: "Manual",
    seatingCapacity: 4,
    mileage: 17500,
    color: "Orange",
    image: "https://images.unsplash.com/photo-1589786742305-f24d19edd49d?q=80&w=1770&auto=format&fit=crop",
    description: "The Jeep Wrangler is built for off-road adventures with unmatched capability. Experience open-air freedom with removable tops and doors.",
    features: [
      "Rock-Trac 4x4 System",
      "Uconnect 5 System",
      "Removable Hardtop",
      "33-inch All-Terrain Tires",
      "Electronic Sway Bar Disconnect"
    ]
  },
  {
    id: "car-16",
    brand: "Lexus",
    model: "RX",
    year: 2023,
    price: 49900,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 10700,
    color: "Silver",
    image: "https://images.unsplash.com/photo-1664343839291-d97fc36134e2?q=80&w=1770&auto=format&fit=crop",
    description: "The Lexus RX hybrid combines luxury with efficiency. Enjoy a refined cabin with premium materials and advanced technology.",
    features: [
      "14-inch Touchscreen",
      "Mark Levinson Premium Audio",
      "Lexus Safety System+ 3.0",
      "Panoramic Glass Roof",
      "Digital Key"
    ]
  },
  {
    id: "car-17",
    brand: "Volvo",
    model: "XC60",
    year: 2022,
    price: 44000,
    fuelType: "Hybrid",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 11300,
    color: "Blue",
    image: "https://images.unsplash.com/photo-1613843439331-2a8201423fc4?q=80&w=1771&auto=format&fit=crop",
    description: "The Volvo XC60 offers Scandinavian luxury with a focus on safety. The hybrid powertrain provides a perfect balance of power and efficiency.",
    features: [
      "9-inch Sensus Touchscreen",
      "Bowers & Wilkins Audio",
      "Pilot Assist Semi-Autonomous Drive",
      "360° Surround View Camera",
      "Nappa Leather Upholstery"
    ]
  },
  {
    id: "car-18",
    brand: "Acura",
    model: "MDX",
    year: 2023,
    price: 49800,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 7,
    mileage: 9800,
    color: "White",
    image: "https://images.unsplash.com/photo-1677891516136-6d2d3e92a03d?q=80&w=1770&auto=format&fit=crop",
    description: "The Acura MDX delivers sporty handling with three-row versatility. Experience precision craftsmanship with advanced technology.",
    features: [
      "True Touchpad Interface",
      "ELS Studio 3D Premium Audio",
      "CabinTalk In-Car PA System",
      "10-speed Automatic Transmission",
      "Dynamic Mode Selector"
    ]
  },
  {
    id: "car-19",
    brand: "Genesis",
    model: "G70",
    year: 2022,
    price: 37400,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 13600,
    color: "Gray",
    image: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?q=80&w=1769&auto=format&fit=crop",
    description: "The Genesis G70 offers athletic performance with luxury appointments. Enjoy a driver-focused interior with premium materials.",
    features: [
      "10.25-inch HD Navigation System",
      "Lexicon 15-Speaker Audio",
      "Quilted Nappa Leather Seats",
      "Heads-up Display",
      "Genesis Digital Key"
    ]
  },
  {
    id: "car-20",
    brand: "Porsche",
    model: "Macan",
    year: 2023,
    price: 62900,
    fuelType: "Petrol",
    transmission: "Automatic",
    seatingCapacity: 5,
    mileage: 8900,
    color: "Black",
    image: "https://images.unsplash.com/photo-1611859328059-50ae68927373?q=80&w=1776&auto=format&fit=crop",
    description: "The Porsche Macan delivers sports car performance in a compact SUV. Experience precise handling with everyday practicality.",
    features: [
      "10.9-inch Touchscreen Display",
      "BOSE Surround Sound System",
      "Adaptive Air Suspension",
      "Sport Chrono Package",
      "LED Matrix Headlights"
    ]
  }
];

export default mockCars;
