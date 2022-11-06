import Link from 'next/link';
// UI
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';
import Footer from '@/components/ui/Footer';
// import EmptyList from '@/components/ui/EmptyList';
// import { Card } from 'antd';
import Card from '@/components/ui/Card';

const Index = () => {
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
        <div className="p-16">
          <Card>
            <div className="flex items-center justify-between">
              <h3 className="text-white">Timezone Playground</h3>
              <Link href={'/timezone'}>
                <span className="cursor-pointer text-white hover:text-gray-500">
                  {'> Open <'}
                </span>
              </Link>
            </div>
          </Card>
          {/* <EmptyList
            icon={
              <img
                src="https://www.svgrepo.com/show/271821/dizzy.svg"
                alt="Empty Inbox"
                title="Empty Inbox"
                width="120"
                height="120"
              />
            }
            text="Oops, there is no project yet..."
          /> */}
        </div>
      </Container>
    </Main>
  );
};

export default Index;
