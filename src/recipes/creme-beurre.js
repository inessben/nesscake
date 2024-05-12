import React, { useState } from 'react';

export function CremeBeurre() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Crème au beurre</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Crème au beurre</h2>

                        <p className="popin-ingredients">
                            - 400g de lait concenté
                            <br />
                            - 500g de beurre
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Détendre le beurre dans un récipient pour qu'il devienne pommade.
                            <br />
                            - Dans le robot patissier, battez le beurre pommade pendant 12mn. Il doit blanchir.
                            <br />
                            - Ajouter l'arôme, puis le lait, battre (toujours dans le robot) à vitesse minimal pendant 4mn.
                            <br />
                            - Puis augmenter la vitesse, petit à petit, pendant 4mn.
                            <br />
                            - Continuez de travailler la crème à la marise pour chasser les bulles d'air.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
