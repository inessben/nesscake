import React, { useState } from 'react';

export function GanacheMontee() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Ganache montée</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Ganache montée</h2>
                        <p className="popin-ingredients">
                            - 300g de chocolat
                            <br />
                            - 30cl crème liquide entière 30%mg
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Sur feu doux, faire chauffer 15cl de crème liquide
                            <br />
                            - Dans un récipient, ajouter le chocolat et y incorporer la crème chaude, à l'aide d'une marise.
                            <br />
                            - Lorsque le chocolat a bien fondu, ajouter la crème liquide froide.
                            <br />
                            - Battez énérgiquement au fouet.
                            <br />
                            - Laisser au frais <span className="underline">toute la nuit.</span>
                            <br />
                            - Une fois qu'elle a bien pris au frais, on la passe au robot 6mn pour qu'elle monte.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
