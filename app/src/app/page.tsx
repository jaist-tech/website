import { ActivitiesSection } from "@/components/top/ActivitiesSection";
import { HeroSection } from "@/components/top/HeroSection";
import { LinkSection } from "@/components/top/LinkSection";
import { NewsSection } from "@/components/top/NewsSection";
import { ja } from "@/locales/ja";

const { top } = ja;

export default function Top() {
  return (
    <>
      <HeroSection
        title={top.title}
        about={top.about}
        catchphrase={top.catchphrase}
      />
      <ActivitiesSection activitiesContent={top.activities} />
      <NewsSection title={top.news} />
      <LinkSection title={top.link} />
    </>
  );
}
