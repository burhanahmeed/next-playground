import type moment from 'moment';
import { TimePicker } from 'antd';
import InputTimezone from '@/components/modules/timezone/InputTimezone';
import { generateHourArray } from '@/components/modules/timezone/helpers';

interface IProps {
  isPrimary?: boolean;
  changeTimezone: Function;
  data: {
    tz?: string;
    default?: string;
    hour: moment.Moment;
    setHour: Function;
  };
}

export default function TimezoneCard({
  isPrimary = false,
  changeTimezone,
  data,
}: IProps) {
  const handleTimezoneChange = (val: string) => changeTimezone(val);

  let child = (
    <>
      <h4 className="font-semibold">
        Choose {isPrimary ? 'your primary' : ''} timezone
      </h4>
      <InputTimezone onChange={handleTimezoneChange} />
    </>
  );

  const timezone = isPrimary ? data.default : data.tz;

  if (timezone) {
    const hours = generateHourArray(
      data.default || '',
      data.tz || '',
      isPrimary
    );

    child = (
      <div className="space-y-2">
        <div className="flex space-x-4">
          <div style={{ width: '300px' }}>
            <InputTimezone value={timezone} onChange={handleTimezoneChange} />
          </div>
          {isPrimary ? (
            <TimePicker
              value={data.hour}
              format={'HH:mm'}
              onChange={(val) => val && data.setHour(val)}
            />
          ) : (
            <div className="text-lg">{data.hour.format('HH:mm')}</div>
          )}
        </div>
        <div className="flex justify-center">
          {hours.map((e, i) => {
            let css = 'border-r border-sky-700 p-2 text-center';
            if (e.hour > 6 && e.hour < 18) {
              css += ' bg-sky-300 text-sky-700';
            } else {
              css += ' bg-sky-600 text-white';
            }

            if (e.hour === 23) {
              css += ' mr-0.5 rounded-r';
            }

            if (e.hour === 0) {
              css += ' rounded-l';
            }

            return (
              <>
                <div className={css} style={{ width: '35px' }} key={i}>
                  {e.hour}
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }

  const cardCss = `space-y-2 rounded-lg bg-stone-100 p-4 ${
    isPrimary && 'border-4 border-blue-500'
  }`;

  return <div className={cardCss}>{child}</div>;
}
