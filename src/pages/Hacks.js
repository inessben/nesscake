import React from 'react';
import '../style/hacks.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

const hacksData = [
    {
        id: 1,
        title: 'Génoise Moelleuse',
        category: 'Bases',
        image: 'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Genoise',
        tip: 'Pour garder votre génoise moelleuse, enroulez-la dans un torchon jusqu\'à qu\'elle refroidisse pour ensuite la cellophaner.',
        icon: 'fas fa-birthday-cake',
        difficulty: 'Intermédiaire'
    },
    {
        id: 2,
        title: 'Pancakes Américains',
        category: 'Technique',
        image: 'https://via.placeholder.com/300x200/F4A460/ffffff?text=Pancakes',
        tip: 'Mettez votre pâte à pancakes dans une bouteille vide. Faites un trou sur le bouchon pour pouvoir faire des ronds parfaits sur la poêle.',
        icon: 'fas fa-circle',
        difficulty: 'Facile'
    },
    {
        id: 3,
        title: 'Tiramisu',
        category: 'Repos',
        image: 'https://via.placeholder.com/300x200/D2691E/ffffff?text=Tiramisu',
        tip: 'Après 24h au frais, le tiramisu a toujours meilleur goût. Les biscuits cuillère sont plus adaptés que les boudoirs pour les tiramisus.',
        icon: 'fas fa-clock',
        difficulty: 'Intermédiaire'
    },
    {
        id: 4,
        title: 'Ganache Gourmande',
        category: 'Créme',
        image: 'https://via.placeholder.com/300x200/8B4513/ffffff?text=Ganache',
        tip: 'Mélanger les chocolats noirs, blanc et au lait pour plus de gourmandises !',
        icon: 'fas fa-heart',
        difficulty: 'Intermédiaire'
    },
    {
        id: 5,
        title: 'Cupcakes',
        category: 'Matériel',
        image: 'https://via.placeholder.com/300x200/FFB6C1/000000?text=Cupcakes',
        tip: 'Si vous n\'avez plus de disques à cupcakes, vous pouvez utiliser du papier cuisson découpé en petits carrés à introduire dans les moules.',
        icon: 'fas fa-lightbulb',
        difficulty: 'Facile'
    },
    {
        id: 6,
        title: 'Fondant au Chocolat',
        category: 'Astuce',
        image: 'https://via.placeholder.com/300x200/8B4513/ffffff?text=Fondant',
        tip: 'Dans les fondants individuels, mettez un carré de chocolat (ou de Kinder) directement dans le moule avant cuisson.',
        icon: 'fas fa-surprise',
        difficulty: 'Facile'
    },
    {
        id: 7,
        title: 'Chantilly Parfaite',
        category: 'Timing',
        image: 'https://via.placeholder.com/300x200/FFF8DC/000000?text=Chantilly',
        tip: 'Faites toujours votre crème mascarpone 5mn avant utilisation. Plus vous la laissez au frais, moins elle sera utilisable.',
        icon: 'fas fa-stopwatch',
        difficulty: 'Facile'
    }
];

function Astuces() {
    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Facile': return '#28a745';
            case 'Intermédiaire': return '#ffc107';
            case 'Difficile': return '#dc3545';
            default: return '#6c757d';
        }
    };

    return (
        <div className="hacks-page">
            <Header />



            <div className="hacks-container">

                <div className="hacks-grid">
                    {hacksData.map(hack => (
                        <div key={hack.id} className="hack-card">
                            <div className="hack-card-header">
                                <img
                                    src={hack.image}
                                    alt={hack.title}
                                    className="hack-card-image"
                                />
                                <div className="hack-card-overlay">
                                    <i className={hack.icon}></i>
                                </div>
                            </div>

                            <div className="hack-card-content">
                                <div className="hack-card-meta">
                                    <span className="hack-category">{hack.category}</span>
                                    <span
                                        className="hack-difficulty"
                                        style={{ backgroundColor: getDifficultyColor(hack.difficulty) }}
                                    >
                                        {hack.difficulty}
                                    </span>
                                </div>

                                <h3 className="hack-card-title">{hack.title}</h3>

                                <p className="hack-card-tip">{hack.tip}</p>

                                <div className="hack-card-footer">
                                    <span className="tip-label">
                                        <i className="fas fa-lightbulb"></i>
                                        Astuce de pro
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hacks-cta">
                    <div className="cta-card">
                        <h2><i className="fas fa-question-circle"></i> Vous avez des questions ?</h2>
                        <p>N'hésitez pas à me contacter si vous avez besoin de précisions sur ces astuces ou si vous en avez d'autres à partager !</p>
                        <div className="cta-buttons">
                            <a href="/recettes" className="cta-btn primary">
                                <i className="fas fa-utensils"></i>
                                Voir les recettes
                            </a>
                            <a href="/inspirations" className="cta-btn secondary">
                                <i className="fas fa-images"></i>
                                Découvrir les inspirations
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Astuces;

