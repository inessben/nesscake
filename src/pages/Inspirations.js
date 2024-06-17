import '../style/inspirations.css';
import { Header } from '../components/header.js';

import greenCookies from '../images/green-cookies.png';
import pinacolaCake from '../images/pinacolacake.png';
import spiderCake from '../images/spidercake.png';
import box from '../images/box.png';
import pinApple from '../images/pinapple.png';
import heartCake from '../images/heart-cake.png';
import floweredCake from '../images/flowered-cake.png';


function Inspirations() {
    return (
        <div className="inspirations">
            <Header />
            <h1 className="title-inspirations">Les nesscake inspiration's</h1>
            <div className="my-inspirations">
                <img src={greenCookies} className="inspiration" alt="nesscake" />
                <img src={pinacolaCake} className="inspiration" alt="nesscake" />
                <img src={spiderCake} className="inspiration" alt="nesscake" />
                <img src={box} className="inspiration" alt="nesscake" />
                <img src={pinApple} className="inspiration" alt="nesscake" />
                <img src={heartCake} className="inspiration" alt="nesscake" />
                <img src={floweredCake} className="inspiration" alt="nesscake" />
            </div>
        </div>
    );
}

export default Inspirations;
