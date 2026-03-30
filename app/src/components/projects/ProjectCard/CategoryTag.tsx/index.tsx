import type { Project } from "@/types/Project";

type Props = {
    category: Project["category"];
};

const categoryColorClass: Record<Project["category"], string> = {
    "Development": "bg-sky-700",
    "Community": "bg-red-700",
};

export const CategoryTag = ({ category }: Props) => {
    return (
        <span
            className={`absolute top-3 left-3 rounded-xl px-2 py-1 text-center text-xs font-bold text-white select-none ${categoryColorClass[category]}`}
        >
            {category}
        </span>
    );
};
