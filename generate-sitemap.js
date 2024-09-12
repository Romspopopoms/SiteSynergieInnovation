const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

// Liste complète des liens pour toutes les pages de votre site
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/VoxUnity', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityCharteGraphique', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityCom', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityLogo', changefreq: 'weekly', priority: 0.8 },
  { url: '/VoxUnityWebDesign', changefreq: 'weekly', priority: 0.8 },
  { url: '/Accueil', changefreq: 'weekly', priority: 0.8 },
  { url: '/ImmaMissio', changefreq: 'weekly', priority: 0.8 },
  { url: '/ImmaMissioCharteGraphique', changefreq: 'weekly', priority: 0.8 },
  { url: '/ImmaMissioWebDesign', changefreq: 'weekly', priority: 0.8 },
  { url: '/ImmaMissioCom', changefreq: 'weekly', priority: 0.8 },

  // Autres pages spécifiques pour ImmaMissio ou toute autre partie du site
  { url: '/SynergieInnovation', changefreq: 'weekly', priority: 0.8 },
  { url: '/Contact', changefreq: 'weekly', priority: 0.8 },

  // Ajout d'autres pages si besoin
];

// Création du flux d'écriture pour le fichier sitemap.xml
const sitemapStream = new SitemapStream({ hostname: 'https://SynergieInnovation.fr' });
const writeStream = createWriteStream('./public/sitemap.xml');

// Envoie du flux vers le fichier sitemap
sitemapStream.pipe(writeStream);

// Ajout des URLs dans le sitemap
links.forEach((link) => sitemapStream.write(link));

// Fin du flux une fois toutes les URLs ajoutées
sitemapStream.end();

// Gestion des erreurs lors de l'écriture du fichier
writeStream.on('error', (err) => {
  console.error('Erreur lors de la création du sitemap:', err);
});

// Confirmation lorsque le sitemap est créé avec succès
writeStream.on('finish', () => {
  console.log('Sitemap créé avec succès !');
});
