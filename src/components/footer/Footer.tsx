import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  BsFacebook,
  BsTiktok,
  BsInstagram,
} from 'react-icons/bs';
import { IconType } from 'react-icons/lib';

const socialMedias: [IconType, string][] = [
  [BsInstagram, 'https://www.instagram.com/uanza_official/'],
  [BsFacebook, 'https://www.facebook.com/profile.php?id=61563309688789'],
  [BsTiktok, 'https://www.tiktok.com/@uanza.oficial'],
];

export const Footer = () => {
  const { t } = useTranslation('footer');

  const footerLinks = [
    {
      label: t('parceiros'),
      links: [
        [t('HC'), '#'],
        [t('UANA TEC'), '#'],
        [t('EnJoy'), '#'],
        
      ],
    },
    {
      label: t('suporte'),
      links: [
        [t('EnJoy tecnologias'), '#'],
        
      ],
    },
    {
      label: t('contactos'),
      links: [
        [('942164068'), '#'],
      ],
    },
  ];

  return (
    <footer className="mb-16 bg-white md:mb-0">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-1">
            <Link href="/">
              <Image
                priority
                src="/UANZA LOGO.png"
                alt="kara shop logo"
                width={100}
                height={35}
                quality={100}
              />
            </Link>
            <p className="py-4 text-sm font-normal text-neutral-500">
              {t('Uanza')}
            </p>
            <div className="my-5 flex justify-center md:justify-start">
              {socialMedias.map(([Icon, href]) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                >
                  <Icon />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-5 flex justify-between md:mt-0 md:flex-[2] md:justify-around">
            {footerLinks.map(({ label, links }) => (
              <div key={label} className="flex flex-col">
                <strong className="mb-5 text-sm font-bold text-neutral-600 md:text-base">
                  {label}
                </strong>
                <ul className="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                  {links.map(([label, href]) => (
                    <Link
                      key={href}
                      href={href}
                      className="transition hover:text-neutral-700"
                    >
                      {label}
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-neutral-100">
        <div className="mx-auto max-w-7xl px-2 py-3">
          <div className="flex flex-col items-center justify-between gap-3 text-xs font-medium text-neutral-700 md:flex-row">
            <p>{t('copyright 2024 UANZA')}</p>
           
            <p>
              {`${t('createdBy')} `}
              <strong>
                <Link href="" target="_blank">
                  EnJoy
                </Link>
              </strong>
              {'. '}
              {('reserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
