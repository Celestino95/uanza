import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Album } from './Album'; // Componente de imagens
import { Video } from './Video'; // Componente de vídeos



export const Hero = () => {
  const { } = useTranslation('home');
  const [selectedButton, setSelectedButton] = useState('imagens'); // Estado para o botão selecionado

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName); // Atualiza o botão selecionado
  };

  // Definindo o conteúdo atual baseado no botão selecionado
  const currentContent = selectedButton === 'imagens' ? <Album /> : <Video />;

  return (
    
    <div className="overflow-hidden bg-gray-100">
      
      <div className="mx-auto flex min-h-[10vh] max-w-7xl flex-col px-4 md:flex-row">
        <div className="flex flex-1 flex-col items-center justify-center pt-10 md:items-start md:px-4 md:pt-0">
          <span
            data-aos="fade-down"
            data-aos-delay="200"
            className="mb-2.5 rounded-md bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-600 md:mb-5"
          >
            {('100% digital')}
          </span>
          <h2
            data-aos="fade-right"
            data-aos-delay="300"
            className="mb-5 text-center text-[2.5rem] font-bold leading-tight text-black md:text-left md:text-5xl"
          >
            {('Mundo das Imagens & Vídeo')}
          </h2>
          <h3
            data-aos="fade-right"
            data-aos-delay="400"
            className="font-regular mb-5 text-center text-lg leading-tight text-neutral-700 md:mb-10 md:text-left"
          >
            {('Explore, Compartilhe e Viva as Suas Memórias')}
          </h3>
          <div className="mb-10 flex space-x-2">
            <Link
              href="#"
              data-aos-delay="500"
              className={`flex items-center rounded px-8 py-2.5 text-base font-normal text-white shadow-sm shadow-zinc-500 ${
                selectedButton === 'imagens' ? 'bg-zinc-700' : 'bg-zinc-900'
              }`}
              onClick={() => handleButtonClick('imagens')} 
            >
              <span className="ml-2">{('Imagens')}</span>
            </Link>
            <Link
              href="#"
              data-aos-delay="500"
              className={`flex items-center rounded px-8 py-2.5 text-base font-normal text-white shadow-sm shadow-zinc-500 ${
                selectedButton === 'videos' ? 'bg-zinc-700' : 'bg-zinc-900'
              }`}
              onClick={() => handleButtonClick('videos')}
            >
              <span className="ml-2">{('Vídeos')}</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-end">
          <Image
            priority
            src="/UANZA LOGO.png"
            alt="hero"
            quality={100}
            width={450}
            height={450}
            data-aos="fade-up"
          />
        </div>
      </div>
    
      {/* Conteúdo dinâmico dentro do main */}
      <main>
        {currentContent} {/* Exibe o conteúdo atual */}
      </main>
    </div>
  );
};
