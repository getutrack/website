import { EventHandler } from 'react';
import clsx from 'classnames';

interface PricingPeriodSwitchProps {
  value?: boolean;
  className?: string;
  onChange?: EventHandler<any>;
}

export function PricingPeriodSwitch({
  value,
  className,
  onChange,
}: PricingPeriodSwitchProps) {
  return (
    <label
      className={clsx('inline-flex items-center cursor-pointer', className)}
    >
      <span className="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Monthly
      </span>
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChange}
        checked={value}
      />
      <div className="relative w-11 h-6 bg-[#dee0e4] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#a3acba]"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Annually
      </span>
    </label>
  );
}
