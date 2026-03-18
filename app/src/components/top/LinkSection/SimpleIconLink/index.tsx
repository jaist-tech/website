import type { SimpleIcon } from "simple-icons"

type Props = {
  link: string;
  icon: SimpleIcon;
}

export const SimpleIconLink = ({ link, icon }: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group grid w-full place-items-center gap-2 px-6 py-3 text-white rounded-lg 
        hover:opacity-70 transition-opacity
      "
      style={{ backgroundColor: `#${icon.hex}` }}
      aria-label={icon.title}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 transition-transform duration-200 ease-in-out group-hover:scale-[1.2]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={icon.path} />
      </svg>
    </a>
  );
};