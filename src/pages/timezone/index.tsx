import moment from 'moment';
import { Button } from 'antd';
// UI
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';
// import Card from '@/components/ui/Card';
import Card from '@/components/modules/timezone/TimezoneCard';
import { useState } from 'react';

interface ITimezoneObject {
  tz: string;
}

const Timezone = () => {
  const [hour, setHour] = useState(moment(new Date(), 'HH:mm'));
  const [defaultTz, setDefaultTz] = useState('');
  const [timezone, setTimezone] = useState<ITimezoneObject[]>([]);

  const changeTimezone = (value: string, index: number) => {
    const tz: any = [...timezone];
    if (tz[index]) {
      tz[index].tz = value;
    }

    setTimezone(tz);
  };

  const addTimezone = () => {
    const tz = [...timezone];
    tz.push({ tz: '' });

    setTimezone(tz);
  };

  const removeTimezone = (index: number) => {
    const tz = [...timezone];
    tz.splice(index, 1);

    setTimezone(tz);
  };

  return (
    <Main
      meta={
        <Meta
          title="Brhn.'s Next.js Playground"
          description="Welcome to Brhn.'s playground. I made some fun stuffs using Next or ReactJS here."
        />
      }
      header={<MainHeader />}
      footer={<Footer />}
    >
      <Container>
        <div className="space-y-4 p-16">
          <h1 className="text-white">⦾ Timezone</h1>
          <Card
            isPrimary
            changeTimezone={setDefaultTz}
            data={{ default: defaultTz, hour, setHour }}
          />
          {timezone.map((e, i) => (
            <Card
              key={i}
              data={{ default: defaultTz, hour, setHour, ...e }}
              changeTimezone={(val: string) => changeTimezone(val, i)}
              onRemove={() => removeTimezone(i)}
            />
          ))}
          <div>
            <Button onClick={addTimezone} type="primary">
              Add Timezone
            </Button>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Timezone;
