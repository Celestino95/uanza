import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import NavBar from './menu_categoria'; 
import { Search } from './Search';

export const Album = () => {
  const { t } = useTranslation('home');
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/images.json');
      const data = await response.json();
      setImages(data);
      setFilteredImages(data);
    };
    
    fetchImages();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setFilteredImages(category === 'todos' ? images : images.filter(image => image.categoria === category));
  };

  const handleSearch = (searchValue) => {
    const lowerCaseSearch = searchValue.toLowerCase();
    setFilteredImages(images.filter(image => 
      image.nome.toLowerCase().includes(lowerCaseSearch) || 
      image.descricao.toLowerCase().includes(lowerCaseSearch)
    ));
  };

  return (
    <div className="bg-white">
      <NavBar onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />
      <div className="mx-auto flex flex-col items-center px-4 py-10 md:container">
        <Search onSearch={handleSearch} />
      </div>
        
      <div className="mx-auto flex flex-col items-center px-4 py-1 md:container">
        <span className="mb-4 text-sm font-bold uppercase text-violet-700">
          {t('Destaques')}
        </span>
        <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {filteredImages.map((image) => (
            // Album.js
            <Link href={`/view_full?id=${image.id}`} key={image.id} className="relative w-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={500}
                height={300}
                objectFit="cover"
                className="rounded transition-transform duration-300 hover:scale-105"
              />
            </Link>

          ))}
        </div>
      </div>
    </div>
  );
};
