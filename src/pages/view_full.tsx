// ViewFull.js
import Link from 'next/link';
import { FaArrowLeft, FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Footer } from '@/components';

const ViewFull = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImageById = async () => {
      if (id) {
        const response = await fetch('/images.json');
        const data = await response.json();
        const foundImage = data.find(img => img.id === id);
        setImage(foundImage);
      }
    };
    fetchImageById();
  }, [id]);

  const handleDownload = () => {
    if (image && image.src) {
      const link = document.createElement('a');
      link.href = image.src;
      link.download = 'imagem.jpg';
      link.click();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 left-0 right-0 p-4 bg-[#9DD4F0] z-10">
        <Link href="/" className="flex items-center text-white hover:text-[#fff] transition text-sm md:text-base">
          <FaArrowLeft size={20} />
          <span className="ml-2">Voltar</span>
        </Link>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow pt-16 px-4 sm:px-6 md:px-8 lg:px-16">
        {image ? (
          <div className="w-full max-w-2xl mx-auto">
            <img 
              src={image.src} 
              alt="Visualização Completa" 
              className="rounded-lg mb-4"
              width={800}
              height={600}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <div className="flex justify-between items-center text-[#9DD4F0] mt-2 text-xs md:text-base">
              <div className="flex space-x-6">
                <span>👁️ 2222 visualizações</span>
                <span>⬇️ 666 downloads</span>
              </div>
              <button 
                onClick={handleDownload} 
                className="flex items-center text-[#fff] bg-[#9DD4F0] p-2 rounded hover:bg-[#7BB7E5] transition text-xs md:text-base"
              >
                <FaDownload className="mr-1" /> Download
              </button>
            </div>
            <div className="flex flex-col items-start py-4">
              <span className="text-[#9DD4F0] text-xs md:text-base">📅 Publicado em 06 de Outubro de 2024</span>
            </div>
          </div>
        ) : (
          <p>Carregando imagem...</p>
        )}
      </main>

      <footer className="py-4">
        <Footer />
      </footer>
    </div>
  );
};

export default ViewFull;
