export const getImagePath = (imageName) => {
  return `/images/${imageName}`;
};

export const availableImages = {
  'pancakes.jpeg': 'pancakes.jpeg',
  'fraisier.jpeg': 'fraisier.jpeg',
  'genoise.jpeg': 'genoise.jpeg',
  'creme-au-beurre.jpeg': 'creme-au-beurre.jpeg',
  'ganache-montee.jpeg': 'ganache-montee.jpeg',
  'caramel-beurre-sale.jpeg': 'caramel-beurre-sale.jpeg',
  'chantilly.jpeg': 'chantilly.jpeg',
  'creme-noisette.jpeg': 'creme-noisette.jpeg',
  'crumble.jpeg': 'crumble.jpeg',
  'brownie.jpeg': 'brownie.jpeg',
  'tiramisu.jpeg': 'tiramisu.jpeg',
  'cookies.jpeg': 'cookies.jpeg',
  'crepes.jpeg': 'crepes.jpeg',
  'cupcakes.jpeg': 'cupcakes.jpeg',
  'fondant-chocolat.jpeg': 'fondant-chocolat.jpeg',
  'gaufres.jpeg': 'gaufres.jpeg',
  'creme-mousseline.jpeg': 'creme-mousseline.jpeg',
  'actu1.png': 'actu1.png',
  'actu2.png': 'actu2.png',
  'actu3.png': 'actu3.png',
  'flowered-cake.png': 'flowered-cake.png',
  'green-cookies.png': 'green-cookies.png',
  'heart-cake.png': 'heart-cake.png',
  'kinder-cupcakes.png': 'kinder-cupcakes.png',
  'pinacolacake.png': 'pinacolacake.png',
  'psf-cupcakes.png': 'psf-cupcakes.png',
  'spidercake.png': 'spidercake.png',
  'logo.png': 'logo.png',
  'instagram.png': 'instagram.png',
  'whatsapp.png': 'whatsapp.png',
  'mail.png': 'mail.png',
  'placeholder-recipe.jpg': 'placeholder-recipe.jpg'
};

export const imageExists = (imageName) => {
  return availableImages.hasOwnProperty(imageName);
};
