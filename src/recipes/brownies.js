import React, { useState } from 'react';

export function Brownies() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Brownies</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Brownies</h2>
                        <p className="popin-ingredients">
                            - 3 oeufs
                            <br />
                            - 100g de sucre
                            <br />
                            - 150g de beurre
                            <br />
                            - 180g de chocolat
                            <br />
                            - 60g de farine
                            <br />
                            - 40g de cacao en poudre
                            <br />
                            - 10g de Nutella
                            <br />
                            - 1 pincéee de sel
                            <br />
                            - 50g de noisettes concassées
                        </p>
                        <p className="popin-procedure">
                            - Faire fondre le chocolat et le beurre.
                            <br />
                            - Dans un autre récipient, battre les œufs et le sucre (de préference au robot pâtissier) pendant 5mn.
                            <br />
                            - Ajouter le chocolat fondu (il faut qu'il ait refroidi), le Nutella, le sel.
                            <br />
                            - Incorporer la farine et le cacao en poudre.
                            <br />
                            - Pour finir, ajouter les noisettes à votre pâte.
                            <br />
                            - Enfourner le moule chemisé (avec du papier cuisson) <span className="underline">à 180 degrès pendant 20mn à chaleur tournante.</span>
                            <br />
                            - Après l'avoir laisser refroidir, pré-découper des parts du brownies et décorez-le avec du coulis de chocolat, des noisettes, ..
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
