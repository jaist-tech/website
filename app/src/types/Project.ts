export type Project = {
    id: string;
    title: string;
    description: string;
    iconEmoji: string;
    category: "Development" | "Community";
    tags: string[];
    githubLink?: string;
    siteLink?: string;
    appStoreLink?: string;
    googlePlayLink?: string;
};
