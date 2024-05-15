import React, { useState } from 'react';

export function Cookies() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Cookies</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Cookies</h2>
                        <p className="popin-ingredients">
                            - 1 oeuf
                            <br />
                            - 120g de sucre
                            <br />
                            - 120g de beurre
                            <br />
                            - 180g de farine
                            <br />
                            - Levure chimique
                            <br />
                            - 1 pincée de sel
                            <br />
                            - Pépite de chocolat
                            <br />
                            - Noisettes concassées
                        </p>
                        <p className="popin-procedure">
                            - A feu moyen, faire fondre le beurre jusqu'à qu'il devienne noisette (brun).
                            <br />
                            - Dans un récipient, mélanger le beurre noisette et le sucre.
                            <br />
                            - Ajouter le sel, l'oeuf, les pépites de chocolat et les noisettes.
                            <br />
                            - Puis la farine et la levure chimique.
                            <br />
                            - A partir de ce moment, vous pouvez former une boule avec vos mains.
                            <br />
                            - Laisser la reposer 30mn au frais.
                            <br />
                            - Formez des petites boules bien rondes que vous allez espacer sur une plaque de cuisson sulfurisé.
                            <br />
                            - Enfourner <span className="underline">à 200 degrès pendant 10mn à chaleur tournante.</span>
                            <br />
                            - Après les avoir laisser refroidir, remplisser une seringue de Nutella et remplissez-les un peu partout de manière aléatoire sur le cookie.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
