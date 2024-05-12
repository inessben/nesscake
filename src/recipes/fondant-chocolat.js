import React, { useState } from 'react';

export function FondantChocolat() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Fondant au chocolat</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title" >Fondant au chocolat</h2>

                        <p className="popin-ingredients">
                            - 4 œufs
                            <br />
                            - 150g de chocolat
                            <br />
                            - 100g de beurre
                            <br />
                            - 50g de sucre
                            <br />
                            - 20g de maïzena
                            <br />
                            - 20g d'amande en poudre
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Faire fondre le chocolatet le beurre au bain-marie.
                            <br />
                            - Dans un autre récipient, battre les oeufs et le sucre.
                            <br />
                            - Ajouter le chocolat dans le récipient, puis la maïzena et l'amande en poudre.
                            <br />
                            - Enfourner <span className="underline">à 180 degrès pendant 15mn à chaleur tournante.</span>
                            <br />
                            - Laisser refroidir le fondant avant de démouler.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
