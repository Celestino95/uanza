import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Transition } from '@headlessui/react';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';
import { Search } from '../home/Search';
import { Collections } from '@/types';
import { BottomNavigation } from '@/components';
import { useSession, signOut } from 'next-auth/react';
import Modal_Login from '../../components/modals/login';
import Body from '../home';
import  { Hero }  from '../../components/home/Hero';
import AboutUs from '../sobre';
import ContactUs from '../contactos';

export interface NavLink {
  name: 'Início' | 'Sobre nós' | 'Contactos';
  content: JSX.Element; // Adicionando uma propriedade para o conteúdo
}

const contentMapping = {
  Início: <div><Hero /></div>,
  'Sobre nós': <div><AboutUs /></div>,
  Contactos: <div><ContactUs /></div>,
};

export const navLinks: NavLink[] = [
  { name: 'Início', content: contentMapping.Início },
  { name: 'Sobre nós', content: contentMapping['Sobre nós'] },
  { name: 'Contactos', content: contentMapping.Contactos },
];

export const sideNavLinks: [string, IconType][] = [
  ['', FiUser],
];

export const Header = ({ collections }: { collections: Collections }) => {
  const { t } = useTranslation('header');
  const { data: session } = useSession();

  const [hoveredNavLink, setHoveredNavLink] = useState<NavLink | null>(null);
  const [selectedNavLink, setSelectedNavLink] = useState<NavLink | null>(navLinks[0]); // Início como ativo
  const [currentContent, setCurrentContent] = useState<JSX.Element>(navLinks[0].content); // Estado para o conteúdo

  const handleShowMenu = (navLink: NavLink) => setHoveredNavLink(navLink);
  const handleCloseMenu = () => setHoveredNavLink(null);

  const handleClick = (navLink: NavLink) => {
    setSelectedNavLink(navLink); // Marca o item clicado
    setCurrentContent(navLink.content); // Atualiza o conteúdo exibido
    handleCloseMenu(); // Fecha o menu
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header>
      <div className="relative h-14 bg-white shadow-md shadow-gray-200">
        <div className="mx-auto flex h-full items-center px-4 xl:container">
          <div className="mr-5 flex shrink-0 items-center">
            <Link href="/">
              <Image
                priority
                src="/UANZA LOGO.png"
                alt="logo"
                width={60}
                height={60}
                quality={100}
              />
            </Link>
          </div>
          
          <ul className="ml-auto hidden h-full md:flex items-center">
            {navLinks.map((item, index) => (
              <li
                className={`font-medium text-neutral-700 transition-colors ${
                  hoveredNavLink === item || selectedNavLink === item ? 'bg-violet-100 text-violet-700' : ''
                }`}
                key={index}
                onMouseEnter={() => handleShowMenu(item)}
                onMouseLeave={handleCloseMenu}
              >
                <a
                  href="#"
                  className="flex h-full items-center px-5"
                  onClick={(e) => {
                    e.preventDefault(); // Previna a navegação padrão
                    handleClick(item); // Atualiza o conteúdo
                  }}
                >
                  {t(item.name)}
                </a>
              </li>
            ))}
            
                {sideNavLinks.map(([url, Icon]) => (
                  <Link key={url} href={url} onClick={openModal} className="ml-5 hidden md:block">
                    <Icon
                      className="text-neutral-700 transition-colors hover:text-violet-700"
                      size="20px"
                    />
                  </Link>
                  
                ))}
            
            
          </ul>
          
        </div>
        
      </div>
      <BottomNavigation navLinks={navLinks} collections={collections} />
      
      <main>
        {currentContent}
      </main>
      {/*
      <BottomNavigation navLinks={navLinks} collections={collections} />
      <Modal_Login isOpen={isModalOpen} onClose={closeModal} /> */}
      
    </header>
  );
};
