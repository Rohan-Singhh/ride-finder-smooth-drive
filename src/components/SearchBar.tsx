
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialValue?: string;
}

const SearchBar = ({ onSearch, initialValue = "" }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  // Update search query if initialValue changes
  useEffect(() => {
    setSearchQuery(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // For better UX, trigger search on change after a small delay
    // This could be debounced in a real application
    setTimeout(() => {
      onSearch(e.target.value);
    }, 300);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search by brand, model, or features..."
        className="w-full py-2 px-4 pl-10 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search size={18} className="text-muted-foreground" />
      </div>
    </form>
  );
};

export default SearchBar;
