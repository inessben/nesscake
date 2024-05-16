import React, { useState } from 'react';

export function PainPerdu() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Brioches perdues</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Brioches perdues</h2>
                        <p className="popin-ingredients">
                            - 2 oeufs
                            <br />
                            - 200ml de lait
                            <br />
                            - 20g de sucre
                            <br />
                            - Beurre
                            <br />
                            - Brioche
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Dans un récipient, battre les oeufs et le sucre.
                            <br />
                            - Ajouter l'arôme et le lait.
                            <br />
                            - Trempez vos brioches (découpées en tranches) dans le mélange.
                            <br />
                            - Il faut que vos brioches soient bien imbibées.
                            <br />
                            - Mettez du beurre dans une poêle sur feu moyen.
                            <br />
                            - Une fois le beurre fondu, faites dorer les brioches environ 2mn de chaques cotés.
                            <br />
                            - Remplissez une assiette de sucre au préalable et lorsque la brioche est dorée, trempez-la dans cette assiette des deux cotés.
                            <br />
                            - Vos brioches sont prêtes disposez-les joliement sur une assiette, décorez avec du caramel ou Nutella
                            <br />
                            - Encore meilleur avec de la glace à la vanille à coté !
                            <br />
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
