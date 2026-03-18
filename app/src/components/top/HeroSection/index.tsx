import Image from "next/image";
import Link from "next/link";
import { TextContent } from "@/types/ui";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Heading } from "@/components/shared/Heading";
import { MultilineText } from "@/components/shared/MultilineText";
import { withBasePath } from "@/lib/path";
import { HeroBackgroundSlideshow } from "./HeroBackgroundSlideshow";

type Props = {
  title: string;
  about: TextContent;
  chatchphrase: string;
};

const HERO_BACKGROUND_IMAGES = ["images/hero_01.png", "images/hero_02.png", "images/hero_03.png", "images/hero_04.png"] as const;
const HERO_SLIDE_DURATION_MS = 8000;

export const HeroSection = ({ title, about, chatchphrase }: Props) => {
  return (
    <SectionFrame centered={true}>
      <div className="relative w-full grid place-items-center border border-violet-300 border-3 rounded-lg overflow-hidden max-w-4xl py-4">
        <HeroBackgroundSlideshow
          imagePaths={HERO_BACKGROUND_IMAGES}
          slideDurationMs={HERO_SLIDE_DURATION_MS}
        />

        <Heading level={2} className="break-keep text-white text-shadow-lg mt-4">
          {chatchphrase}
        </Heading>

        <Heading level={1}>
          <Image
            src={withBasePath("images/logo_jaist-tech-circle.png")}
            alt={title}
            width={200}
            height={200}
            className="my-8"
          />
        </Heading>

        <MultilineText
          content={about}
          className="text-center text-xs md:text-sm text-white text-shadow-lg font-bold mb-8"
        />
      </div>

      <Link 
        href="/projects"
        className="
          inline-block mt-6 px-6 py-3 bg-violet-500 text-white font-semibold rounded-lg
          hover:bg-violet-600 hover:scale-105 hover:shadow-lg transition-colors transition-transform
        "
      >
        プロジェクト一覧ページへ
      </Link>

    </SectionFrame>
  );
};
