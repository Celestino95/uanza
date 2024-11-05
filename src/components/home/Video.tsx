import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export const Video = () => {
  const { t } = useTranslation('home');

  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-violet-700">
          {t('Destaques')}
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl"></h2>
        <div className="grid w-full max-w-[1150px] gap-3 md:grid-cols-4">
          <Link href="/view_full_video" className="col-span-2">
            <video controls className="w-full h-auto" controlsList="nodownload">
              <source src="/uanza_post/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
          <Link href="/" className="row-span-2">
            <video controls className="w-full h-auto">
              <source src="/videos/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
          <Link href="/" className="row-span-2">
            <video controls className="w-full h-auto">
              <source src="/videos/video3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
          <Link href="/" className="col-span-2">
            <video controls className="w-full h-auto">
              <source src="/videos/video4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </div>
      </div>
    </div>
  );
};
