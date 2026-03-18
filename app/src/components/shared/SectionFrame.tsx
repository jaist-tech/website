type Props = {
  children: React.ReactNode;
  id?: string;
  centered?: boolean;
};

export const SectionFrame = ({ children, id, centered = false }: Props) => {
  const centerClasses = centered
    ? "flex flex-col items-center justify-center text-center"
    : "flex flex-col max-w-4xl mx-auto";

  return (
    <div id={id} className={`${centerClasses} gap-4 py-12 px-4`}>
      {children}
    </div>
  );
};