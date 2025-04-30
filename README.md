# Application Web

## Prérequis

-   Docker
-   Docker Compose

## Développement

Pour lancer l'application en mode développement :

```bash
# Lancer en arrière-plan
docker-compose -f docker-compose-dev.yaml up -d

# Exec docker
docker exec -it website-example-server-1 bash

npm run dev

# Copier node_modules du container vers le projet local
docker cp website-example-server-1:/app/node_modules .


# Arrêter l'application
docker-compose -f docker-compose-dev.yaml down
```

L'application sera accessible sur `http://localhost:8080`

## Production

Pour lancer l'application en mode production :

```bash
# Lancer en arrière-plan
docker-compose -f docker-compose-prod.yaml up -d

# Exec docker
docker exec -it website-example-server-1 bash

npm run preview

# Arrêter l'application
docker-compose -f docker-compose-prod.yaml down
```

L'application sera accessible sur `http://localhost:8080`

## Commandes utiles

```bash
# Voir les logs
docker logs -f website-example-server-1

# Reconstruire l'image
docker-compose -f docker-compose-dev.yaml build

# Nettoyer les conteneurs et volumes
docker-compose -f docker-compose-dev.yaml down -v

```

## Variables d'environnement

-   `NODE_ENV`: définit l'environnement (development/production)
-   Le port par défaut est 8080
