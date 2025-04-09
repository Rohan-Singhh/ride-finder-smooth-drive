
import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  message?: string;
}

const LoadingState = ({ message = "Loading cars..." }: LoadingStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 w-full">
      <Loader2 size={40} className="text-primary animate-spin mb-4" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default LoadingState;
