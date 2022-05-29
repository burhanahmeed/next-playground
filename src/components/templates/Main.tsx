import type { ReactNode } from 'react';

interface IMainProps {
  meta?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

const Main = (props: IMainProps) => (
  <main className="flex min-h-screen w-full flex-col bg-stone-800">
    {props.meta}
    {props.header}
    <section className="flex flex-1 flex-col py-16">{props.children}</section>
    {props.footer}
  </main>
);

export { Main };
