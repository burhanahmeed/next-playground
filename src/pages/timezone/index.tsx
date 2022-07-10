// UI
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';
// import Card from '@/components/ui/Card';
import InputTimezone from '@/components/modules/timezone/InputTimezone';

const Timezone = () => {
  const handleChange = (val: string) => {
    console.log(val);
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
          <div className="space-y-2 rounded-lg bg-stone-100 p-4">
            <h4 className="font-semibold">Choose your primary timezone</h4>
            <InputTimezone onChange={handleChange} />
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Timezone;
