import { ProjectsPageClient } from "./ProjectsPageClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | JAIST Tech サークル",
  description:
    "JAIST Tech サークルの活動成果をまとめたプロジェクト一覧。サークルメンバーによるアプリ開発、ゲーム開発、コミュニティ活動などを紹介します。",
  openGraph: {
    title: "Projects | JAIST Tech サークル",
    description:
      "サークルメンバーが手がけた多彩なプロジェクトを掲載。ゲーム開発から実用ツール、コミュニティ活動まで幅広く紹介。",
    images: [
      {
        url: "https://www.jaist.ac.jp/misc/circles/tech/ogp/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "活動の様子が描かれたイラスト",
      },
    ],
  },
};

export default function Page() {
  return <ProjectsPageClient />;
}
