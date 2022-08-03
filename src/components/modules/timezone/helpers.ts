import Timezones from '@/components/modules/timezone/data.json';

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
  const tz = Timezones.find((e) => e.value === timezone);
  const defTz = Timezones.find((e) => e.value === defaultTz);

  if (!isPrimary && tz && defTz) {
    const timeDifference = defTz.offset - tz.offset;
    const roundedTimeDiff = Number(timeDifference.toFixed(0));

    if (timeDifference < 0) {
      return [
        ...initial.slice(roundedTimeDiff, initial.length),
        ...initial.slice(0, roundedTimeDiff),
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
  const tz = Timezones.find((e) => e.value === timezone);
  const defTz = Timezones.find((e) => e.value === defaultTz);
  let timeDifference = 0;
  if (defTz && tz) {
    timeDifference = defTz.offset - tz.offset;
  }

  return {
    timezone: isPrimary ? defTz : tz,
    difference: isPrimary ? 0 : timeDifference,
  };
};
