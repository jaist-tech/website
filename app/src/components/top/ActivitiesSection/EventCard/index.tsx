type Props = {
  iconEmoji: string;
  title: string;
  date: string;
  description: string;
};

const normalizeLineBreaks = (text: string) => text.replace(/\\n|¥n/g, "\n");

export const EventCard = ({ iconEmoji, title, date, description }: Props) => {
  return (
    <div className="grid grid-cols-4 rounded-lg border border-violet-400">
      <figure className="grid w-full select-none place-content-center rounded-l-lg bg-violet-100 text-5xl">
        {iconEmoji}
      </figure>
      <div className="col-span-3 grid gap-1 p-4 text-left">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="font-semibold text-gray-600 text-sm">開催時期: {date}</p>
        <p className="whitespace-pre-line text-gray-600 text-xs">
          {normalizeLineBreaks(description)}
        </p>
      </div>
    </div>
  );
};
