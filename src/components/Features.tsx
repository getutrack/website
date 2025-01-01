import ChartSVG from '../icons/Chart';
import CloudSVG from '../icons/Cloud';
import InventorySVG from '../icons/Inventory';
import MoneySVG from '../icons/Money';
import PaymentSVG from '../icons/Payment';
import ReceiptSVG from '../icons/Receipt';
import HelpSVG from '../icons/Help';
import ShoppingBagSVG from '../icons/ShoppingBag';
import PeopleSVG from '../icons/People';

interface FeatureProps {
  icon?: React.ReactNode;
  title: string;
  desc: string | React.ReactNode;
}

/**
 * Feature component.
 */
function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div data-slide-to="0">
      {icon && <div className={'mb-[20px]'}>{icon}</div>}
      <h1 className="mb-4 font-semibold opacity-90 text-[20px]">{title}</h1>
      <p className={'opacity-60'}>{desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <section
      id={'features'}
      className={
        'bg-[#06091d] pt-[420px] pb-[40px] md:pb-[60px] text-white py-420 overflow-hidden'
      }
    >
      <div className="opacity-70 relative">
        <img
          className="absolute -top-[900px] left-[1000px] scale-[1.8] z-[-1]"
          src="./blur-2.jpeg"
          alt=""
        />
      </div>

      <div className="container mx-auto px-4 z-1 relative">
        <h2 className="text-white font-extrabold text-[30px] leading-tight mb-[30px] md:text-[40px] md:mb-[60px]">
          Discover the features you need
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] md:gap-[45px]">
          <Feature
            icon={<PaymentSVG fill={'#fff'} />}
            title={'Issue Types + properties'}
            desc={
              'Shape issues to the nature of your work. Customize with icons, colors, and trackable props.'
            }
          />
          <Feature
            icon={<ChartSVG fill={'#fff'} />}
            title={'Time Tracking'}
            desc={
              'Log time by any member in issues and bulk-download timesheets from one screen.'
            }
          />
          <Feature
            icon={<InventorySVG fill={'#fff'} />}
            title={'Bulk Ops'}
            desc={
              'Edit issue properties in several issues at once.'
            }
          />
          <Feature
            icon={<ReceiptSVG fill={'#fff'} />}
            title={'Dependencies + relations'}
            desc={
              'Drag to edit dates for dependent issues on Gantt. Track dependencies on any layout.'
            }
          />
          <Feature
            icon={<HelpSVG fill={'#fff'} />}
            title={'Activity + Comments'}
            desc={
              'Discuss issues right inside Plane. Track who changed what in any issue.'
            }
          />

          <div className="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<ShoppingBagSVG fill={'#fff'} />}
              title={'Issue transfer'}
              desc={
                'Transfer issues from one project to another in a click.'
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
