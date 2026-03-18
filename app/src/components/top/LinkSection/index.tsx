import { SimpleIconLink } from "./SimpleIconLink";
import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { siX, siQiita, siGithub } from "simple-icons";

type Props = {
  title: string;
}

export const LinkSection = ({ title }: Props) => {
  return (
    <SectionFrame centered>
      <Heading level={2}>{title}</Heading>

      <div className="grid grid-cols-3 w-full gap-4 max-w-xl">
        <SimpleIconLink
          link="https://x.com/jaist_tech"
          icon={siX}
        />
        <SimpleIconLink
          link="https://qiita.com/organizations/jaist-tech"
          icon={siQiita}
        />
        <SimpleIconLink
          link="https://github.com/jaist-tech"
          icon={siGithub}
        />
      </div>
    </SectionFrame>
  )
};
