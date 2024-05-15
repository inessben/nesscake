import React, { useState } from 'react';

export function CaramelBeurreSale() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Caramel beurre salé</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Caramel au beurre salé</h2>
                        <p className="popin-ingredients">
                            - 300g de sucre
                            <br />
                            - 150g de beurre
                            <br />
                            - 1 pincée de fleur de sel
                            <br />
                            - 30cl de crème liquide entière 30% mg
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Sur feu doux, faire fondre le sucre (sans y toucher) jusqu'à qu'il devienne brun.
                            <br />
                            - Ajouter le beurre et le sel (ou directement le beurre salé) puis mélanger à la cuillière en bois.
                            <br />
                            - Hors du feu, vous pouvez ajouter la crème liquide.
                            <br />
                            - Conservez-le dans un pot de confiture vide au frigo.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
