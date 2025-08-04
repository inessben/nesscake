import React, { useState } from 'react';
import '../style/recipecard.css';

export function RecipeCard({ recipe }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const getDifficultyColor = (difficulty) => {
        switch(difficulty) {
            case 'Facile': return '#28a745';
            case 'Moyen': return '#ffc107';
            case 'Difficile': return '#dc3545';
            default: return '#6c757d';
        }
    };

    return (
        <>
            <div className="recipe-card" onClick={openModal}>
                <div className="recipe-card-image">
                    <img 
                        src={recipe.image} 
                        alt={recipe.name}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/400x200/ff6b6b/ffffff?text=Recette';
                        }}
                    />
                    <div className="recipe-card-overlay">
                        <span className="view-recipe">Voir la recette</span>
                    </div>
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-card-title">{recipe.name}</h3>
                    <p className="recipe-card-description">{recipe.description}</p>
                    <div className="recipe-card-meta">
                        <div className="recipe-meta-item">
                            <i className="fas fa-clock"></i>
                            <span>{recipe.cookingTime}</span>
                        </div>
                        <div className="recipe-meta-item">
                            <i className="fas fa-users"></i>
                            <span>{recipe.servings}</span>
                        </div>
                        <div className="recipe-meta-item">
                            <i className="fas fa-chart-line"></i>
                            <span 
                                className="difficulty-badge"
                                style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
                            >
                                {recipe.difficulty}
                            </span>
                        </div>
                    </div>
                    <div className="recipe-card-category">
                        {recipe.category}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="recipe-modal-overlay" onClick={closeModal}>
                    <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
                        <button className="recipe-modal-close" onClick={closeModal}>
                            <i className="fas fa-times"></i>
                        </button>
                        
                        <div className="recipe-modal-header">
                            <img 
                                src={recipe.image} 
                                alt={recipe.name}
                                className="recipe-modal-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x200/ff6b6b/ffffff?text=Recette';
                                }}
                            />
                            <div className="recipe-modal-info">
                                <h2 className="recipe-modal-title">{recipe.name}</h2>
                                <p className="recipe-modal-description">{recipe.description}</p>
                                <div className="recipe-modal-meta">
                                    <div className="meta-item">
                                        <i className="fas fa-clock"></i>
                                        <span>{recipe.cookingTime}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fas fa-users"></i>
                                        <span>{recipe.servings}</span>
                                    </div>
                                    <div className="meta-item">
                                        <i className="fas fa-chart-line"></i>
                                        <span 
                                            className="difficulty-badge"
                                            style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
                                        >
                                            {recipe.difficulty}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="recipe-modal-content">
                            <div className="recipe-section">
                                <h3><i className="fas fa-shopping-basket"></i> Ingrédients</h3>
                                <ul className="ingredients-list">
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="recipe-section">
                                <h3><i className="fas fa-list-ol"></i> Préparation</h3>
                                <ol className="instructions-list">
                                    {recipe.instructions.map((instruction, index) => (
                                        <li key={index}>{instruction}</li>
                                    ))}
                                </ol>
                            </div>

                            <div className="recipe-section">
                                <h3><i className="fas fa-tags"></i> Tags</h3>
                                <div className="recipe-tags">
                                    {recipe.tags.map((tag, index) => (
                                        <span key={index} className="recipe-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
