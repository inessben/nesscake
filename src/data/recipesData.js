export const recipesData = [
    {
        id: 'pancakes',
        name: 'Pancakes',
        category: 'Petit-déjeuner',
        difficulty: 'Facile',
        cookingTime: '15 min',
        servings: '4 personnes',
        image: '/src/images/pancakes.jpeg',
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
        id: 'fraisier',
        name: 'Fraisier',
        category: 'Desserts',
        difficulty: 'Facile',
        cookingTime: '30 min',
        servings: '6 personnes',
        image: '/src/images/fraisier.jpeg',
        description: 'Un classique gâteau fraisier avec une délicieuse crème mousseline.',
        ingredients: [
            '300g de fraises',
            '200g de crème pâtissière',
            '250g de génoise',
            '100g de sucre',
            "1 verre d'eau",
            '10g de gélatine'
        ],
        instructions: [
            'Préparer la génoise et laisser refroidir.',
            "Préparer la crème mousseline en mélangeant la crème pâtissière et le beurre.",
            'Couper les fraises en tranches.',
            'Assembler le gâteau en alternant les couches de génoise, crème et fraises.',
            'Laisser prendre au réfrigérateur.'
        ],
        tags: ['fraise', 'crème', 'génoise', 'sucre']
    },
    {
        id: 'molly-cake',
        name: 'Molly Cake',
        category: 'Desserts',
        difficulty: 'Moyen',
        cookingTime: '80 min',
        servings: '8 personnes',
        image: '/src/images/genoise.jpeg',
        description: 'Un gâteau moelleux souvent utilisé comme base de cake design.',
        ingredients: [
            '3 œufs',
            '250g de sucre',
            '250g de farine',
            '250ml de crème liquide 30%',
            '10g de levure chimique',
            'Arôme de vanille'
        ],
        instructions: [
            "Battre les œufs, le sucre et l'arôme pendant 12 minutes.",
            'Ajouter la farine tamisée et la levure.',
            'Monter en chantilly la crème liquide et l\'ajouter au mélange.',
            'Cuire à 160 degrés pendant 1h15mn.',
            'Laisser refroidir sous un torchon propre.'
        ],
        tags: ['farine', 'crème', 'sucre', 'vanille']
    },
    {
        id: 'genoise',
        name: 'Génoise',
        category: 'Desserts',
        difficulty: 'Moyen',
        cookingTime: '55 min',
        servings: '8 personnes',
        image: '/src/images/genoise.jpeg',
        description: 'Base aérienne idéale pour de nombreux desserts.',
        ingredients: [
            '6 œufs',
            '160g de sucre',
            '160g de farine',
            '10g de levure chimique',
            'Arôme de vanille'
        ],
        instructions: [
            'Battre les œufs et le sucre jusqu\'à blanchiment.',
            'Ajouter la farine tamisée et la levure.',
            'Cuire à 160 degrés pendant 55 minutes.',
            'Laisser refroidir et filmer.'
        ],
        tags: ['farine', 'œufs', 'sucre', 'vanille']
    },
    {
        id: 'creme-beurre',
        name: 'Crème au Beurre',
        category: 'Couverture',
        difficulty: 'Facile',
        cookingTime: '20 min',
        servings: 'Pour 1 gâteau',
        image: '/src/images/creme-au-beurre.jpeg',
        description: 'Crème riche et savoureuse pour la décoration de gâteaux.',
        ingredients: [
            '400g de lait concentré',
            '500g de beurre',
            'Arôme de vanille'
        ],
        instructions: [
            'Battez le beurre jusqu\'à ce qu\'il blanchisse.',
            'Ajouter le lait concentré et l\'arôme.',
            'Continuez de battre jusqu\'à ce que la crème soit lisse.'
        ],
        tags: ['beurre', 'sucre', 'lait']
    },
    {
        id: 'ganache-montee',
        name: 'Ganache Montée',
        category: 'Couverture',
        difficulty: 'Moyen',
        cookingTime: '12h de repos',
        servings: 'Pour 1 gâteau',
        image: '/src/images/ganache-montee.jpeg',
        description: 'Texture légère pour un dessert parfait.',
        ingredients: [
            '300g de chocolat',
            '300ml de crème liquide 30%'
        ],
        instructions: [
            'Chauffer une partie de la crème liquide.',
            'Ajouter le chocolat et mélanger.',
            'Ajouter le reste de crème froide.',
            'Réfrigérer toute la nuit puis fouetter.'
        ],
        tags: ['chocolat', 'crème']
    },
    {
        id: 'caramel-beurre-sale',
        name: 'Caramel au Beurre Salé',
        category: 'Sauce',
        difficulty: 'Moyen',
        cookingTime: '15 min',
        servings: '250ml',
        image: '/src/images/caramel-beurre-sale.jpeg',
        description: 'Délicieux caramel crémeux au beurre salé.',
        ingredients: [
            '300g de sucre',
            '150g de beurre',
            '1 pincée de fleur de sel',
            '300ml de crème liquide 30%'
        ],
        instructions: [
            "Faire fondre le sucre jusqu'à brunissement.",
            'Ajouter le beurre et le sel.',
            'Incorporer la crème.',
            'Conserver au frais.'
        ],
        tags: ['caramel', 'sucre', 'beurre']
    },
    {
        id: 'chantilly-mascarpone',
        name: 'Chantilly Mascarpone',
        category: 'Couverture',
        difficulty: 'Facile',
        cookingTime: '10 min',
        servings: 'Pour 1 gâteau',
        image: '/src/images/chantilly.jpeg',
        description: 'Une chantilly onctueuse avec du mascarpone.',
        ingredients: [
            '40g de sucre',
            '500g de mascarpone',
            '500ml de crème liquide entière',
            'Arôme de vanille'
        ],
        instructions: [
            'Battre la mascarpone, le sucre et l\'arôme.',
            'Incorporer la crème liquide.',
            'Prête à l\'utilisation.'
        ],
        tags: ['crème', 'mascarpone', 'sucre']
    },
    {
        id: 'creme-noisette',
        name: 'Crème à la Noisette',
        category: 'Couverture',
        difficulty: 'Facile',
        cookingTime: '15 min',
        servings: 'Pour 1 gâteau',
        image: '/src/images/creme-noisette.jpeg',
        description: 'Une crème délicate au goût intense de noisettes.',
        ingredients: [
            '1 œuf',
            '250g de beurre',
            '100g de sucre',
            '150g de noisette en poudre',
            'Arôme d\'amande amère'
        ],
        instructions: [
            'Travailler le beurre en pommade.',
            'Ajouter le sucre et l\'œuf.',
            'Incorporer la noisette en poudre.',
            'Travailler avec une marise.'
        ],
        tags: ['beurre', 'noisette', 'sucre']
    },
    {
        id: 'crumble',
        name: 'Crumble',
        category: 'Desserts',
        difficulty: 'Facile',
        cookingTime: '25 min',
        servings: '6 personnes',
        image: '/src/images/crumble.jpeg',
        description: 'Dessert fruité avec un croustillant doré.',
        ingredients: [
            '300g de fruits',
            '200g de farine',
            '150g de sucre',
            '150g de beurre'
        ],
        instructions: [
            'Préchauffer le four à 180°C.',
            'Préparer le mélange de crumble.',
            'Répartir sur les fruits.',
            'Cuire jusqu\'à dorure.'
        ],
        tags: ['fruits', 'farine', 'beurre', 'sucre']
    },
    {
        id: 'brownies',
        name: 'Brownies',
        category: 'Desserts',
        difficulty: 'Facile',
        cookingTime: '25 min',
        servings: '8 personnes',
        image: '/src/images/brownie.jpeg',
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
        image: '/src/images/tiramisu.jpeg',
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
        image: '/src/images/cookies.jpeg',
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
        image: '/src/images/crepes.jpeg',
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
        image: '/src/images/cupcakes.jpeg',
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
        image: '/src/images/fondant-chocolat.jpeg',
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
        image: '/src/images/gaufres.jpeg',
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
    },
    {
        id: 'creme-mousseline',
        name: 'Crème Mousseline',
        category: 'Couverture',
        difficulty: 'Moyen',
        cookingTime: '30 min',
        servings: 'Pour 1 gâteau',
        image: '/src/images/creme-mousseline.jpeg',
        description: 'Crème pâtissière enrichie de beurre, légère et savoureuse.',
        ingredients: [
            '500ml de lait',
            '6 jaunes d\'œufs',
            '125g de sucre',
            '50g de maïzena',
            '200g de beurre',
            'Arôme de vanille'
        ],
        instructions: [
            'Préparer la crème pâtissière avec lait, jaunes, sucre et maïzena.',
            'Laisser refroidir complètement.',
            'Travailler le beurre en pommade.',
            'Incorporer progressivement la crème pâtissière au beurre.',
            'Fouetter jusqu\'à obtenir une texture lisse et aérée.'
        ],
        tags: ['crème', 'beurre', 'œufs', 'lait', 'vanille']
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
