import React, { useState, useMemo } from 'react';
import '../style/recipes.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { SearchBar } from '../components/SearchBar.js';
import { RecipeCard } from '../components/RecipeCard.js';
import { recipesData, searchRecipes, getAllCategories } from '../data/recipesData.js';

function Recettes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Toutes');
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    const categories = ['Toutes', ...getAllCategories()];

    // Filtrer les recettes en fonction de la recherche et de la catégorie
    useMemo(() => {
        let recipes = searchRecipes(searchTerm);

        if (selectedCategory !== 'Toutes') {
            recipes = recipes.filter(recipe => recipe.category === selectedCategory);
        }

        setFilteredRecipes(recipes);
    }, [searchTerm, selectedCategory]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="recipes-page">
            <Header />


            <div className="recipes-container">
                <SearchBar
                    onSearch={handleSearch}
                    placeholder="Rechercher une recette ou un ingrédient..."
                />

                <div className="recipes-filters">
                    <h3>Filtrer par catégorie :</h3>
                    <div className="category-buttons">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-btn ${selectedCategory === category ? 'active' : ''
                                    }`}
                                onClick={() => handleCategoryChange(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="recipes-stats">
                    <p>
                        {filteredRecipes.length === recipesData.length
                            ? `${recipesData.length} recettes disponibles`
                            : `${filteredRecipes.length} recette${filteredRecipes.length > 1 ? 's' : ''} trouvée${filteredRecipes.length > 1 ? 's' : ''}`
                        }
                    </p>
                </div>

                {filteredRecipes.length > 0 ? (
                    <div className="recipes-grid">
                        {filteredRecipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <i className="fas fa-search"></i>
                        <h3>Aucune recette trouvée</h3>
                        <p>Essayez de modifier vos critères de recherche ou de choisir une autre catégorie.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Recettes;
