import React, { useState } from 'react';

export function CremeNoisette() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Crème à la noisette</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Crème à la noisette</h2>
                        <p className="popin-ingredients">
                            - 1 oeuf
                            <br />
                            - 250g de beurre
                            <br />
                            - 100g de sucre
                            <br />
                            - 150g de noisette en poudre
                            <br />
                            - Arôme d'amande amère
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Détendre le beurre dans un récipient pour qu'il devienne pommade.
                            <br />
                            - Dans le robot patissier, battez le beurre pommade et le sucre.
                            <br />
                            - Ajouter l'oeuf et l'arôme, puis la noisette en poudre.
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
