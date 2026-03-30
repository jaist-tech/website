export type Project = {
  id: string;
  title: string;
  description: string;
  iconEmoji: string;
  category: "Development" | "Community";
  date: string;
  tags: string[];
  siteLink?: string;
  githubLink?: string;
  appStoreLink?: string;
  googlePlayLink?: string;
  qiitaLink?: string;
};
