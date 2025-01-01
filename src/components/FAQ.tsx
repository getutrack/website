'use client';
import { useState } from 'react';
import clsx from 'classnames';

interface FAQListProps {
  children: React.ReactNode;
}

export function FAQList({ children }: FAQListProps) {
  return <div>{children}</div>;
}

interface FAQItemProps {
  title: string;
  children: React.ReactNode;
}

export function FAQItem({ title, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBtnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={'border-b-[1px] border-white/20 first:border-t-[1px]'}>
      <div>
        <button
          className={
            'text-inherit text-lg md:text-xl font-extralight leading-5 w-full text-left py-6 flex pr-10 relative'
          }
          onClick={handleBtnClick}
        >
          {title}

          <span
            className={
              'text-white ml-auto absolute right-0 top-[50%] mt-[-8px]'
            }
          >
            {isOpen ? <OpenedIcon /> : <PlusIcon />}
          </span>
        </button>
      </div>

      <div
        className={clsx('pb-6 text-white/80 leading-7', {
          ['block']: isOpen,
          ['hidden']: !isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}

function OpenedIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="currentColor"
        d="M2 8a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 8z"
      ></path>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill="currentColor"
        d="M8.75 2.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
      ></path>
    </svg>
  );
}
