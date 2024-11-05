import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import NavBar from './menu_categoria';
import { Search } from './Search';

export const Video = () => {
  const { t } = useTranslation('home');
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('/videos.json');
      const data = await response.json();
      setVideos(data);
      setFilteredVideos(data);
    };

    fetchVideos();
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setFilteredVideos(category === 'todos' ? videos : videos.filter(video => video.categoria === category));
  };

  const handleSearch = (searchValue) => {
    const lowerCaseSearch = searchValue.toLowerCase();
    setFilteredVideos(videos.filter(video => 
      video.nome.toLowerCase().includes(lowerCaseSearch) || 
      video.descricao.toLowerCase().includes(lowerCaseSearch)
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
        <div className="grid w-full max-w-[1150px] gap-3 md:grid-cols-4">
          {filteredVideos.map((video) => (
            <Link href={`/view_full_video?id=${video.id}`} key={video.id} className="relative w-full overflow-hidden">
              <video controls className="w-full h-auto" controlsList="nodownload">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
