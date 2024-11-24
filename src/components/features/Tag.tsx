import { Badge } from "@/components/ui/badge";
import {
  Music,
  Theater,
  Drama,
  Landmark,
  Clock,
  Clapperboard,
  Palette,
  Infinity,
  BookCopy,
  Book,
} from "lucide-react";

export function Tag({
  tagName,
  style,
  time,
}: {
  tagName: string;
  style?: string;
  time?: string;
}) {
  const getTagStyle = (tagName: string) => {
    if (!tagName) {
      return style || "bg-gray-100 text-gray-800 border-gray-300";
    }

    switch (tagName.toLowerCase()) {
      case "glazba":
        return "bg-yellow-100 text-yellow-800 border-yellow-300 px-4 py-2";
      case "kazalište":
        return "bg-orange-100 text-orange-600 border-orange-200 px-4 py-2";
      case "film":
        return "bg-yellow-50 text-yellow-600 border-yellow-200 px-4 py-2";
      case "muzeji":
        return "bg-blue-50 text-blue-600 border-blue-200 px-4 py-2";
      case "ples":
        return "bg-orange-50 text-orange-600 border-orange-200 px-4 py-2";
      case "likovna umjetnost":
        return "bg-blue-100 text-blue-800 border-blue-300 px-4 py-2";
      case "razno":
        return "bg-green-100 text-green-800 border-green-300 px-4 py-2";
      case "književnost":
        return "bg-orange-100 text-orange-800 border-orange-300 px-4 py-2";
      case "interdisciplinarni program":
        return "bg-orange-100 text-orange-800 border-orange-300 px-4 py-2";
      case "diskurzivni program":
        return "bg-orange-100 text-orange-800 border-orange-300 px-4 py-2";
      case "time":
        return "bg-red-100 text-red-800 border-red-300 px-4 py-2";
      default:
        return style || "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getTagIcon = (tagName: string) => {
    if (!tagName) {
      return null;
    }

    switch (tagName.toLowerCase()) {
      case "glazba":
        return <Music className="mr-2 h-4 w-4" />;
      case "kazalište":
        return <Drama className="mr-2 h-4 w-4" />;
      case "film":
        return <Clapperboard className="mr-2 h-4 w-4" />;
      case "muzeji":
        return <Landmark className="mr-2 h-4 w-4" />;
      case "ples":
        return <Theater className="mr-2 h-4 w-4" />;
      case "likovna umjetnost":
        return <Palette className="mr-2 h-4 w-4" />;
      case "razno":
        return <Infinity className="mr-2 h-4 w-4" />;
      case "književnost":
        return <BookCopy className="mr-2 h-4 w-4" />;
      case "interdisciplinarni program":
        return <Book className="mr-2 h-4 w-4" />;
      case "diskurzivni program":
        return <Book className="mr-2 h-4 w-4" />;
      case "time":
        return <Clock className="mr-2 h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Badge variant="outline" className={getTagStyle(tagName)}>
      {getTagIcon(tagName)}
      {tagName === "time" && time
        ? time
        : tagName === "interdisciplinarni program"
        ? "Interdisciplinarno"
        : tagName === "diskurzivni program"
        ? "Diskurzivno"
        : tagName || ""}
    </Badge>
  );
}
