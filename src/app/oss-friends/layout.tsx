import { Metadata } from 'next';
import './page.css';

interface OssFriendsLayoutProps {
  children: React.ReactNode;
}

export default function OssFriendsLayout({ children }: OssFriendsLayoutProps) {
  return (
    <div className={'container py-20 mb-20'}>
      <div className={'mb-12 text-center max-w-[900px] mx-auto'}>
        <h1
          className={
            'text-4xl md:text-5xl tracking-tighter font-extrabold mb-2 md:mb-3 text-[#000b42]'
          }
        >
          Our Open-Source Friends{' '}
          <span className="text-[#f43f5f] animate-heartbeat ml-2 h-[30px] md:h-[40px] inline-block align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className={'h-[30px] md:h-[40px]'}
            >
              <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z"></path>
            </svg>
          </span>
        </h1>

        <p className={'text-md md:text-lg text-[#404854]'}>
          In Utrack, we are proud to partner with a diverse group of
          partners to promote open-source software and uphold the values of
          collaboration, transparency, and community.
        </p>
      </div>

      <div>{children}</div>
    </div>
  );
}
