import Link from 'next/link';

import Container from '@/components/ui/Container';

const MainHeader = () => {
  return (
    <header className="fixed z-40 flex h-16 w-full items-center justify-center bg-stone-800 shadow-md">
      <Container>
        <div className="mx-auto flex h-full w-full items-center justify-between px-4 text-white">
          <Link href="/">Next Playground</Link>
          <a
            href="https://github.com/burhanahmeed/next-playground"
            className="flex items-center space-x-1 text-white"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://icon-library.com/images/github-icon-white/github-icon-white-5.jpg"
              alt="github logo"
              width="25"
            />
            <span>Source on Github</span>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default MainHeader;
