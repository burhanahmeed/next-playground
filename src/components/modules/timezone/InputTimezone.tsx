import { Select } from 'antd';
import timezone from '@/components/modules/timezone/data.json';

const { Option } = Select;

interface ITimezone {
  value: string;
  abbr: string;
  offset: number;
  isdst: boolean;
  text: string;
  utc: string[];
}

interface IProps {
  onChange: Function;
}

export default function InputTimezone({ onChange }: IProps) {
  const handleChange = (val: string) => {
    onChange(val);
  };

  return (
    <Select
      className="w-full"
      showSearch
      placeholder="Select timezone"
      optionFilterProp="children"
      filterOption={(input, option) =>
        (option!.children as unknown as string)
          .toLowerCase()
          .includes(input.toLowerCase())
      }
      onChange={handleChange}
    >
      {timezone.map((e: ITimezone, i: number) => (
        <Option key={i} value={e.value}>
          {e.text}
        </Option>
      ))}
    </Select>
  );
}
