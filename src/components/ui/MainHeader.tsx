import Link from 'next/link';

import Container from '@/components/ui/Container';

const MainHeader = () => {
  return (
    <header className="fixed z-40 flex h-16 w-full items-center justify-center border-b border-stone-900 bg-stone-800 shadow-md">
      <Container>
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 text-white">
          <div>
            <h3 className="text-white">
              <Link href="/">PLYGRN</Link>
            </h3>
            <p className="text-xs">.Brhn.&apos;s Next.js Playground</p>
          </div>
          <a
            href="https://github.com/burhanahmeed/next-playground"
            className="flex items-center space-x-1 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 hover:text-neutral-300"
            >
              <path d="M15 22V18C15.14 16.75 14.78 15.49 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8 3.5C6 2 5 2 5 2C4.7 3.15 4.7 4.35 5 5.5C4.27 6.52 3.92 7.75 4 9C4 12.5 7 14.5 10 14.5C9.61 14.99 9.32 15.55 9.15 16.15C8.98 16.75 8.93 17.38 9 18V22"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>Source on Github</span>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
