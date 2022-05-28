import { Button } from 'antd';
import { useRouter } from 'next/router';

import { Main } from '@/components/templates/Main';
import { Meta } from '@/components/utils/Meta';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="mx-auto w-full space-y-3 sm:max-w-xl">
        <a href="https://github.com/ixartz/Next-js-Boilerplate">
          <img
            about="1234"
            src={`${router.basePath}/assets/images/nextjs-starter-banner.png`}
            alt="Nextjs starter banner"
          />
        </a>
        <h1 className="text-2xl font-bold">
          Boilerplate code for your Nextjs project with Tailwind CSS
        </h1>
        <Button type="primary">This is Ant design button</Button>
      </div>
    </Main>
  );
};

export default Index;
