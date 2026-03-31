import { Timeline } from "./Timeline";

import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";

type Props = {
  title: string;
};

export const NewsSection = ({ title }: Props) => {
  return (
    <SectionFrame id="news">
      <Heading level={2}>{title}</Heading>
      <div className="mx-auto w-full max-w-3xl">
        <Timeline />
      </div>
    </SectionFrame>
  );
};
