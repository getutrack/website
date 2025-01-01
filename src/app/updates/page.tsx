import clsx from 'classnames';
import { getSortedUpdatesData } from '@/lib/updates';
import styles from './page.module.css';

export const metadata = {
  title: 'Updates | Utrack',
  description: 'A changelog of the latest updates',
};

export default async function UpdatesPage() {
  const updates = await getSortedUpdatesData();

  return (
    <div>
      {updates.map((update, index) => (
        <article
          key={index}
          className="flex items-start md:flex-row flex-col gap-6 mb-16 pb-10 overflow-wrap border-b-[1px] border-[#E5E8EB] last:border-b-[0px]"
        >
          <div className="md:sticky md:w-1/4 text-sm md:mt-2.5">
            <span className={'text-[#5f6b7c]'}>{update.formattedDate}</span>
          </div>

          <div className="max-w-[588px]">
            <a href={`/updates/${update.id}`}>
              <h1 className="text-[22px] md:text-2xl font-semibold tracking-[-0.5px] mb-4 md:mb-5 text-darkblue-700">
                {update.title}
              </h1>
            </a>
            <div
              className={clsx('text-[15px] leading-6', styles.content)}
              dangerouslySetInnerHTML={{ __html: update.content }}
            ></div>
          </div>
        </article>
      ))}
    </div>
  );
}
