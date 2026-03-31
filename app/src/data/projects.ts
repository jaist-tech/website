import type { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "game-cell-battle",
    title: "Cell Battle",
    description:
      "セル・オートマトンの代表例であるライフゲームのルールをもとに、パターン配置と盤面の自動変化を通じてCPUとの駆け引きを楽しめる対戦型ゲーム。",
    iconEmoji: "🧠",
    category: "Development",
    date: "2026-01",
    tags: ["ブラウザゲーム", "セル・オートマトン", "CPU対戦"],
    siteLink: "https://jaist-tech.github.io/game_ca/",
    githubLink: "https://github.com/jaist-tech/game_ca",
  },
  {
    id: "advent-calendar-2025",
    title: "Advent Calendar 2025",
    description:
      "JAIST Techサークルによるアドベントカレンダー。技術記事だけでなく、制作、学習記録、研究紹介など、サークル立ち上げ期の多様な取り組みを発信した企画。",
    iconEmoji: "📝",
    category: "Community",
    date: "2025-12",
    tags: ["技術記事", "アドベントカレンダー"],
    siteLink: "https://qiita.com/advent-calendar/2025/jaist-tech",
  },
  {
    id: "ai-hide-and-seek",
    title: "AIかくれんぼ",
    description:
      "OpenCVとYOLOを用いた人物検出AIを相手に、人間だと見破られないよう距離や動きを工夫しながら挑戦する、コンピュータビジョンを活用したゲーム。",
    iconEmoji: "👀",
    category: "Development",
    date: "2025-09",
    tags: ["ゲーム開発", "コンピュータビジョン"],
    githubLink: "https://github.com/jaist-tech/detect-human",
  },
  {
    id: "llm-zinro",
    title: "LLM人狼",
    description:
      "ローカルLLMをNPCプレイヤーとして用い、役職に応じた議論・推理・投票を通じてユーザーが対話形式で参加できるワンナイト人狼ゲーム。",
    iconEmoji: "🐺",
    category: "Development",
    date: "2025-09",
    tags: ["ゲーム開発", "大規模言語モデル", "RAG"],
    githubLink: "https://github.com/jaist-tech/zinro",
    qiitaLink: "https://qiita.com/niwamoton/items/ea4a8abf2eaaf68a8b31",
  },
  {
    id: "tsp-duel",
    title: "最短経路ゲーム",
    description:
      "巡回セールスマン問題を題材にして、複数の地点の巡り方を考えながら、プレイヤーの直感とアルゴリズムの解で最短経路を競うゲーム。",
    iconEmoji: "🛣️",
    category: "Development",
    date: "2025-09",
    tags: ["ブラウザゲーム", "巡回セールスマン問題", "対戦ゲーム"],
    githubLink: "https://github.com/jaist-tech/tsp-duel",
  },
  {
    id: "graph-view-page",
    title: "講義依存関係グラフ",
    description:
      "大学のシラバス情報から講義同士の依存関係をグラフで可視化し、どの順序で受講すべきか・どの講義を事前に受けておくべきかを分かりやすくするツール。",
    iconEmoji: "🏫",
    category: "Development",
    date: "2025-06",
    tags: ["ウェブアプリ", "スクレイピング", "グラフ可視化"],
    githubLink: "https://github.com/jaist-tech/syllabus-graph",
    siteLink: "https://jaist-tech.github.io/syllabus-graph/",
  },
  {
    id: "bus-dx-timetable",
    title: "BusDX: JAISTバス案内",
    description:
      "JAISTと主要駅・空港を結ぶ複数の交通手段をまとめて検索し、時刻表や地図を一体的に表示することで移動計画を立てやすくする交通ナビゲーションツール。",
    iconEmoji: "🚌",
    category: "Development",
    date: "2025-05",
    tags: ["ウェブアプリ", "検索ツール", "地図アプリ"],
    siteLink: "https://jaist-tech.github.io/dx-timetable/",
    githubLink: "https://github.com/jaist-tech/dx-timetable",
  },
];
