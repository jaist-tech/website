import { TextContent } from "@/types/ui";
import { MultilineText } from "../shared/MultilineText";

type Props = {
  title: TextContent;
  about: TextContent;
};

export const HeroSection = ({ title, about }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-12 px-4">
      <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
        🚧 WIP 🚧
      </span>
      <h1 className="text-2xl font-bold">{title}</h1>
      <MultilineText content={about} />
    </div>
  );
};