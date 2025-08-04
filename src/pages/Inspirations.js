import React, { useState } from 'react';
import '../style/inspirations.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

import greenCookies from '../images/green-cookies.png';
import pinacolaCake from '../images/pinacolacake.png';
import spiderCake from '../images/spidercake.png';
import heartCake from '../images/heart-cake.png';
import floweredCake from '../images/flowered-cake.png';
import cupCakes from '../images/psf-cupcakes.png';
import kinderCupcakes from '../images/kinder-cupcakes.png';

const inspirationsImages = [
    greenCookies,
    floweredCake,
    pinacolaCake,
    spiderCake,
    heartCake,
    cupCakes,
    kinderCupcakes
];

function Inspirations() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    // Déterminer le nombre d'images par page selon la taille d'écran
    const getImagesPerPage = () => {
        if (windowWidth <= 480) return 1;  // Mobile : 1 image
        if (windowWidth <= 768) return 2;  // Tablette : 2 images
        if (windowWidth <= 1024) return 3; // Petit desktop : 3 images
        return 4; // Grand desktop : 4 images
    };

    const imagesPerPage = getImagesPerPage();
    const totalPages = Math.ceil(inspirationsImages.length / imagesPerPage);

    // Écouter les changements de taille d'écran
    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            // Reset à la première page quand la taille change
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

    // Calculer les images à afficher pour la page actuelle
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
