import '../style/inspirations.css';
import { Header } from '../components/header.js';

import greenCookies from '../images/green-cookies.png';
import pinacolaCake from '../images/pinacolacake.png';
import spiderCake from '../images/spidercake.png';
import heartCake from '../images/heart-cake.png';
import floweredCake from '../images/flowered-cake.png';
import cupCakes from '../images/psf-cupcakes.png';
import kinderCupcakes from '../images/kinder-cupcakes.png';


function Inspirations() {
    return (
        <div className="inspirations">
            <Header />
            <h1 className="title-inspirations">Nesscake's inspirations</h1>
            <div className="my-inspirations">
                <img src={greenCookies} className="inspiration" alt="nesscake" />
                <img src={floweredCake} className="inspiration" alt="nesscake" />
                <img src={pinacolaCake} className="inspiration" alt="nesscake" />
                <img src={spiderCake} className="inspiration" alt="nesscake" />
                <img src={heartCake} className="inspiration" alt="nesscake" />
                <img src={cupCakes} className="inspiration" alt="nesscake" />
                <img src={kinderCupcakes} className="inspiration" alt="nesscake" />
            </div>
        </div>
    );
}

export default Inspirations;
