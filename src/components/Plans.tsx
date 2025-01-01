'use client';
import { useRouter } from 'next/navigation';
import { SubscriptionPlan, SubscriptionPlans } from '@/plans';
import { PricingPlan } from './Pricing/PricingPlan';
import { PricingPeriodSwitch } from './Pricing/PricingPeriodSwitch';
import {
  PricingProvider,
  usePricingContext,
} from './Pricing/PricingPlansProvider';
import { AnnualDiscountTag } from './Pricing/AnnualDiscountTag';
import { AppUrl } from '@/constants';
import { SVGProps } from 'react';

interface PricingPlansPeriodSwitchProps {
  className?: string;
}

function PricingPlansPeriodSwitch({
  className,
}: PricingPlansPeriodSwitchProps) {
  const { setIsAnnually, isAnnually } = usePricingContext();

  const handleCheckoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsAnnually(event.currentTarget.checked);
  };
  return (
    <PricingPeriodSwitch
      value={isAnnually}
      onChange={handleCheckoutChange}
      className={className}
    />
  );
}

export function PricingPlans() {
  return (
    <PricingProvider>
      <div className="text-center mb-[14px]">
        <span className="inline-flex text-sm mr-4 text-[#00824d]">
          <CheckIcon fill="rgb(0, 130, 77)" className="mr-[2px]" /> 14-day free
          trial
        </span>

        <span className="inline-flex text-sm text-[#00824d]">
          <CheckIcon fill="rgb(0, 130, 77)" className="mr-[2px]" /> 24/7 online
          support
        </span>
      </div>
      <div className={'mb-8 text-center'}>
        <PricingPlansPeriodSwitch className="align-middle" />
        <AnnualDiscountTag className={'ml-4 align-middle'}>
          25% off all year
        </AnnualDiscountTag>
      </div>

      <div className={'grid md:grid-cols-4 gap-2.5'}>
        {SubscriptionPlans.map((plan, key) => (
          <Plan plan={plan} key={key} />
        ))}
      </div>
    </PricingProvider>
  );
}

interface SubscriptionPlanProps {
  plan: SubscriptionPlan;
}

function Plan({ plan }: SubscriptionPlanProps) {
  const router = useRouter();
  const { isAnnually } = usePricingContext();

  const handleBuyBtnClick = () => {
    router.push(AppUrl.SignUp);
  };

  return (
    <PricingPlan featured={plan.featured}>
      {plan.featured && <PricingPlan.Featured>Best Seller</PricingPlan.Featured>}
      <PricingPlan.Header label={plan.name} description={plan.description} />
      {!isAnnually ? (
        <PricingPlan.Price
          price={plan.monthlyPrice}
          subPrice={plan.monthlyPriceLabel}
        />
      ) : (
        <PricingPlan.Price
          price={plan.annuallyPrice}
          subPrice={plan.annuallyPriceLabel}
        />
      )}


      <PricingPlan.BuyButton
        featured={plan.featured}
        onClick={handleBuyBtnClick}
      >
        Get in touch
      </PricingPlan.BuyButton>


        <PricingPlan.Features>
        {plan.features.map((feature, featureIndex) => (
          <PricingPlan.FeatureLine key={featureIndex}>
            {feature.text}
          </PricingPlan.FeatureLine>
        ))}
      </PricingPlan.Features>
    </PricingPlan>
  );
}

interface CheckIconProps extends SVGProps<SVGSVGElement> {}
function CheckIcon({ ...props }: CheckIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="18px"
      width="18px"
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M378-225 133-470l66-66 179 180 382-382 66 65-448 448Z"></path>
    </svg>
  );
}
