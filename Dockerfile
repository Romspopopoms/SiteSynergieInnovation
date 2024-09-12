# Utiliser une image node
FROM node:16-buster-slim

# Installer les dépendances de Puppeteer
RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk-bridge2.0-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxrandr2 \
    libgbm1 \
    libpango-1.0-0 \
    libasound2 \
    libpangocairo-1.0-0 \
    libcups2 \
    libxss1 \
    libxtst6 \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    xdg-utils \
    wget

# Copier les fichiers dans le conteneur
COPY . /app
WORKDIR /app

# Installer les dépendances
RUN npm install

# Construire l'application et exécuter React Snap
RUN npm run build && npm run postbuild

# Exposer le port sur lequel l'application sera servie
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
