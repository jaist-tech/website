import { SectionFrame } from "@/components/shared/SectionFrame";
import Script from "next/script";

type Props = {
  title: string;
};

const twitterTimelineHeight = 640;

export const NewsSection = ({ title }: Props) => {
  return (
    <SectionFrame>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="max-w-3xl mx-auto w-full">
        <a
          className="twitter-timeline"
          data-height={twitterTimelineHeight}
          data-chrome="noheader nofooter"
          href="https://twitter.com/jaist_tech?ref_src=twsrc%5Etfw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweets by jaist_tech
        </a>
        <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
      </div>
    </SectionFrame>
  );
};
