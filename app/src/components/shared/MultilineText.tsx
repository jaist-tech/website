import type { TextContent } from "@/types/ui";
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
      {lines.map((line, i) => (
        <Fragment key={line}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  );
};
