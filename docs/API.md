# API Documentation - WeYeCheck

## Base URL
```
http://localhost:5000/api
```

## Authentication
L'API utilise JWT (JSON Web Tokens) pour l'authentification. Incluez le token dans le header Authorization :
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### POST /auth/register
Inscription d'un nouvel utilisateur.

**Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "username": "john_doe",
    "email": "john@example.com",
    "profile": {
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```

#### POST /auth/login
Connexion utilisateur.

**Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token-here",
  "user": {
    "id": "user-id",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

#### GET /auth/me
Récupérer le profil de l'utilisateur connecté.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user-id",
    "username": "john_doe",
    "email": "john@example.com",
    "profile": {
      "firstName": "John",
      "lastName": "Doe"
    }
  }
}
```

### Fact Checking

#### POST /factcheck/submit
Soumettre un nouveau fact check.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Body:**
```json
{
  "content": {
    "text": "Contenu à vérifier...",
    "url": "https://example.com/article",
    "mediaUrl": "https://example.com/image.jpg",
    "mediaType": "image"
  },
  "metadata": {
    "category": "politics",
    "tags": ["politique", "élections"],
    "priority": "medium"
  }
}
```

**Response:**
```json
{
  "success": true,
  "factCheck": {
    "id": "fact-check-id",
    "content": {
      "text": "Contenu à vérifier...",
      "url": "https://example.com/article"
    },
    "verification": {
      "status": "pending",
      "score": 0
    },
    "metadata": {
      "category": "politics",
      "submittedBy": "user-id"
    },
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### GET /factcheck
Récupérer la liste des fact checks.

**Query Parameters:**
- `page` (number): Numéro de page (défaut: 1)
- `limit` (number): Nombre d'éléments par page (défaut: 10)
- `status` (string): Filtrer par statut (pending, verified, false, misleading)
- `category` (string): Filtrer par catégorie
- `search` (string): Recherche textuelle
- `sortBy` (string): Trier par (createdAt, views, score)
- `sortOrder` (string): Ordre de tri (asc, desc)

**Response:**
```json
{
  "success": true,
  "docs": [
    {
      "id": "fact-check-id",
      "content": {
        "text": "Contenu vérifié..."
      },
      "verification": {
        "status": "verified",
        "score": 85
      },
      "metadata": {
        "category": "politics",
        "submittedBy": {
          "id": "user-id",
          "username": "john_doe"
        }
      }
    }
  ],
  "totalDocs": 100,
  "limit": 10,
  "page": 1,
  "totalPages": 10
}
```

#### GET /factcheck/:id
Récupérer un fact check spécifique.

**Response:**
```json
{
  "success": true,
  "factCheck": {
    "id": "fact-check-id",
    "content": {
      "text": "Contenu vérifié...",
      "url": "https://example.com/article"
    },
    "verification": {
      "status": "verified",
      "score": 85,
      "sources": [
        {
          "name": "Reuters",
          "url": "https://reuters.com",
          "credibility": 95,
          "type": "media"
        }
      ]
    },
    "analysis": {
      "aiAnalysis": {
        "summary": "Analyse automatique...",
        "keyPoints": ["Point 1", "Point 2"],
        "redFlags": []
      }
    },
    "engagement": {
      "views": 150,
      "likes": 25,
      "comments": []
    }
  }
}
```

#### PUT /factcheck/:id/verify
Vérifier un fact check (pour fact-checkers et experts).

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Body:**
```json
{
  "verification": {
    "status": "verified",
    "score": 85,
    "sources": [
      {
        "name": "Reuters",
        "url": "https://reuters.com",
        "credibility": 95,
        "type": "media"
      }
    ],
    "verificationNotes": "Vérifié par nos experts"
  },
  "analysis": {
    "aiAnalysis": {
      "summary": "Analyse détaillée...",
      "keyPoints": ["Point clé 1", "Point clé 2"]
    }
  }
}
```

### Users

#### GET /users/profile
Récupérer le profil de l'utilisateur connecté.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

#### PUT /users/profile
Mettre à jour le profil utilisateur.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "bio": "Fact-checker passionné",
  "location": "Paris, France",
  "website": "https://john-doe.com"
}
```

#### GET /users/stats
Récupérer les statistiques de l'utilisateur.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Response:**
```json
{
  "success": true,
  "stats": {
    "verificationsCount": 25,
    "contributionsCount": 15,
    "accuracy": 92.5,
    "totalViews": 1500,
    "totalLikes": 250,
    "totalShares": 75
  }
}
```

#### GET /users/leaderboard
Récupérer le classement des utilisateurs.

**Query Parameters:**
- `limit` (number): Nombre d'utilisateurs (défaut: 10)
- `period` (string): Période (all, week, month)

**Response:**
```json
{
  "success": true,
  "leaderboard": [
    {
      "username": "expert_marie",
      "profile": {
        "firstName": "Marie",
        "lastName": "Dupont"
      },
      "reputation": {
        "score": 1500,
        "level": "Expert"
      },
      "stats": {
        "verificationsCount": 150,
        "contributionsCount": 75
      },
      "totalScore": 2250
    }
  ]
}
```

### Content Analysis

#### POST /content/analyze
Analyser du contenu avec l'IA.

**Headers:**
```
Authorization: Bearer <jwt-token>
```

**Body:**
```json
{
  "content": "Contenu à analyser...",
  "type": "text"
}
```

**Response:**
```json
{
  "success": true,
  "analysis": {
    "summary": "Résumé de l'analyse...",
    "keyPoints": ["Point 1", "Point 2"],
    "redFlags": ["Drapeau rouge 1"],
    "biasDetection": {
      "level": "low",
      "types": [],
      "confidence": 0.8
    },
    "sentiment": {
      "score": 0.1,
      "label": "neutral"
    },
    "intent": {
      "type": "informative",
      "confidence": 0.7
    },
    "credibility": {
      "score": 75,
      "level": "Fiable",
      "factors": ["Source identifiable", "Langage neutre"]
    }
  }
}
```

#### GET /content/sources
Récupérer les sources fiables.

**Query Parameters:**
- `category` (string): Filtrer par catégorie
- `limit` (number): Nombre de sources (défaut: 20)

**Response:**
```json
{
  "success": true,
  "sources": [
    {
      "name": "Reuters",
      "url": "https://www.reuters.com",
      "credibility": 95,
      "type": "media",
      "category": "general",
      "description": "Agence de presse internationale reconnue"
    }
  ]
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Please enter a valid email"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "No token, authorization denied"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Server error"
}
```

## Rate Limiting
L'API limite les requêtes à 100 par IP par 15 minutes.

## Pagination
Les endpoints qui retournent des listes utilisent la pagination avec les paramètres :
- `page`: Numéro de page (défaut: 1)
- `limit`: Nombre d'éléments par page (défaut: 10)

La réponse inclut :
- `docs`: Liste des éléments
- `totalDocs`: Nombre total d'éléments
- `limit`: Limite par page
- `page`: Page actuelle
- `totalPages`: Nombre total de pages

## Support
Pour toute question concernant l'API, contactez-nous à api@weyecheck.com 