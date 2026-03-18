import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Timeline } from "./Timeline"

type Props = {
  title: string;
};


export const NewsSection = ({ title }: Props) => {
  return (
    <SectionFrame id="news">
      <Heading level={2}>{title}</Heading>
      <div className="max-w-3xl mx-auto w-full">
        <Timeline />
      </div>
    </SectionFrame>
  );
};
