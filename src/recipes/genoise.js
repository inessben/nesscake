import React, { useState } from 'react';

export function Genoise() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Génoise</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Génoise</h2>
                        <p className="popin-ingredients">
                            - 6 œufs
                            <br />
                            - 160g de sucre
                            <br />
                            - 160g de farine
                            <br />
                            - 5g de levure chimique
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Battre les œufs et le sucre (de préference au robot pâtissier) pendant 12mn. Le mélange doit blanchir et doubler de volume.
                            <br />
                            - Puis ajouter la farine tamisé et la levure à l'aide d'une marise.
                            <br />
                            - Enfourner le moule chemisé (avec du papier cuisson) <span className="underline">à 160 degrès pendant 55mn à chaleur tournante.</span>
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
