import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed z-40 flex h-16 w-full items-center justify-center bg-purple-500 shadow-md">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4 sm:max-w-xl">
        <Link href="/">Logizee</Link>
      </div>
    </header>
  );
};

export default Header;
