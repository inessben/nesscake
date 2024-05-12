import React, { useState } from 'react';

export function Tiramisu() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Tiramisu</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title" >Tiramisu</h2>

                        <p className="popin-ingredients">
                            - 3 œufs
                            <br />
                            - 100g sucre
                            <br />
                            - 500g de mascarpone
                            <br />
                            - Café (lait ou sirop)
                            <br />
                            - Biscuits cuillère
                            <br />
                            - Cacao en poudre
                        </p>
                        <p className="popin-procedure">
                            - Blanchir les jaunes avec du sucre.
                            <br />
                            - Dans un autre récipient, montez au batteur les blancs en neige.
                            <br />
                            - Ajouter la mascarpone avec le fouet manuel au premier mélange, puis les blancs.
                            <br />
                            - Au frais !
                            <br />
                            - 30mn plus tard, tremper les biscuits dans le liquide que vous aurez choisi, et disposez-les dans votre plat.
                            <br />
                            - Ajouter du chocolat, spéculoos, fruits ... pour plus de gourmandises, puis recouvrez de la crème qu'on a mis au frais.
                            <br />
                            - Répetez cette opération 2/3 fois et décorez à votre guise !
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
