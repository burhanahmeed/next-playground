import type { ReactNode } from 'react';
import Header from '@/components/ui/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="flex min-h-screen w-full flex-col bg-gray-100">
    <Header />
    <section className="flex flex-1 flex-col py-16">{props.children}</section>
  </main>
);

export { Main };
