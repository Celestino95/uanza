import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { IconType } from 'react-icons';
import { FiHome, FiUser, FiGrid } from 'react-icons/fi';
import { Collections } from '@/types';
import { NavLink } from '@/components';
import { CollectionsPage } from './CollectionsPage';
import Modal_Login from '../../components/modals/login';

interface Props {
  navLinks: NavLink[];
  collections: Collections;
}

interface BottomTab {
  title: string;
  url: string;
  Icon: IconType;
}

export const BottomNavigation = ({ navLinks, collections }: Props) => {
  const router = useRouter();
  const { t } = useTranslation();

  const [currentTab, setCurrentTab] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bottomTabs: BottomTab[] = [
    { title: t('Inicio'), url: '/', Icon: FiHome },
    { title: t('Menu'), url: '/#collections', Icon: FiGrid },
    { title: t('Perfil'), url: '#', Icon: FiUser }, // Alterado para '#'
  ];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <Modal_Login isOpen={isModalOpen} onClose={closeModal} />
      <div className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white drop-shadow-[0_-15px_20px_rgba(0,0,0,0.10)] md:hidden">
        <ul className="flex h-full">
          {bottomTabs.map((tab, index) => (
            <li key={index} className="flex-1">
              <Link
                href={tab.url}
                className={`flex h-full w-full flex-col items-center justify-center text-xs font-medium text-neutral-700 hover:text-violet-700 ${
                  router.pathname === tab.url && 'text-violet-700'
                }`}
                onClick={() => {
                  if (tab.title === t('Perfil')) {
                    openModal(); // Abre a modal ao clicar no perfil
                  } else {
                    setCurrentTab(tab.url);
                  }
                }}
              >
                <tab.Icon size={'1.2rem'} />
                <span className="mt-1">{tab.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        
      </div>
      {currentTab === '/#collections' && (
        <CollectionsPage
          navLinks={navLinks}
          collections={collections}
          onPageClose={() => setCurrentTab('')}
        />
      )}
    </>
  );
};
