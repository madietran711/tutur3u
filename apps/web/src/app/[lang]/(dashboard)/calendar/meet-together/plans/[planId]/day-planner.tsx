import dayjs from 'dayjs';
import React from 'react';
import DayTime from './day-time';
import useTranslation from 'next-translate/useTranslation';
import 'dayjs/locale/vi';
import { Timeblock } from '@/types/primitives/Timeblock';

export default function DayPlanner({
  timeblocks,
  date,
  start,
  end,
  editable,
  disabled,
}: {
  timeblocks: Timeblock[];
  date: string;
  start: number;
  end: number;
  editable: boolean;
  disabled: boolean;
}) {
  const { lang } = useTranslation();
  dayjs.locale(lang);

  return (
    <div>
      <div className="pointer-events-none select-none p-1">
        <div className="text-xs">
          {dayjs(date)
            .locale(lang)
            .format(lang === 'vi' ? 'DD/MM' : 'MMM D')}
        </div>
        <div className="text-lg font-semibold">
          {dayjs(date).locale(lang).format('ddd')}
        </div>
      </div>

      <DayTime
        timeblocks={timeblocks}
        date={date}
        start={start}
        end={end}
        editable={editable}
        disabled={disabled}
      />
    </div>
  );
}
