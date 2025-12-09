import { TextContent } from "@/types/ui";
import { Fragment } from "react";

type Props = {
  content: TextContent;
  as?: "p" | "span" | "div";
  className?: string;
};

export const MultilineText = ({ content, as: Tag = "p", className }: Props) => {
  const lines = Array.isArray(content) ? content : [content];

  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          {line}
          {index < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
};