import React from 'react';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Frames } from '../components/frames.js';
import '../style/home.css';

import { getImagePath } from '../utils/imageUtils.js';


function Home() {
    return (
        <div className="Home">
            <Header />
            <div className="Home-news">
                <h1 className="Home-news-title">Bienvenue chez Nesscake, le repère des amoureux du sucré</h1>
                <h3 className="Home-news-subtitle">*voici les adresses qui vont vous régaler :</h3>
                <div className="images">
                    <div className="image-container">
                        <a href="https://www.instagram.com/faysitiscookies/" target="_blank" rel="noreferrer">
                            <img src={getImagePath('actu1.png')} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Les meilleurs cookies de la capitale qui innove avec des cookies salés, à tester absolument - <u>Fay’siTis (75011)</u></p>
                            </div>
                        </a>
                    </div>
                    <div className="image-container">
                        <a href="https://www.instagram.com/lapepinieredesbatignolles/" target="_blank" rel="noreferrer">
                            <img src={getImagePath('actu2.png')} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Le café où tu peux télétravailler et boire l’un des meilleurs lattés de Paris - <br /><u>La pépinière des Batignolles (75017)</u></p>
                            </div>
                        </a>
                    </div>
                    <div className="image-container">
                        <a href="https://www.instagram.com/saon.comedyclub/" target="_blank" rel="noreferrer">
                            <img src={getImagePath('actu3.png')} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Un resto où tu peux manger un bon thaï et regarder des humoristes faire des sketchs - <u>Saon Thaï (94270)</u></p>
                            </div>
                        </a>
                    </div>
                </div>
                <Frames />
                <Footer />
            </div>
        </div>
    );
}

export default Home;