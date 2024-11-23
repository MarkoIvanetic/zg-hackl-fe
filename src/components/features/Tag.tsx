import { Badge } from "@/components/ui/badge";
import { Music, Theater, Landmark, Clock } from "lucide-react";

export function Tag({
  tag,
  style,
  time,
}: {
  tag: string;
  style?: string;
  time?: string;
}) {
  const getTagStyle = (tagName: string) => {
    switch (tagName.toLowerCase()) {
      case "concert":
        return "bg-blue-100 text-blue-800 border-blue-300 px-4 py-2";
      case "opera":
        return "bg-red-50 text-red-600 border-red-200 px-4 py-2";
      case "landmark":
        return "bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2";
      case "time":
        return "bg-green-100 text-green-800 border-green-300 px-4 py-2";
      default:
        return style || "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getTagIcon = (tagName: string) => {
    switch (tagName.toLowerCase()) {
      case "concert":
        return <Music className="mr-2 h-4 w-4" />;
      case "opera":
        return <Theater className="mr-2 h-4 w-4" />;
      case "landmark":
        return <Landmark className="mr-2 h-4 w-4" />;
      case "time":
        return <Clock className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Badge variant="outline" className={getTagStyle(tag)}>
      {getTagIcon(tag)}
      {tag === "time" && time ? time : tag}
    </Badge>
  );
}
