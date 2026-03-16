import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import Script from "next/script";

type Props = {
  title: string;
};

const twitterTimelineHeight = 640;

export const NewsSection = ({ title }: Props) => {
  return (
    <SectionFrame>
      <Heading level={2} title={title} />
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
