import { JSX } from "react";

type Props = {
    level: 1 | 2 | 3;
    children: React.ReactNode;
};

export const Heading = ({ level, children }: Props) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    const sizeClass =
        level === 1 ? "text-4xl" : level === 2 ? "text-3xl" : "text-2xl";

    return <Tag className={`font-bold ${sizeClass}`}>{children}</Tag>;
}