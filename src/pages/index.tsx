import { useRouter } from 'next/router';

// UI
import { Button } from 'antd';
import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';
import Container from '@/components/ui/Container';
import MainHeader from '@/components/ui/MainHeader';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Playground"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      header={<MainHeader />}
    >
      <a href="https://github.com/ixartz/Next-js-Boilerplate">
        <img
          about="1234"
          src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
          alt="Nextjs starter banner"
        />
      </a>
      <Container>
        <h1 className="text-2xl font-bold">
          Boilerplate code for your Nextjs project with Tailwind CSS
        </h1>
        <Button type="primary">This is Ant design button</Button>
      </Container>
    </Main>
  );
};

export default Index;
