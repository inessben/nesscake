import React, { useState, useMemo } from 'react';
import '../style/hacks.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { SearchBar } from '../components/SearchBar.js';
import { getImagePath } from '../utils/imageUtils.js';

const hacksData = [
    {
        id: 1,
        title: 'Génoise',
        category: 'Bases',
        image: getImagePath('genoise.jpeg'),
        tip: 'Pour garder votre génoise moelleuse, enroulez-la dans un torchon jusqu\'à qu\'elle refroidisse pour ensuite la cellophaner.',
        icon: 'fas fa-birthday-cake',
        difficulty: 'Intermédiaire'
    },
    {
        id: 2,
        title: 'Pancakes',
        category: 'Technique',
        image: getImagePath('pancakes.jpeg'),
        tip: 'Mettez votre pâte à pancakes dans une bouteille vide. Faites un trou sur le bouchon pour pouvoir faire des ronds parfaits sur la poêle.',
        icon: 'fas fa-circle',
        difficulty: 'Facile'
    },
    {
        id: 3,
        title: 'Tiramisu',
        category: 'Repos',
        image: getImagePath('tiramisu.jpeg'),
        tip: 'Après 24h au frais, le tiramisu a toujours meilleur goût. Les biscuits cuillère sont plus adaptés que les boudoirs pour les tiramisus.',
        icon: 'fas fa-clock',
        difficulty: 'Intermédiaire'
    },
    {
        id: 4,
        title: 'Ganache',
        category: 'Créme',
        image: getImagePath('ganache-montee.jpeg'),
        tip: 'Mélanger les chocolats noirs, blanc et au lait pour plus de gourmandises !',
        icon: 'fas fa-heart',
        difficulty: 'Intermédiaire'
    },
    {
        id: 5,
        title: 'Cupcakes',
        category: 'Matériel',
        image: getImagePath('cupcakes.jpeg'),
        tip: 'Si vous n\'avez plus de disques à cupcakes, vous pouvez utiliser du papier cuisson découpé en petits carrés à introduire dans les moules.',
        icon: 'fas fa-lightbulb',
        difficulty: 'Facile'
    },
    {
        id: 6,
        title: 'Fondant au Chocolat',
        category: 'Astuce',
        image: getImagePath('fondant-chocolat.jpeg'),
        tip: 'Dans les fondants individuels, mettez un carré de chocolat (ou de Kinder) directement dans le moule avant cuisson.',
        icon: 'fas fa-surprise',
        difficulty: 'Facile'
    },
    {
        id: 7,
        title: 'Chantilly',
        category: 'Timing',
        image: getImagePath('chantilly.jpeg'),
        tip: 'Faites toujours votre crème mascarpone 5mn avant utilisation. Plus vous la laissez au frais, moins elle sera utilisable.',
        icon: 'fas fa-stopwatch',
        difficulty: 'Facile'
    }
];

function Astuces() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Toutes');

    const categories = ['Toutes', ...new Set(hacksData.map(hack => hack.category))];

    const filteredHacks = useMemo(() => {
        let filtered = hacksData;
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(hack =>
                hack.title.toLowerCase().includes(term) ||
                hack.category.toLowerCase().includes(term) ||
                hack.tip.toLowerCase().includes(term) ||
                hack.difficulty.toLowerCase().includes(term)
            );
        }
        if (selectedCategory !== 'Toutes') {
            filtered = filtered.filter(hack => hack.category === selectedCategory);
        }

        return filtered;
    }, [searchTerm, selectedCategory]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

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
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Rechercher une astuce, catégorie ou technique..."
                />

                <div className="hacks-filters">
                    <h3>Filtrer par catégorie :</h3>
                    <div className="category-buttons">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="hacks-stats">
                    <p>
                        {filteredHacks.length === hacksData.length
                            ? `${hacksData.length} astuces disponibles`
                            : `${filteredHacks.length} astuce${filteredHacks.length > 1 ? 's' : ''} trouvée${filteredHacks.length > 1 ? 's' : ''}`
                        }
                    </p>
                </div>

                {filteredHacks.length > 0 ? (
                    <div className="hacks-grid">
                        {filteredHacks.map(hack => (
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
                ) : (
                    <div className="no-results">
                        <i className="fas fa-search"></i>
                        <h3>Aucune astuce trouvée</h3>
                        <p>Essayez de modifier vos critères de recherche ou de choisir une autre catégorie.</p>
                    </div>
                )}

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

