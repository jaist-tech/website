import { SectionFrame } from "@/components/shared/SectionFrame";

type Props = {
  title: string;
}

export const LinkSection = ({ title }: Props) => {
  return (
    <SectionFrame centered>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="https://x.com/jaist_tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-32 justify-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          X
        </a>
        <a
          href="https://qiita.com/organizations/jaist-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-32 justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
        >
          Qiita
        </a>
        <a
          href="https://github.com/jaist-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-32 justify-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </SectionFrame>
  )
};