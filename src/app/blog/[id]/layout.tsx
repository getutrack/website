interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function PostLayout({ children }: BlogLayoutProps) {
  return (
    <div
      className={
        'space-y-8 pb-16 pt-10 md:pt-16 mx-auto w-full max-w-[750px] px-4'
      }
    >
      {children}
    </div>
  );
}
