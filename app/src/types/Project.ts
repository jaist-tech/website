export type Project = {
    id: string;
    title: string;
    description: string;
    iconEmoji: string;
    category: "WEB App" | "Mobile App" | "Community";
    githubLink?: string;
    siteLink?: string;
    appStoreLink?: string;
    googlePlayLink?: string;
};
