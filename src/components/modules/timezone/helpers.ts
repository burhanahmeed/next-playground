import Timezones from '@/components/modules/timezone/data.json';

const parseOffsetValue = (offset: string) => {
  if (offset && offset.split(':')[0]) {
    return Number(offset.split(':')[0]);
  }

  return 0;
};

export const generateHourArray = (
  defaultTz: string,
  timezone: string,
  isPrimary = false
) => {
  const initial = Array.from(Array(24).keys()).map((e) => {
    return {
      hour: e,
      day: 0,
    };
  });
  const tz = Timezones.find((e) => e.id === timezone);
  const defTz = Timezones.find((e) => e.id === defaultTz);

  if (!isPrimary && tz && defTz) {
    const timeDifference =
      parseOffsetValue(defTz.offset) - parseOffsetValue(tz.offset);
    const roundedTimeDiff = Number(timeDifference.toFixed(0));

    if (timeDifference < 0) {
      return [
        ...initial.slice(Math.abs(roundedTimeDiff), initial.length),
        ...initial.slice(0, Math.abs(roundedTimeDiff)),
      ];
    }

    return [
      ...initial.slice(initial.length - roundedTimeDiff, initial.length),
      ...initial.slice(0, initial.length - roundedTimeDiff),
    ];
  }

  return initial;
};

export const getMetaData = (
  defaultTz: string,
  timezone: string,
  isPrimary = false
) => {
  const tz = Timezones.find((e) => e.id === timezone);
  const defTz = Timezones.find((e) => e.id === defaultTz);
  let timeDifference = 0;
  if (defTz && tz) {
    timeDifference =
      parseOffsetValue(defTz.offset) - parseOffsetValue(tz.offset);
  }

  return {
    timezone: isPrimary ? defTz : tz,
    difference: isPrimary ? 0 : timeDifference,
  };
};
