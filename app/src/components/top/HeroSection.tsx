import Image from "next/image";
import { TextContent } from "@/types/ui";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Heading } from "@/components/shared/Heading";
import { MultilineText } from "@/components/shared/MultilineText";
import { withBasePath } from "@/lib/path";

type Props = {
  title: string;
  about: TextContent;
};

export const HeroSection = ({ title, about }: Props) => {
  return (
    <SectionFrame centered={true}>
      <Heading level={1}>
        <Image
          src={withBasePath("images/logo_jaist-tech-circle.png")}
          alt={title}
          width={200}
          height={200}
          className="my-8"
        />
      </Heading>

      <MultilineText content={about} />
    </SectionFrame>
  );
};