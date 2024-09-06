const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Configuration de base du sitemap
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/VoxUnity', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityCharteGraphique', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityCom', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityLogo', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityWebDesign', changefreq: 'weekly', priority: 0.8 },
  { url: '/SynergieInnovationPage', changefreq: 'weekly', priority: 0.8 },
];

// Utilisation de createWriteStream pour écrire dans le fichier sitemap.xml
const sitemapStream = new SitemapStream({ hostname: 'https://SynergieInnovation.fr' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Écouteur pour écrire les liens dans le fichier sitemap
sitemapStream.pipe(writeStream);

// Ajoutez les URLs au sitemap
links.forEach((link) => sitemapStream.write(link));

// Fermez le flux une fois toutes les URLs ajoutées
sitemapStream.end();

// Gestion des erreurs
writeStream.on('error', (err) => {
  console.error('Error writing sitemap:', err);
});

// Confirmation une fois terminé
writeStream.on('finish', () => {
  console.log('Sitemap created successfully!');
});
