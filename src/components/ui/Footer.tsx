import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-stone-800 py-16 text-white">
      <Container>
        <div className="p-6 text-center text-xs">
          <p>&copy; 2022 Burhanuddin Ahmad</p>
          <div className="mt-2 flex justify-center space-x-2">
            <a
              href="https://twitter.com/BurhannAhm"
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
                <path d="M22 4c0 0-0.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2 0.1 4.4-0.6 6-2C3 15.5 0.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4 c-0.9-4.2 4-6.6 7-3.8C20.1 5.2 22 4 22 4z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/burhanahmeed"
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
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
