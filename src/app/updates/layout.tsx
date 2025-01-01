import React from 'react';

interface UpdatesLayoutProps {
  children: React.ReactNode;
}

const UpdatesLayout = ({ children }: UpdatesLayoutProps) => {
  return (
    <main>
      <div className={'container mx-auto'}>
        <div
          className={
            'pt-[5rem] pb-[2rem] md:pb-[2.4rem] md:pt-[6rem] mb-[3rem] border-b-[1px] border-[#E5E8EB]'
          }
        >
          <div className={'lg:ml-[calc(25%+24px)]'}>
            <h1
              className={
                'text-[32px] md:text-[40px] leading-none font-semibold mb-3 tracking-[-0.5px] text-darkblue-700'
              }
            >
              Changelog
            </h1>
            <p className={'mt-1.5 text-[#474e59] text-[15px]'}>
              A changelog of the latest updates for Utrack
            </p>
            <p className="text-[15px] mt-2">
              <a
                href="https://twitter.com/getutrack"
                target="_blank"
                className={'font-medium text-indigo hover:underline'}
              >
                Follow us on Twitter
              </a>
            </p>
          </div>
        </div>

        {children}
      </div>
    </main>
  );
};

export default UpdatesLayout;
