import React from 'react';
import clsx from 'classnames';

export interface PricingPlanProps {
  featured?: boolean;
  children: React.ReactNode;
}

/**
 * Displays a pricing plan.
 * @param featured - Whether the plan is featured.
 * @param children - The content of the plan.
 */
export const PricingPlan = ({ featured, children }: PricingPlanProps) => {
  return (
    <div
      className={clsx(
        'border-[1px] border-[#C5CBD3] p-4 rounded-md relative pb-8',
        {
          'bg-[#f5f6f8] border-[#f5f6f8] pt-12': featured,
          'pt-6 md:pt-12': !featured
        }
      )}
    >
      <>{children}</>
    </div>
  );
};

interface PricingFeaturedProps {
  children: React.ReactNode;
}

/**
 * Displays a featured section within a pricing plan.
 * @param children - The content of the featured section.
 */
const Featured: React.FC<PricingFeaturedProps> = ({
  children,
}: PricingFeaturedProps) => {
  return (
    <div className="uppercase rounded-t-md h-[30px] leading-[30px] text-center text-white absolute top-0 left-0 right-0 bg-[#a3acba] text-sm tracking-wide font-medium">
      {children}
    </div>
  );
};
Featured.displayName = 'PricingPlan/Featured';
PricingPlan.Featured = Featured;

export interface PricingHeaderProps {
  label: string;
  description: string;
}

/**
 * Displays the header of a pricing plan.
 * @param label - The label of the plan.
 * @param description - The description of the plan.
 */
const Header: React.FC<PricingHeaderProps> = ({
  label,
  description,
}: PricingHeaderProps) => {
  return (
    <div>
      <h4 className={'font-bold text-lg mb-2'}>{label}</h4>
      {description && (
        <p className={'text-sm mb-3 text-[#404854]'}>{description}</p>
      )}
    </div>
  );
};
Header.displayName = 'PricingPlan/Header';
PricingPlan.Header = Header;

export interface PricingPriceProps {
  price: string;
  subPrice: string;
}

/**
 * Displays the price of a pricing plan.
 * @param price - The main price of the plan.
 * @param subPrice - The sub-price of the plan.
 */
const Price = ({ price, subPrice }: PricingPriceProps) => {
  return (
    <div className={'mb-3 flex flex-col gap-0'}>
      <h4 className={'font-semibold text-lg'}>{price}</h4>
      <span className={'text-sm text-[#5F6B7C]'}>{subPrice}</span>
    </div>
  );
};
Price.displayName = 'PricingPlan/Price';
PricingPlan.Price = Price;

export interface PricingBuyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  featured?: boolean;
  children: React.ReactNode;
}

/**
 * Displays a buy button within a pricing plan.
 * @param children - The content of the button.
 * @param props - Additional button props.
 */
const BuyButton: React.FC<PricingBuyButtonProps> = ({
  featured,
  children,
  ...props
}: PricingBuyButtonProps) => {
  return (
    <button
      className={clsx(
        'min-h-[36px] rounded w-[100%]  text-sm border ',
        {
          ['border-0 bg-[#0052cc] text-white']: featured,
          ['text-[#0052cc] border-[#0052cc] font-bold bg-transparent ']: !featured,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};
BuyButton.displayName = 'PricingPlan/BuyButton';
PricingPlan.BuyButton = BuyButton;

export interface PricingFeaturesProps {
  children: React.ReactNode;
}

/**
 * Displays a list of features within a pricing plan.
 * @param children - The list of features.
 */
const Features = ({ children }: PricingFeaturesProps) => {
  return <div className={'flex flex-col gap-2.5 mt-5'}>{children}</div>;
};
Features.displayName = 'PricingPlan/Features';
PricingPlan.Features = Features;

export interface PricingFeatureLineProps {
  children: React.ReactNode;
  hintContent?: string;
  hintLabel?: string;
}

/**
 * Displays a single feature line within a list of features.
 * @param children - The content of the feature line.
 */
const FeatureLine = ({
  children,
  hintContent,
  hintLabel,
}: PricingFeatureLineProps) => {
  return (
    <div className="text-md md:text-sm items-center flex gap-2 text-black">
      <CheckCircled />
      <div className={''}>{children}</div>
    </div>
  );
};
FeatureLine.displayName = 'PricingPlan/FeatureLine';
PricingPlan.FeatureLine = FeatureLine;

function CheckCircled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
      <g
        fill="#3FA40D"
        fill-rule="evenodd"
        clip-path="url(#a)"
        clip-rule="evenodd"
      >
        <path d="M9.21 3.915a.562.562 0 0 1 0 .795L5.647 8.272a.563.563 0 0 1-.795 0L2.978 6.397a.562.562 0 0 1 .796-.795L5.25 7.08l3.165-3.165a.563.563 0 0 1 .795 0Z"></path>
        <path d="M6 10.875A4.875 4.875 0 0 0 10.875 6 4.87 4.87 0 0 0 6 1.125a4.875 4.875 0 1 0 0 9.75ZM6 12a6 6 0 0 0 6-6c0-3.314-2.678-6-6-6a6 6 0 0 0 0 12Z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h12v12H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
