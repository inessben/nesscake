export const recipesData = [
    {
        id: 'pancakes',
        name: 'Pancakes',
        category: 'Petit-déjeuner',
        difficulty: 'Facile',
        cookingTime: '15 min',
        servings: '4 personnes',
        image: 'https://via.placeholder.com/400x200/ff6b6b/ffffff?text=Pancakes',
        description: 'Des pancakes moelleux et délicieux pour un petit-déjeuner parfait.',
        ingredients: [
            '2 œufs',
            '20g de sucre',
            '80g de farine',
            '150ml de lait',
            '300ml d\'huile de tournesol',
            '10g de levure chimique',
            'Arôme de vanille'
        ],
        instructions: [
            'Battre les œufs et le sucre jusqu\'à ce que le mélange blanchisse.',
            'Ajouter le lait, l\'huile et l\'arôme.',
            'Puis la farine et la levure.',
            'Transvaser le mélange dans une bouteille vide, pour faire des cercles parfaits.',
            'Sur feu moyen, faire cuire 3 minutes environ de chaque côté à feu moyen.'
        ],
        tags: ['œufs', 'farine', 'lait', 'vanille', 'levure', 'sucre']
    },
    {
        id: 'brownies',
        name: 'Brownies',
        category: 'Desserts',
        difficulty: 'Facile', 
        cookingTime: '25 min',
        servings: '8 personnes',
        image: 'https://via.placeholder.com/400x200/8B4513/ffffff?text=Brownies',
        description: 'Brownies au chocolat fondants et irrésistibles.',
        ingredients: [
            '200g de chocolat noir',
            '150g de beurre',
            '150g de sucre',
            '3 œufs',
            '80g de farine',
            '1 pincée de sel'
        ],
        instructions: [
            'Préchauffer le four à 180°C.',
            'Faire fondre le chocolat et le beurre au bain-marie.',
            'Ajouter le sucre, puis les œufs un par un.',
            'Incorporer la farine et le sel.',
            'Verser dans un moule et cuire 25 minutes.'
        ],
        tags: ['chocolat', 'beurre', 'œufs', 'farine', 'sucre']
    },
    {
        id: 'tiramisu',
        name: 'Tiramisu',
        category: 'Desserts',
        difficulty: 'Moyen',
        cookingTime: '30 min + repos',
        servings: '6 personnes',
        image: 'https://via.placeholder.com/400x200/D2691E/ffffff?text=Tiramisu',
        description: 'Le célèbre dessert italien avec mascarpone et café.',
        ingredients: [
            '500g de mascarpone',
            '6 œufs',
            '100g de sucre',
            '300ml de café fort',
            '200g de biscuits à la cuillère',
            'Cacao en poudre',
            '3 cuillères à soupe de liqueur (facultatif)'
        ],
        instructions: [
            'Séparer les blancs des jaunes d\'œufs.',
            'Battre les jaunes avec le sucre jusqu\'à blanchiment.',
            'Ajouter le mascarpone et mélanger.',
            'Monter les blancs en neige et les incorporer délicatement.',
            'Tremper les biscuits dans le café et disposer en couches.',
            'Alterner crème et biscuits, finir par la crème.',
            'Réfrigérer 4h minimum, saupoudrer de cacao avant de servir.'
        ],
        tags: ['mascarpone', 'café', 'œufs', 'sucre', 'cacao', 'biscuits']
    },
    {
        id: 'cookies',
        name: 'Cookies',
        category: 'Biscuits',
        difficulty: 'Facile',
        cookingTime: '12 min',
        servings: '20 cookies',
        image: 'https://via.placeholder.com/400x200/DEB887/000000?text=Cookies',
        description: 'Cookies moelleux aux pépites de chocolat.',
        ingredients: [
            '200g de farine',
            '100g de beurre mou',
            '80g de sucre roux',
            '50g de sucre blanc',
            '1 œuf',
            '150g de pépites de chocolat',
            '1/2 cuillère à café de levure',
            '1 pincée de sel'
        ],
        instructions: [
            'Préchauffer le four à 180°C.',
            'Mélanger le beurre avec les deux sucres.',
            'Ajouter l\'œuf, puis la farine, levure et sel.',
            'Incorporer les pépites de chocolat.',
            'Former des boules et les disposer sur une plaque.',
            'Cuire 12 minutes jusqu\'à ce qu\'ils soient dorés.'
        ],
        tags: ['farine', 'beurre', 'chocolat', 'œuf', 'sucre']
    },
    {
        id: 'crepes',
        name: 'Crêpes',
        category: 'Desserts',
        difficulty: 'Facile',
        cookingTime: '20 min',
        servings: '4 personnes',
        image: 'https://via.placeholder.com/400x200/F4A460/ffffff?text=Crepes',
        description: 'Crêpes fines et délicieuses pour toute occasion.',
        ingredients: [
            '250g de farine',
            '4 œufs',
            '500ml de lait',
            '50g de beurre fondu',
            '2 cuillères à soupe de sucre',
            '1 pincée de sel'
        ],
        instructions: [
            'Mélanger la farine, les œufs et une partie du lait.',
            'Ajouter progressivement le reste du lait.',
            'Incorporer le beurre fondu, le sucre et le sel.',
            'Laisser reposer la pâte 1 heure.',
            'Cuire les crêpes dans une poêle chaude.'
        ],
        tags: ['farine', 'œufs', 'lait', 'beurre', 'sucre']
    },
    {
        id: 'cupcakes',
        name: 'Cupcakes',
        category: 'Desserts',
        difficulty: 'Moyen',
        cookingTime: '20 min',
        servings: '12 cupcakes',
        image: 'https://via.placeholder.com/400x200/FFB6C1/000000?text=Cupcakes',
        description: 'Petits gâteaux moelleux avec glaçage coloré.',
        ingredients: [
            '150g de farine',
            '150g de sucre',
            '150g de beurre',
            '3 œufs',
            '1 cuillère à café de levure',
            '125ml de lait',
            'Arôme vanille'
        ],
        instructions: [
            'Préchauffer le four à 180°C.',
            'Battre le beurre et le sucre.',
            'Ajouter les œufs un par un.',
            'Alterner farine/levure et lait.',
            'Répartir dans des moules à cupcakes.',
            'Cuire 20 minutes.'
        ],
        tags: ['farine', 'sucre', 'beurre', 'œufs', 'lait', 'vanille']
    },
    {
        id: 'fondant-chocolat',
        name: 'Fondant au Chocolat',
        category: 'Desserts',
        difficulty: 'Moyen',
        cookingTime: '12 min',
        servings: '6 personnes',
        image: 'https://via.placeholder.com/400x200/8B4513/ffffff?text=Fondant',
        description: 'Moelleux au chocolat avec cœur coulant irrésistible.',
        ingredients: [
            '200g de chocolat noir',
            '200g de beurre',
            '4 œufs',
            '100g de sucre',
            '50g de farine'
        ],
        instructions: [
            'Faire fondre chocolat et beurre au bain-marie.',
            'Battre œufs et sucre jusqu\'à blanchiment.',
            'Mélanger chocolat fondu et œufs battus.',
            'Incorporer la farine délicatement.',
            'Verser dans des ramequins beurrés.',
            'Cuire 12 minutes à 200°C.'
        ],
        tags: ['chocolat', 'beurre', 'œufs', 'sucre', 'farine']
    },
    {
        id: 'gaufres',
        name: 'Gaufres',
        category: 'Desserts',
        difficulty: 'Facile',
        cookingTime: '15 min',
        servings: '4 personnes',
        image: 'https://via.placeholder.com/400x200/DAA520/ffffff?text=Gaufres',
        description: 'Gaufres croustillantes et moelleuses.',
        ingredients: [
            '250g de farine',
            '3 œufs',
            '400ml de lait',
            '50g de sucre',
            '100g de beurre fondu',
            '1 sachet de levure',
            '1 pincée de sel'
        ],
        instructions: [
            'Séparer les blancs des jaunes.',
            'Mélanger jaunes, lait, sucre et beurre.',
            'Ajouter farine, levure et sel.',
            'Incorporer les blancs montés en neige.',
            'Cuire dans un gaufrier chaud.'
        ],
        tags: ['farine', 'œufs', 'lait', 'beurre', 'sucre', 'levure']
    }
];

export const getRecipeById = (id) => {
    return recipesData.find(recipe => recipe.id === id);
};

export const searchRecipes = (searchTerm) => {
    if (!searchTerm) return recipesData;
    
    const term = searchTerm.toLowerCase();
    return recipesData.filter(recipe => 
        recipe.name.toLowerCase().includes(term) ||
        recipe.category.toLowerCase().includes(term) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(term)) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(term))
    );
};

export const getRecipesByCategory = (category) => {
    return recipesData.filter(recipe => recipe.category === category);
};

export const getAllCategories = () => {
    return [...new Set(recipesData.map(recipe => recipe.category))];
};
