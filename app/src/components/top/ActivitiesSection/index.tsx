import type { ActivitiesContent } from "@/locales/ja";
import { SectionFrame } from "@/components/shared/SectionFrame";
import { Heading } from "@/components/shared/Heading";
import { EventCard } from "./EventCard";

type Props = {
  activitiesContent: ActivitiesContent;
};

export const ActivitiesSection = ({ activitiesContent }: Props) => {
  return (
    <SectionFrame id="schedule" centered={true}>
      <Heading level={2}>{activitiesContent.title}</Heading>

      <Heading level={3}>{activitiesContent.weekly}</Heading>
      <div className="flex flex-col items-center gap-1 text-gray-600">
        <p className="text-gray-600">{activitiesContent.weeklyDetail}</p>
        <p className="text-violet-500 text-sm">
          {activitiesContent.weeklyNote}
        </p>
      </div>

      <Heading level={3}>{activitiesContent.events}</Heading>
      <div className="grid items-center gap-1 w-full mb-6 text-gray-600 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1 md:px-4">
          <EventCard
            iconEmoji={activitiesContent.sakuraHackathon.iconEmoji}
            title={activitiesContent.sakuraHackathon.title}
            date={activitiesContent.sakuraHackathon.date}
            description={activitiesContent.sakuraHackathon.description}
          />
          <EventCard
            iconEmoji={activitiesContent.jaistFestival.iconEmoji}
            title={activitiesContent.jaistFestival.title}
            date={activitiesContent.jaistFestival.date}
            description={activitiesContent.jaistFestival.description}
          />
          <EventCard
            iconEmoji={activitiesContent.snowHackathon.iconEmoji}
            title={activitiesContent.snowHackathon.title}
            date={activitiesContent.snowHackathon.date}
            description={activitiesContent.snowHackathon.description}
          />
          <EventCard
            iconEmoji={activitiesContent.lt.iconEmoji}
            title={activitiesContent.lt.title}
            date={activitiesContent.lt.date}
            description={activitiesContent.lt.description}
          />
          <p className="text-sm text-gray-600 col-span-full">
            {activitiesContent.others}
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};
