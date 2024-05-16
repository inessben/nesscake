import React, { useState } from 'react';

export function Cupcakes() {
    const [showPopin, setShowPopin] = useState(false);

    const closePopin = () => {
        setShowPopin(false);
    };

    return (
        <div className="recipes-card">
            <h2 className="popin-opener" onClick={() => setShowPopin(true)}>Cupcakes</h2>
            {showPopin && (
                <div className="popin is-open">
                    <div className="popin-content">
                        <h2 className="popin-title">Cupcakes</h2>
                        <p className="popin-ingredients">
                            - 3 œufs
                            <br />
                            - 160g de sucre
                            <br />
                            - 160g de beurre mou
                            <br />
                            - 300g de farine
                            <br />
                            - 100ml de crème liquide
                            <br />
                            - 5g de levure chimique
                            <br />
                            - Arôme de vanille
                            <br />
                        </p>
                        <p className="popin-procedure">
                            - Battre le beurre et le sucre (de préference au robot pâtissier) lorsque vous obtenez une pâte homogène, vous pouvez ajouter les oeufs.
                            <br />
                            - Toujours dans le robot, ajoutez la farine tamisé et la levure. Puis incorporer à la marise la crème liquide.
                            <br />
                            - Enfourner <span className="underline">à 180 degrès pendant 18mn à chaleur tournante.</span>
                            <br />
                            - Une fois cuits, laisser les cupcakes refroidir sous un torchon propre.
                            <br />
                            - Lorsqu'ils sont a température ambiante, recouvrez-les de papier film jusqu'à que vous les décoriez.
                        </p>
                        <button className="close" onClick={closePopin}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
}
