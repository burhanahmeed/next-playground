import InputTimezone from '@/components/modules/timezone/InputTimezone';

interface IProps {
  isPrimary?: boolean;
}

export default function TimezoneCard({ isPrimary = false }: IProps) {
  const handleTimezoneChange = (val: string) => {
    console.log(val);
  };

  let child = (
    <>
      <h4 className="font-semibold">
        Choose {isPrimary ? 'your primary' : ''} timezone
      </h4>
      <InputTimezone onChange={handleTimezoneChange} />
    </>
  );

  if (true) {
    child = (
      <div className="space-y-2">
        <h5>(UTC-04:00) Georgetown, La Paz, Manaus, San Juan</h5>
        <div className="flex justify-center">
          {Array.from(Array(24).keys()).map((e) => {
            let css = 'border-r border-sky-700 p-2 text-center';
            if (e > 6 && e < 18) {
              css += ' bg-sky-300 text-sky-700';
            } else {
              css += ' bg-sky-600 text-white';
            }

            return (
              <div className={css} style={{ width: '35px' }} key={e}>
                {e}
              </div>
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
