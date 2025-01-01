import clsx from 'classnames';

interface AnnualDiscountTagProps {
  children: React.ReactNode;
  className?: string;
}

export function AnnualDiscountTag({
  children,
  className,
}: AnnualDiscountTagProps) {
  return (
    <div
      className={clsx(
        'items-center inline-flex rounded md min-h-[20px] min-w-[20px] px-[6px] py-[2px] text-sm text-black bg-[#eff0f2] text-sm',
        className
      )}
    >
      {children}
    </div>
  );
}
