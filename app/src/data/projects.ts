import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "graph-view-page",
    title: "講義依存関係グラフ",
    description: "大学のシラバス情報から講義同士の依存関係をグラフで可視化し、どの順序で受講すべきか・どの講義を事前に受けておくべきかを分かりやすくツール。",
    iconEmoji: "🏫",
    category: "WEB App",
    githubLink: "https://github.com/JAIST-Hackathon/graph-view-page",
    siteLink: "https://jaist-hackathon.github.io/graph-view-page/"
  },
  {
    id: "advent-calendar-2025",
    title: "Advent Calendar 2025",
    description: "JAIST Tech サークルによるアドベントカレンダー。技術記事だけでなく、制作、学習記録、研究紹介など、サークル立ち上げ期の多様な取り組みを発信した企画。",
    iconEmoji: "📝",
    category: "Community",
    siteLink: "https://qiita.com/advent-calendar/2025/jaist-tech"
  }
];
