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
                            - 2 œufs
                            <br />
                            - 12cl de lait
                            <br />
                            - 50g de beurre
                            <br />
                            - 125g de farine
                            <br />
                            - 40g de sucre
                            <br />
                            - Arôme de vanille
                        </p>
                        <p className="popin-procedure">
                            - Battre les œufs et le sucre.
                            <br />
                            - Ajouter le lait, l'arôme, puis le beurre fondu, toujours à l'aide d'un fouet.
                            <br />
                            - Finir par la farine.
                            <br />
                            - Laissez reposer 30mn sous un torchon propre.
                            <br />
                            Graissez votre poêle avec du beurre, puis y verser une louche de pâte à crêpes.
                            <br />
                            - Sur feu moyen, faire cuire jusqu’à que vous voyez des bulles se former sur la crêpe.
                            <br />
                            - Vous pouvez la retourner, et continuer le processus.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
