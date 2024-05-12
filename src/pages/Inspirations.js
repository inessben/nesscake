import '../style/style.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

import greenCookies from '../images/green-cookies.png';
import pinacolaCake from '../images/pinacolacake.png';
import spiderCake from '../images/spidercake.png';
import brunchVideo from '../images/brunch-kawai.mov';
import chocolateCakeVideo from '../images/chocolate-cake.mov';
import aidCakes from '../images/aid-cakes.png';
import pinacolaCakeVideo from '../images/pinacolacake.mov';
import speculoosTiramisuVideo from '../images/speculoos-tiramisu.mov';
import cupcakesVideo from '../images/cupcakes.mov';
import flowersCakeVideo from '../images/flowers-cake.mov';
import halzenutCakeVideo from '../images/halzenut-cake.mov';
import pinkCakeVideo from '../images/pink-cake.mov';

function Inspirations() {
    return (
        <div className="inspirations">
            <Header />
            <h1 className="title-inspirations">Les nesscake inspiration's</h1>
            <div className="my-inspirations">

                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={brunchVideo} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={chocolateCakeVideo} type="video/mp4" />
                </video>

                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={pinacolaCakeVideo} type="video/mp4" />
                </video>

                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={speculoosTiramisuVideo} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={cupcakesVideo} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={flowersCakeVideo} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={halzenutCakeVideo} type="video/mp4" />
                </video>
                <video autoPlay loop muted className="inspiration" alt="nesscake">
                    <source src={pinkCakeVideo} type="video/mp4" />
                </video>

                <img src={greenCookies} className="inspiration" alt="nesscake" />
                <img src={pinacolaCake} className="inspiration" alt="nesscake" />
                <img src={aidCakes} className="inspiration" alt="nesscake" />
                <img src={spiderCake} className="inspiration" alt="nesscake" />
            </div>
            <Footer />
        </div>
    );
}

export default Inspirations;
