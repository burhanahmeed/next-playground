import type moment from 'moment';
import momentTz from 'moment-timezone';
import { TimePicker, Tooltip } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import InputTimezone from '@/components/modules/timezone/InputTimezone';
import { generateHourArray } from '@/components/modules/timezone/helpers';

interface IProps {
  isPrimary?: boolean;
  changeTimezone: Function;
  onRemove?: Function;
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
  onRemove,
}: IProps) {
  const handleTimezoneChange = (val: string) => changeTimezone(val);

  let child = (
    <>
      <div className="flex justify-between">
        <h4 className="font-semibold">
          Choose {isPrimary ? 'your primary' : ''} timezone
        </h4>
        {!isPrimary && (
          <div className="cursor-pointer">
            <Tooltip placement="top" title="Remove Block">
              <CloseCircleOutlined
                style={{ fontSize: '16px', color: 'red' }}
                onClick={() => onRemove && onRemove()}
              />
            </Tooltip>
          </div>
        )}
      </div>
      <InputTimezone onChange={handleTimezoneChange} />
    </>
  );

  const timezone = isPrimary ? data.default : data.tz;

  const calculateHour = (hour: any, def: string, tz: string) => {
    const defOffsite = momentTz.tz(def).utcOffset() * 60000;
    const tzOffsite = momentTz.tz(tz).utcOffset() * 60000;
    const defaultTimeMs =
      new Date(momentTz(hour).format('LLLL')).getTime() - defOffsite;

    return momentTz(defaultTimeMs + tzOffsite).format('HH:mm');
  };

  if (timezone) {
    const hours = generateHourArray(
      data.default || '',
      data.tz || '',
      isPrimary
    );

    child = (
      <div className="space-y-2">
        <div className="flex justify-between">
          <div className="flex space-x-2">
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
              <div className="text-lg">
                {calculateHour(
                  data.hour,
                  data.default as string,
                  data.tz as string
                )}
              </div>
            )}
          </div>
          {!isPrimary && (
            <div className="cursor-pointer">
              <Tooltip placement="top" title="Remove Block">
                <CloseCircleOutlined
                  style={{ fontSize: '16px', color: 'red' }}
                  onClick={() => onRemove && onRemove()}
                />
              </Tooltip>
            </div>
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
