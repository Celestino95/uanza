import Link from 'next/link';
import { FaArrowLeft, FaDownload, FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
import { Footer } from '@/components';
import { Video } from '@/components';
import { Sliders } from 'lucide-react';
import Modal_Login from '@/components/modals/login';

const videos = [
    {
        url: '',
        views: '2222',
        downloads: '666',
        publicationDate: 'dia 06 de Outubro de 2024',
        title: 'Vídeo 1',
    },
    {
        url: 'uanza_post/video2.mp4',
        views: '1500',
        downloads: '400',
        publicationDate: 'dia 05 de Outubro de 2024',
        title: 'Vídeo 2',
    },
    {
        url: 'uanza_post/video3.mp4',
        views: '3000',
        downloads: '1200',
        publicationDate: 'dia 04 de Outubro de 2024',
        title: 'Vídeo 3',
    },
];

const ViewFull = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col h-screen">
            <header className="fixed top-0 left-0 right-0 p-4 bg-[#9DD4F0] z-10">
                <Link href="/" className="flex items-center text-white hover:text-[#fff] transition text-sm md:text-base">
                    <FaArrowLeft size={20} />
                    <span className="ml-2">Voltar</span>
                </Link>
            </header>
            <main className="flex flex-col items-center justify-center flex-grow pt-16">
                <Slider {...settings} className="w-full max-w-2xl">
                    {videos.map((video, index) => (
                        <div className="flex flex-col items-center px-4" key={index}>
                            <video
                                controls
                                className="rounded-lg mb-4 w-full max-w-[100%] md:max-w-[100%]"
                                controlsList="nodownload"
                                src={video.url}
                            />
                            <div className="flex justify-between items-center text-[#9DD4F0] mt-2 text-xs md:text-base">
                                <div className="flex space-x-6">
                                    <span>👁️ {video.views} visualizações</span>
                                    <span>⬇️ {video.downloads} downloads</span>
                                </div>
                                <div className="btn-group flex space-x-2 rounded">
                                    {/*
                                    <button className="flex items-center text-[#fff] bg-[#9DD4F0] p-2 rounded hover:bg-[#7BB7E5] transition text-xs md:text-base">
                                        <FaShareAlt className="mr-1" /> Partilhar
                                    </button> */}
                                    <button onClick={openModal} className="flex items-center text-[#fff] bg-[#9DD4F0] p-2 rounded hover:bg-[#7BB7E5] transition text-xs md:text-base">
                                        <FaDownload className="mr-1" /> Download
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start py-4">
                                <span className="text-[#9DD4F0] text-xs md:text-base">📅 {video.publicationDate}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
                <Video />
                <Modal_Login isOpen={isModalOpen} onClose={closeModal} />
            </main>
            <footer className='py-4'>
                <Footer />
            </footer>
        </div>
    );
};

// Componente do botão de próximo
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute right-0 top-1/2 transform -translate-y-1/2 text-[#fff] bg-[#9DD4F0] rounded-full shadow-lg p-3 hover:bg-[#7BB7E5] transition`}
            style={{ zIndex: 1, cursor: 'pointer' }}
            onClick={onClick}
        />
    );
};

// Componente do botão de anterior
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 text-[#fff] bg-[#9DD4F0] rounded-full shadow-lg p-3 hover:bg-[#7BB7E5] transition`}
            style={{ zIndex: 1, cursor: 'pointer' }}
            onClick={onClick}
        />
    );
};

export default ViewFull;
