import React from 'react';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { Frames } from '../components/frames.js';
import { About } from '../components/about.js';
import '../style/home.css';

import actu1 from '../images/actu1.png';
import actu2 from '../images/actu2.png';
import actu3 from '../images/actu3.png';


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
                            <img src={actu1} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Les meilleurs cookies de la capitale qui innove avec des cookies salé, à tester absolument - <br />Fay’siTis (75011)</p>
                            </div>
                        </a>
                    </div>
                    <div className="image-container">
                        <a href="https://www.instagram.com/lapepinieredesbatignolles/" target="_blank" rel="noreferrer">
                            <img src={actu2} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Le café où tu peux télétravailler et boire l’un des meilleurs latté de Paris - <br />La pépinière des Batignolles (75017)</p>
                            </div>
                        </a>
                    </div>
                    <div className="image-container">
                        <a href="https://www.instagram.com/saon.comedyclub/" target="_blank" rel="noreferrer">

                            <img src={actu3} className="image" alt="image" />
                            <div className="image-overlay">
                                <p>Un resto où tu peux manger un bon thaï et regarder des humoristes faire des sketch - <br />Saon Thaï (94270)</p>
                            </div>
                        </a>
                    </div>
                </div>
                <About />
                <Frames />
                <Footer />
            </div>
        </div>
    );
}

export default Home;