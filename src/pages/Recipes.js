import '../style/recipes.css';
import { Header } from '../components/header.js';
import { Genoise } from '../recipes/genoise.js';
import { MollyCake } from '../recipes/molly-cake.js';
import { FondantChocolat } from '../recipes/fondant-chocolat.js';
import { GanacheMontee } from '../recipes/ganache-montee.js';
import { ChantillyMascarpone } from '../recipes/chantilly-mascarpone.js';
import { CremeBeurre } from '../recipes/creme-beurre.js';
import { CaramelBeurreSale } from '../recipes/caramel-beurre-sale.js';
import { CremeNoisette } from '../recipes/creme-noisette.js';
import { Pancakes } from '../recipes/pancakes.js';
import { Brownies } from '../recipes/brownies.js';
import { Cupcakes } from '../recipes/cupcakes.js';
import { Tiramisu } from '../recipes/tiramisu.js';
import { Crepes } from '../recipes/crepes.js';
import { Gaufres } from '../recipes/gaufres.js';
import { Cookies } from '../recipes/cookies.js';

function Recipes() {
    return (
        <div className="recipes">
            <Header />
            <h1 className="title-recipes">Les nesscake recette's</h1>
            <div className="content-recipes">
                <div className="my-recipes">
                    <Pancakes />
                    <Brownies />
                    <Cupcakes />
                    <Tiramisu />
                    <Crepes />
                    <Gaufres />
                    <Cookies />
                    <Genoise />
                    <MollyCake />
                    <FondantChocolat />
                    <GanacheMontee />
                    <ChantillyMascarpone />
                    <CremeBeurre />
                    <CaramelBeurreSale />
                    <CremeNoisette />
                </div>
            </div>
        </div >

    );
}

export default Recipes;
