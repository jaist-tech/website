import Script from "next/script";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { HeroSection } from "@/components/top/HeroSection";
import { ja } from "@/locales/ja";

const { top } = ja;
const twitterTimelineHeight = 640;

export default function Top() {
  return (
    <>
      <HeroSection
        title={top.welcome}
        about={top.about}
      />
      <SectionFrame>
        <h2 className="text-2xl font-bold">{top.news}</h2>
        <a
          className="twitter-timeline"
          data-height={twitterTimelineHeight}
          href="https://twitter.com/jaist_tech?ref_src=twsrc%5Etfw"
        >
          Tweets by jaist_tech
        </a>
        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
      </SectionFrame>
    </>
  );
}
