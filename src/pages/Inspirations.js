import React, { useState } from 'react';
import '../style/inspirations.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

import { getImagePath } from '../utils/imageUtils.js';

const inspirationsImages = [
    getImagePath('green-cookies.png'),
    getImagePath('flowered-cake.png'),
    getImagePath('pinacolacake.png'),
    getImagePath('spidercake.png'),
    getImagePath('heart-cake.png'),
    getImagePath('psf-cupcakes.png'),
    getImagePath('kinder-cupcakes.png')
];

function Inspirations() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    const getImagesPerPage = () => {
        if (windowWidth <= 480) return 1;
        if (windowWidth <= 768) return 2;
        if (windowWidth <= 1024) return 3;
        return 4;
    };

    const imagesPerPage = getImagesPerPage();
    const totalPages = Math.ceil(inspirationsImages.length / imagesPerPage);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setCurrentPageIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const goToPrevious = () => {
        setCurrentPageIndex((prevIndex) =>
            prevIndex === 0 ? totalPages - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentPageIndex((prevIndex) =>
            (prevIndex + 1) % totalPages
        );
    };

    const getCurrentPageImages = () => {
        const startIndex = currentPageIndex * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        return inspirationsImages.slice(startIndex, endIndex);
    };

    const currentImages = getCurrentPageImages();

    return (
        <div className="inspirations-page">
            <Header />

            <div className="carousel-gallery">
                <button className="carousel-btn prev-btn" onClick={goToPrevious}>
                    ‹
                </button>

                <div className="gallery-images-container">
                    {currentImages.map((image, index) => (
                        <div key={`${currentPageIndex}-${index}`} className="gallery-image-wrapper">
                            <img
                                src={image}
                                alt={`Inspiration ${currentPageIndex * imagesPerPage + index + 1}`}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>

                <button className="carousel-btn next-btn" onClick={goToNext}>
                    ›
                </button>
            </div>

            <div className="gallery-counter">
                Page {currentPageIndex + 1} / {totalPages}
            </div>

            <Footer />
        </div>
    );
}

export default Inspirations;
