import { HeroSection } from "@/components/top/HeroSection";
import { ja } from "@/locales/ja";

const { top } = ja;

export default function Top() {
  return (
      <main>
        <HeroSection
          title={top.welcome}
          about={top.about}
        />
      </main>
  );
}
