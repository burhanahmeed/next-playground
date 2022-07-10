// UI
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';
// import Card from '@/components/ui/Card';
import Card from '@/components/modules/timezone/TimezoneCard';

const Timezone = () => {
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
          <Card isPrimary />
          {[1, 2, 3].map((e) => (
            <Card key={e} />
          ))}
        </div>
      </Container>
    </Main>
  );
};

export default Timezone;
