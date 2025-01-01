import clsx from 'classnames';
import { getUpdateData } from '@/lib/updates';
import styles from '../page.module.css';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = params;
  const postData = await getUpdateData(id);

  return {
    title: `${postData.title} | Utrack`,
  };
}

export default async function UpdatesPage({ params }: PageProps) {
  const { id } = params;
  const update = await getUpdateData(id);

  return (
    <div>
      <article className="flex items-start md:flex-row flex-col gap-6 mb-16 pb-10 overflow-wrap border-b-[1px] border-[#E5E8EB] last:border-b-[0px]">
        <div className="md:sticky md:w-1/4 text-sm md:mt-2.5 flex flex-col">
          <span className={'text-[#5f6b7c]'}>{update.formattedDate}</span>

          <p className={'mt-4'}>
            <Link
              href={'/updates'}
              className={'text-[#404040] hover:underline hover:text-indigo'}
            >
              ← Back to Updates
            </Link>
          </p>
        </div>

        <div className="max-w-[588px]">
          <h1 className="text-[22px] md:text-2xl font-semibold tracking-[-0.5px] mb-4 md:mb-5 text-darkblue-700">
            {update.title}
          </h1>
          <div
            className={clsx('text-[15px] leading-6', styles.content)}
            dangerouslySetInnerHTML={{ __html: update.contentHtml }}
          ></div>
        </div>
      </article>
    </div>
  );
}
