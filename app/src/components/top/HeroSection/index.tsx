import Image from "next/image";
import Link from "next/link";
import type { TextContent } from "@/types/ui";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Heading } from "@/components/shared/Heading";
import { MultilineText } from "@/components/shared/MultilineText";
import { withBasePath } from "@/lib/path";
import { HeroBackgroundSlideshow } from "./HeroBackgroundSlideshow";

const HERO_BACKGROUND_IMAGES = [
  "images/hero_01.png",
  "images/hero_02.png",
  "images/hero_03.png",
  "images/hero_04.png",
] as const;
const HERO_SLIDE_DURATION_MS = 8000;

type Props = {
  title: string;
  about: TextContent;
  catchphrase: string;
};

export const HeroSection = ({ title, about, catchphrase }: Props) => {
  return (
    <SectionFrame centered={true}>
      <div
        className="
        relative grid place-items-center
        w-full max-w-4xl py-4
        border-3 border-violet-300 rounded-lg
        text-white text-shadow-lg
        overflow-hidden
      "
      >
        <HeroBackgroundSlideshow
          imagePaths={HERO_BACKGROUND_IMAGES}
          slideDurationMs={HERO_SLIDE_DURATION_MS}
        />

        <h2 className="catchphrase break-keep mt-4 text-2xl xs:text-4xl">
          {catchphrase}
        </h2>

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
          className="text-center text-xs md:text-sm font-bold mb-8"
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
