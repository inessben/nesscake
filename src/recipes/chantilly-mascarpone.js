import React, { useState } from 'react';

export function ChantillyMascarpone() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Chantilly mascarpone</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Chantilly mascarpone</h2>
                        <p className="popin-ingredients">
                            - 40g de sucre
                            <br />
                            - 500g de mascarpone
                            <br />
                            - 500ml de crème liquide entière
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Battre la mascarpone, le sucre et l'arôme (de préference au robot pâtissier)
                            <br />
                            - Toujours dans le robot, y incorporer la crème liquide.
                            <br />
                            - Prête à l'utilisation dans l'immédiat.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
