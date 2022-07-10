import InputTimezone from '@/components/modules/timezone/InputTimezone';

interface IProps {
  isPrimary?: boolean;
}

export default function TimezoneCard({ isPrimary = false }: IProps) {
  const handleTimezoneChange = (val: string) => {
    console.log(val);
  };

  return (
    <div className="space-y-2 rounded-lg bg-stone-100 p-4">
      <h4 className="font-semibold">
        Choose {isPrimary ? 'your primary' : ''} timezone
      </h4>
      <InputTimezone onChange={handleTimezoneChange} />
    </div>
  );
}
