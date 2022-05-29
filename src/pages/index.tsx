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
        <div className="p-16">
          {/* <div className="cursor-pointer rounded-lg bg-gray-700 bg-gradient-to-r p-4 transition duration-300 ease-in-out hover:scale-105 hover:from-transparent hover:to-purple-900">
            <h3 className="text-white">Lorem ipsum</h3>
          </div> */}
          <div className="h-80 w-full rounded-lg border border-dashed border-white bg-stone-700 p-8">
            <div className="flex h-full flex-col items-center justify-center text-2xl text-white">
              <p>
                <img
                  src="https://www.svgrepo.com/show/271821/dizzy.svg"
                  alt="Empty Inbox"
                  title="Empty Inbox"
                  width="120"
                  height="120"
                />
              </p>
              <p>Oops, there is no project yet...</p>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Index;
