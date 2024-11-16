import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcwIcon } from "lucide-react";

interface RefreshButtonProps {
  onClick: () => any;
}

const RefreshButton: React.FC<RefreshButtonProps> = ({ onClick }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = async () => {
    setIsSpinning(true);
    await onClick();
    setTimeout(() => {
      setIsSpinning(false);
    }, 400);
  };
  return (
    <Button onClick={handleClick} size="lg" className="flex items-center gap-2">
      <RefreshCcwIcon className={isSpinning ? "animate-spin" : ""} />
      Refresh
    </Button>
  );
};

export default RefreshButton;
