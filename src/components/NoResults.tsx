
import { SearchX } from "lucide-react";

interface NoResultsProps {
  message?: string;
  subMessage?: string;
}

const NoResults = ({ 
  message = "No cars found", 
  subMessage = "Try adjusting your filters or search term."
}: NoResultsProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-border rounded-lg bg-card">
      <SearchX size={48} className="text-muted-foreground mb-4" />
      <h3 className="text-xl font-medium">{message}</h3>
      <p className="text-muted-foreground mt-2 text-center max-w-md">{subMessage}</p>
    </div>
  );
};

export default NoResults;
