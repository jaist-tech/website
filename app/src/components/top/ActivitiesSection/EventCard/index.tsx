type Props = {
  iconEmoji: string;
  title: string;
  date: string;
  description: string;
};

const normalizeLineBreaks = (text: string) => text.replace(/\\n|¥n/g, "\n");

export const EventCard = ({ iconEmoji, title, date, description }: Props) => {
  return (
    <div className="grid grid-cols-4 border border-violet-400 rounded-lg">
      <figure className="grid w-full place-content-center rounded-l-lg bg-violet-100 text-5xl select-none">
        {iconEmoji}
      </figure>
      <div className="grid gap-1 col-span-3 p-4 text-left">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm font-semibold text-gray-600 ">開催時期: {date}</p>
        <p className="text-xs text-gray-600 whitespace-pre-line">{normalizeLineBreaks(description)}</p>
      </div>
    </div>
  );
};
