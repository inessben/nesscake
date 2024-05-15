import '../style/hacks.css';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import chantilly from '../images/chantilly.jpeg';
import cupcakes from '../images/cupcakes.jpeg';
import fondant from '../images/fondant-chocolat.jpeg';
import ganache from '../images/ganache-montee.jpeg';
import genoise from '../images/genoise.jpeg';
import pancakes from '../images/pancakes.jpeg';
import tiramisu from '../images/tiramisu.jpeg';


function Hacks() {
    return (
        <div className="hack">
            <Header />
            <h1 className="title-hacks">Les nesscake astuce's</h1>
            <div className="hacks">
                <div className="my-hacks">
                    <h2><span className="underline">Génoise</span></h2>
                    <img src={genoise} className="generate-image" alt="pastery" />
                    <p>Pour garder votre génoise moelleuse, enroulez-la dans un torchon jusqu’à qu’elle refroidisse pour ensuite la cellophaner.</p>
                </div>

                <div className="my-hacks">
                    <h2><span className="underline">Pancakes</span></h2>
                    <img src={pancakes} className="generate-image" alt="pastery" />
                    <p>Mettez votre pâte à pancakes dans une bouteille vide. Faites un trou sur le bouchon pour pouvoir faire des ronds parfaits sur la poêle.</p>
                </div>

                <div className="my-hacks">
                    <h2><span className="underline">Tiramisu</span></h2>
                    <img src={tiramisu} className="generate-image" alt="pastery" />
                    <p>Après 24h au frais, le tiramisu a toujours meilleur goût. Les biscuits cuillère sont plus adaptés que les boudoirs pour les tiramisus.</p>
                </div>


                <div className="my-hacks">
                    <h2><span className="underline">Ganache montée</span></h2>
                    <img src={ganache} className="generate-image" alt="pastery" />
                    <p>Mélanger les chocolats noirs, blanc et au lait pour plus de gourmandises !</p>
                </div>


                <div className="my-hacks">
                    <h2><span className="underline">Cupcakes</span></h2>
                    <img src={cupcakes} className="generate-image" alt="pastery" />
                    <p>Si vous n’avez plus de disques à cupcakes, vous pouvez utiliser du papier cuisson découper en petits carrés à introduire dans les moules.</p>
                </div>

                <div className="my-hacks">
                    <h2><span className="underline">Fondants au chocolat</span></h2>
                    <img src={fondant} className="generate-image" alt="pastery" />
                    <p>Dans les fondants individuel, mettez un carré de chocolat (ou de Kinder) directement dans le moule avant cuisson.</p>
                </div>

                <div className="my-hacks">
                    <h2><span className="underline">Chantilly mascarpone</span></h2>
                    <img src={chantilly} className="generate-image" alt="pastery" />
                    <p>Faites toujours votre crème mascarpone 5mn avant utilisation. Plus vous la laissez au frais, moins elle sera utilisable.</p>
                </div>
            </div>
        </div>
    );
}

export default Hacks;

