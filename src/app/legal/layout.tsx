import React from 'react';

interface UpdatesLayoutProps {
  children: React.ReactNode;
}

const UpdatesLayout = ({ children }: UpdatesLayoutProps) => {
  return (
    <main>
      <div className={'container mx-auto'}>
        {children}
      </div>
    </main>
  );
};

export default UpdatesLayout;
