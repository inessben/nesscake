import React, { useState } from 'react';

export function MollyCake() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Molly cake</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Molly cake</h2>
                        <p className="popin-ingredients">
                            - 3 œufs
                            <br />
                            - 250g de sucre
                            <br />
                            - 250g de farine
                            <br />
                            - 250ml de crème liquide entière 30% mg
                            <br />
                            - 10g de levure chimique
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Battre les œufs, le sucre et l'arôme (de préference au robot pâtissier) pendant 12mn. Le mélange doit blanchir et doubler de volume.
                            <br />
                            - Puis ajouter la farine tamisé et la levure à l'aide d'une marise.
                            <br />
                            - Dans un autre récipient, montez en chantilly la crème liquide (bien froide). Et ajoutez-la dans le premier récipient.
                            <br />
                            - Enfourner le moule chemisé (avec du papier cuisson) <span className="underline">à 160 degrès pendant 1h15mn à chaleur tournante.</span>
                            <br />
                            - Une fois cuite, laisser la génoise refroidir sous un torchon propre. Puis lorsqu'elle est a température ambiante, enroulez-la avec du papier film.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
