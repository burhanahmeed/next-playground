import { Select } from 'antd';
import timezone from '@/components/modules/timezone/data.json';

const { Option } = Select;

export interface ITimezone {
  country_code: string;
  offset: string;
  dst: string;
  text: string;
  id: string;
}

interface IProps {
  onChange: Function;
  value?: string;
}

export default function InputTimezone({ onChange, value }: IProps) {
  const handleChange = (val: string) => {
    onChange(val);
  };

  return (
    <Select
      className="w-full"
      showSearch
      value={value}
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
        <Option key={i} value={e.id}>
          {e.text}
        </Option>
      ))}
    </Select>
  );
}
