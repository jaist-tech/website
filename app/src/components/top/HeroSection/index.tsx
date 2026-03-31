import Image from "next/image";
import Link from "next/link";

import { HeroBackgroundSlideshow } from "./HeroBackgroundSlideshow";

import { Heading } from "@/components/shared/Heading";
import { MultilineText } from "@/components/shared/MultilineText";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { withBasePath } from "@/lib/path";

import type { TextContent } from "@/types/ui";

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
      <div className="relative grid w-full max-w-4xl place-items-center overflow-hidden rounded-lg border-3 border-violet-300 py-4 text-shadow-lg text-white">
        <HeroBackgroundSlideshow
          imagePaths={HERO_BACKGROUND_IMAGES}
          slideDurationMs={HERO_SLIDE_DURATION_MS}
        />

        <h2 className="catchphrase mt-4 break-keep text-2xl xs:text-4xl">
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
          className="mb-8 text-center font-bold text-xs md:text-sm"
        />
      </div>

      <Link
        href="/projects"
        className="mt-6 inline-block rounded-lg bg-violet-500 px-6 py-3 font-semibold text-white transition-colors transition-transform hover:scale-105 hover:bg-violet-600 hover:shadow-lg"
      >
        プロジェクト一覧ページへ
      </Link>
    </SectionFrame>
  );
};
