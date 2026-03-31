type Props = {
  children: React.ReactNode;
  id?: string;
  centered?: boolean;
  maxWidth?: "none" | "4xl" | "7xl";
};

const maxWidthClassMap = {
  none: "w-full",
  "4xl": "w-full mx-auto max-w-4xl",
  "7xl": "w-full mx-auto max-w-7xl",
} as const;

export const SectionFrame = ({
  children,
  id,
  centered = false,
  maxWidth,
}: Props) => {
  const centerClasses = centered
    ? "flex flex-col items-center justify-center text-center"
    : "flex flex-col";

  const resolvedMaxWidth = maxWidth ?? (centered ? "none" : "4xl");
  const maxWidthClass = maxWidthClassMap[resolvedMaxWidth];

  return (
    <div
      id={id}
      className={`relative ${centerClasses} ${maxWidthClass} gap-4 px-4 py-12`}
    >
      {children}
    </div>
  );
};
