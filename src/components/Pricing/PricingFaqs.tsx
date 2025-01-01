import { FAQItem, FAQList } from '../FAQ';
import { FAQs } from '../../faqs';

export function PricingFaqs() {
  return (
    <div className="py-20 text-white bg-[#01082a]">
      <div className={'container'}>
        <div className="flex flex-col md:flex-row w-full flex-1 gap-10">
          <div
            className={
              'md:w-[30%] pt-4 text-white text-3xl md:text-4xl font-bold top-1 text-white/90'
            }
          >
            Frequently asked questions
          </div>

          <div className={'flex-1'}>
            <FAQList>
              {FAQs.map((FAQ, key) => (
                <FAQItem key={key} title={FAQ.title}>
                  {FAQ.content}
                </FAQItem>
              ))}
            </FAQList>
          </div>
        </div>
      </div>
    </div>
  );
}
