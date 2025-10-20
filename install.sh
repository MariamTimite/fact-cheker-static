#!/bin/bash

echo "🚀 Installation de WeYeCheck..."

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé. Veuillez installer Node.js v18+"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé. Veuillez installer npm"
    exit 1
fi

echo "✅ Node.js et npm détectés"

# Installer les dépendances du projet principal
echo "📦 Installation des dépendances principales..."
npm install

# Installer les dépendances du serveur
echo "📦 Installation des dépendances du serveur..."
cd server
npm install
cd ..

# Installer les dépendances du client
echo "📦 Installation des dépendances du client..."
cd client
npm install
cd ..

# Créer les fichiers .env
echo "🔧 Configuration des variables d'environnement..."

# Fichier .env pour le serveur
if [ ! -f "server/.env" ]; then
    echo "Création du fichier .env pour le serveur..."
    cat > server/.env << EOF
# Environment
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/factcheck

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production

# External APIs
OPENAI_API_KEY=your_openai_api_key_here
GOOGLE_VISION_API_KEY=your_google_vision_api_key_here
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
EOF
    echo "✅ Fichier .env créé pour le serveur"
else
    echo "⚠️  Le fichier .env existe déjà pour le serveur"
fi

# Fichier .env pour le client
if [ ! -f "client/.env" ]; then
    echo "Création du fichier .env pour le client..."
    cat > client/.env << EOF
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_ENVIRONMENT=development
EOF
    echo "✅ Fichier .env créé pour le client"
else
    echo "⚠️  Le fichier .env existe déjà pour le client"
fi

echo ""
echo "🎉 Installation terminée !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Assurez-vous que MongoDB est installé et en cours d'exécution"
echo "2. Configurez vos clés API dans server/.env"
echo "3. Démarrez l'application avec : npm run dev"
echo ""
echo "🔗 URLs :"
echo "   - Frontend: http://localhost:3000"
echo "   - Backend: http://localhost:5000"
echo "   - API Health: http://localhost:5000/health"
echo ""
echo "📚 Documentation :"
echo "   - README.md pour plus d'informations"
echo "   - Consultez les commentaires dans le code"
echo ""
echo "🚀 Bon développement !" 