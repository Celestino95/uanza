import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import promobanner1 from '../../../public/image/animais/Cabra ao ar livre perto do monumento.jpg';
import promobanner2 from '../../../public/image/arquitetura/27 na parede.jpg';


export const Album = () => {
  const { t } = useTranslation('home');

  return (
    <div className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-[#9DD4F0]">
          {t('Mais relacionadas')}
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
          
        </h2>
        <div className="grid w-full max-w-[1150px] gap-3 md:grid-cols-4">
          <Link href="" className="col-span-2">
            <Image src={promobanner1} alt="promo banner 1 image" />
          </Link>
          <Link href="" className="row-span-2">
            <Image src={promobanner2} alt="promo banner 2 image" />
          </Link>
        </div>
      </div>
    </div>
  );
};
