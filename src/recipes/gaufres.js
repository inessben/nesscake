import React, { useState } from 'react';

export function Gaufres() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Gaufres</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Gaufres</h2>
                        <p className="popin-ingredients">
                            - 3 oeufs
                            <br />
                            - 190g de farine
                            <br />
                            - 70g de sucre
                            <br />
                            - 240ml de lait
                            <br />
                            - 60g de beurre
                            <br />
                            - 1 pincée de sel
                            <br />
                            - Arôme de vanille
                            <br />
                            - 100g de levure chimique
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Dans un récipient, ajouter la farine, la levure et le sucre.
                            <br />
                            - Ajouter les jaunes d'oeufs, le lait et le beurre fondu.
                            <br />
                            - Puis l'arôme et le sucre.
                            <br />
                            - Et enfin les blancs d'oeufs monter en neige.
                            <br />
                            - Laissez reposer 30mn sous un torchon avant utilisation.
                            <br />
                            - Mettre une louche de pâte dans le gauffrier puis laissez cuire.
                            <br />
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
