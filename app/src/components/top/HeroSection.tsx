import { TextContent } from "@/types/ui";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Heading } from "@/components/shared/Heading";
import { MultilineText } from "@/components/shared/MultilineText";

type Props = {
  title: string;
  about: TextContent;
};

export const HeroSection = ({ title, about }: Props) => {
  return (
    <SectionFrame centered={true}>
      <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
        🚧 WIP 🚧
      </span>

      <Heading level={1} title={title} />
      <MultilineText content={about} />
    </SectionFrame>
  );
};