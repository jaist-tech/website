type Props = {
  children: React.ReactNode;
  centered?: boolean;
};

export const SectionFrame = ({ children, centered = false }: Props) => {
  const centerClasses = centered
    ? "flex flex-col items-center justify-center text-center"
    : "flex flex-col";

  return (
    <div className={`${centerClasses} gap-4 py-12 px-4`}>
      {children}
    </div>
  );
};