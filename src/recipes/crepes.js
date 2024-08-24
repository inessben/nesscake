import React, { useState } from 'react';

export function Crepes() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Crêpes</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Crêpes</h2>
                        <p className="popin-ingredients">
                            - 250g de farine
                            <br />
                            - 60g de sucre
                            <br />
                            - 6 oeufs
                            <br />
                            - 80ml d'huile
                            <br />
                            - 80g de beurre fondue
                            <br />
                            - 750ml de lait
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Dans un récipient, ajouter la farine, le sucre et les oeufs un à un. Mélanger.
                            <br />
                            - Ajouter l'arôme, l'huile et le beurre.
                            <br />
                            - Puis enfin, le lait, en trois fois.
                            <br />
                            - Si possible, laisser reposer la pâte au moins 30minutes.
                            <br />
                            - Après repos, faire cuire à feu moyen les crêpes sur une poêle anti-adhésive.
                            <br />
                            - Tartinez-les de nutella, pâte de pistache, pâte de pralin, confitures ou miel.
                            <br />
                            - Pliez-les en 4 (triangle) et mangez-les chaudes !
                            <br />
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
