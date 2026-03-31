type Props = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export const IconLink = ({ href, label, children }: Props) => {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="text-violet-900 transition-colors transition-transform hover:scale-110 hover:text-cyan-500"
    >
      {children}
    </a>
  );
};
