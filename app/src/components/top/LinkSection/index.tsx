import { SimpleIconLink } from "./SimpleIconLink";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { siX, siQiita, siGithub } from "simple-icons";

type Props = {
  title: string;
}

export const LinkSection = ({ title }: Props) => {
  return (
    <SectionFrame centered>
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
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
