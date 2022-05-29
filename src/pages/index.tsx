// UI
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Playground"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      header={<MainHeader />}
      footer={<Footer />}
    >
      <Container>
        <div className="py-16">
          <div className="mx-6 cursor-pointer rounded-lg bg-gray-700 bg-gradient-to-r p-4 transition duration-300 ease-in-out hover:scale-105 hover:from-transparent hover:to-purple-900">
            <h3 className="text-white">Lorem ipsum</h3>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Index;
