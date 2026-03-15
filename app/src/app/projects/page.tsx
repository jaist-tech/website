
import { SectionFrame } from "@/components/shared/SectionFrame";
import { ja } from "@/locales/ja";

const { projects } = ja;

export default function Page() {
  return (
      <SectionFrame>
        <h1 className="text-3xl font-bold mb-4">{projects.title}</h1>
      </SectionFrame>
  );
}
