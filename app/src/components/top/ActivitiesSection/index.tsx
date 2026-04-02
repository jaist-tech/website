import { EventCard } from "./EventCard";

import { Heading } from "@/components/shared/Heading";
import { SectionFrame } from "@/components/shared/SectionFrame";

import type { ActivitiesContent } from "@/locales/ja";

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
        <p className="text-sm text-violet-500">
          {activitiesContent.weeklyNote}
        </p>
      </div>

      <Heading level={3}>{activitiesContent.events}</Heading>
      <div className="mb-6 grid w-full max-w-5xl items-center gap-1 text-gray-600">
        <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-2 md:px-4">
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
            iconEmoji={activitiesContent.studyMeeting.iconEmoji}
            title={activitiesContent.studyMeeting.title}
            date={activitiesContent.studyMeeting.date}
            description={activitiesContent.studyMeeting.description}
          />
          <p className="col-span-full text-gray-600 text-sm">
            {activitiesContent.others}
          </p>
        </div>
      </div>
    </SectionFrame>
  );
};
