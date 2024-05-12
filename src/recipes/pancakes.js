import React, { useState } from 'react';

export function Pancakes() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Pancakes</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Pancakes</h2>

                        <p className="popin-ingredients">
                            - 2 œufs
                            <br />
                            - 20g de sucre
                            <br />
                            - 80g de farine
                            <br />
                            - 15cl de lait
                            <br />
                            - 30cl d’huile de tournesol
                            <br />
                            - 5g de levure chimique
                            <br />
                            - Arôme de vanille
                        </p>
                        <p className="popin-procedure">
                            - Battre les œufs et le sucre jusqu’à que le mélange blanchisse.
                            <br />
                            - Ajouter le lait et l'huile.
                            <br />
                            - Puis la farine et la levure.
                            <br />
                            - Transvaser le mélange dans une bouteille vide, pour faire des cercles parfaits.
                            <br />
                            - Sur feu moyen, faire cuire <span className="underline">3 minutes de chaque coté à feu moyen.</span>
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
