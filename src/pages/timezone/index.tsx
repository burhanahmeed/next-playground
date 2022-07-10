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
  tz: string,
}

const Timezone = () => {
  const [defaultTz, setDefaultTz] = useState('');
  const [timezone, setTimezone] = useState<ITimezoneObject[]>([]);

  const changeTimezone = (value: string, index: number) => {
    const tz = [ ...timezone ];
    if (tz[index]) {
      tz[index].tz = value;
    }

    setTimezone(tz);
  }

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
          <Card isPrimary changeTimezone={setDefaultTz} data={{ default: defaultTz }} />
          {timezone.map((e, i) => (
            <Card key={i} data={{ default: defaultTz, ...e }} changeTimezone={(val: string) => changeTimezone(val, i)} />
          ))}
          <div>
            <Button type="primary">Add Timezone</Button>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Timezone;
