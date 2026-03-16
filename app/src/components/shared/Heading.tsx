import { JSX } from "react";

type Props = {
    level: 1 | 2 | 3;
    title: string;
};

export const Heading = ({ level, title }: Props) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const sizeClass =
        level === 1 ? "text-4xl" : level === 2 ? "text-3xl" : "text-2xl";

    return <Tag className={`font-bold ${sizeClass}`}>{title}</Tag>;
}