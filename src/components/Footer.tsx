import React from 'react';
import Link from 'next/link';
import UtrackAlt from '../icons/UtrackAlt';

/**
 * Social media links widget.
 */
function SocialWidget() {
  return (
    <div className="grow mb-[40px] md:mb-[60px]">
      <h2 className="text-white/70 font-medium text-lg leading-6 tracking-tighter mb-[22px] mt-[2px]">
        Socials
      </h2>
      <ul className="footer__widget-list">
        <li className={'mb-2'}>
          <a
            target="_blank"
            href="https://discord.gg/c8nPBJafeb"
            className={'hover:text-white transition-colors'}
          >
            Discord
          </a>
        </li>
        <li className={'mb-2'}>
          <a
            target="_blank"
            href="https://twitter.com/getutrack"
            className={'hover:text-white transition-colors'}
          >
            Twitter
          </a>
        </li>
        {/*<li className={'mb-2'}>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    href="https://medium.com/getutrack"*/}
        {/*    className={'hover:text-white transition-colors'}*/}
        {/*  >*/}
        {/*    Medium*/}
        {/*  </a>*/}
        {/*</li>*/}
        <li className={'mb-2'}>
          <a
            target="_blank"
            href="https://medium.com/linkedin"
            className={'hover:text-white transition-colors'}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

function CompanyWidget() {
  return (
    <div className="grow mb-[40px] md:mb-[60px]">
      <h2 className="text-white/70text-opacity-75 font-medium text-lg leading-6 tracking-tighter mb-[22px] mt-[2px]">
        Legal
      </h2>
      <ul className="footer__widget-list">
        <li className={'mb-2'}>
          <Link
            href={'/legal/terms-of-use'}
            className={'hover:text-white transition-colors'}
          >
            Terms & conditions
          </Link>
        </li>
        <li className={'mb-2'}>
          <Link
            href={'/legal/privacy-policy'}
            className={'hover:text-white transition-colors'}
          >
            Privacy policy
          </Link>
        </li>
        {/*<li className={'mb-2'}>*/}
        {/*  <a*/}
        {/*    target="_blank"*/}
        {/*    className={'hover:text-white transition-colors'}*/}
        {/*    href="https://discord.gg/c8nPBJafeb"*/}
        {/*  >*/}
        {/*    Contact Us*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}

function PagesWidget() {
  return (
    <div className="grow mb-[40px] md:mb-[60px]">
      <h2 className="text-white/70 font-medium text-lg leading-6 tracking-tighter mb-[22px] mt-[2px]">
        Content
      </h2>
      <ul>
        <li className={'mb-3'}>
          <Link className={'hover:text-white transition-colors'} href={'/'}>
            Home
          </Link>
        </li>

        <li className={'mb-3'}>
          <a
            target="_blank"
            href="https://docs.getutrack.io"
            className={'hover:text-white transition-colors'}
          >
            Documentation
          </a>
        </li>

        <li className={'mb-3'}>
          <a
            target={'_blank'}
            href={'https://community.getutrack.io/'}
            className={'hover:text-white transition-colors'}
          >
            Community
          </a>
        </li>

        <li className={'mb-3'}>
          <a
            target="_blank"
            href="https://docs.getutrack.io/roadmap"
            className={'hover:text-white transition-colors'}
          >
            Product Roadmap
          </a>
        </li>

        <li className={'mb-3'}>
          {/*<a*/}
          {/*  target={'_blank'}*/}
          {/*  href={'https://utrack.statuspage.io/'}*/}
          {/*  className={'hover:text-white transition-colors'}*/}
          {/*>*/}
          {/*  Status*/}
          {/*</a>*/}
        </li>

        <li>
          {/*<a*/}
          {/*  href={'/oss-friends'}*/}
          {/*  className={'hover:text-white transition-colors'}*/}
          {/*>*/}
          {/*  OSS Friends*/}
          {/*</a>*/}
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#00a99d] text-white text-opacity-65 pt-[50px] text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-2 md:gap-20">
          <div className="w-full lg:w-[25%]">
            <div className="mb-[40px] md:mb-[60px]">
              {/*<div className="mt-1 mb-6">*/}
              {/*  /!*<Link href="/" aria-label={'Utrack'}>*!/*/}
              {/*  /!*  <UtrackAlt fill="#fff" width={180} className={'inline'} />*!/*/}
              {/*  /!*</Link>*!/*/}
              {/*</div>*/}
              <div className="footer-text mb-0 mt-3">
                <h2 className="text-white/70 font-medium text-lg leading-6 tracking-tighter mb-[22px] mt-[2px]">
                  Get in touch
                </h2>

              </div>
              <div className="footer-text mb-0 mt-3">
                <p>
                  📞 00971 50 205 57 33
                </p>
              </div>
              <div className="footer-text mb-0 mt-3">
                <p>
                  📨 developers@digi-trans.org
                </p>
              </div>

            </div>
          </div>

          <nav className="ml-auto w-full lg:w-[60%]">
            <div className="flex flex-col md:flex-row flex-grow grow">
              <PagesWidget/>
              <CompanyWidget/>
              <SocialWidget/>
            </div>
          </nav>
        </div>
      </div>
      <div className="text-md text-white/50 tracking-tight text-center ">
        <div className="container mx-auto px-4.5">
          <div className="border-t border-white/20 pt-7 pb-7 ">
            <p>Copyright © 2025 — Utrack, a Product of Digitrans, Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
