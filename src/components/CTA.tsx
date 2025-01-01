import { AppUrl } from '@/constants';
import React from 'react';

export function CTASection() {
  return (
    <section className="py-[90px] md:py-[100px]">
      <div className={'container mx-auto'}>
        <h1 className="max-w-800 font-extrabold mx-auto text-center text-[28px] leading-tight md:text-[35px] lg:text-[40px] lg:max-w-[100%] text-darkblue-800">
          {`Get in touch and unlock your 14-day FREE trial.`}
        </h1>
        <h1 className="max-w-800 font-extrabold mx-auto text-center text-[28px] leading-tight md:text-[35px] lg:text-[40px] lg:max-w-[100%] text-darkblue-800">
          {`Try by yourself what Utrack can do for your business.`}
        </h1>
      </div>
    </section>
  );
}